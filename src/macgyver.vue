<script>
import Vue from 'vue';

/**
* Main MacGyver "service" (acutally just a Vue prototype extension)
* This service requires {$http, $toast} to be available on the prototype
* @var {Object}
*/
Vue.prototype.$macgyver = (()=> {
	var $macgyver = {};

	// Sanity checks
	['$http'].forEach(service => {
		if (!$macgyver[service]) console.warn(`Vue.prototype.${service} is not available, declare it before MacGvyer loads or there may be errors later`);
	});

	/**
	* Storage for all MacGyver registered widgets
	* @var {Object}
	*/
	$macgyver.widgets = {};

	/**
	* Add a known widget to the widgets lookup object
	* @param {string} id The unique ID of the widget to add
	* @param {Object} [properties] Optional properties of the widget to add
	* @param {boolean} [options.isContainer] Indicates that the widget can contain other widgets (under the `items` array)
	* @param {boolean} [options.isContainerArray] Addition to `isContainer` that indicates the widget will contain an array of rows (like a table)
	* @param {string} [options.title=id] Optional human readable title of the widget
	* @param {string} [options.icon="far fa-square"] Optional icon to display in the form editor
	* @param {Object} [options.config] Optional list of configuration the widget takes, this is in the form of a MacGyver form
	* @param {boolean} [options.userPlaceable=true] Whether this component should be listed as placeable by the user (if false, its hidden in the mgFormEditor UI)
	* @param {string} [options.category="Misc"] Which category this widget fits into when displaying the 'Add widget' dialog in mgFormEditor
	* @param {boolean|function} [options.format=false] Whether the value of the widget can be exposed as a string. If this is === true the exact value is used, if === false (default) it will be ignored when making a digest of the form, if a function it will be called as (value) and expected to return a string value. NOTE: In the spec file, which is a flat JSON file any function argument will be overridden to `true`
	* @param {string} [options.formatAlign='left'] The prefered column alignment when showing the result of `options.format`
	* @param {boolean} [options.preferId=true] Whether the widget recommends needing an ID when its created, if false, no default ID is allocated via mgFormEditor
	*
	* @returns {$macgyver} This chainable object
	*/
	$macgyver.register = (id, options) => {
		$macgyver.widgets[id] = {
			title: _.startCase(id),
			userPlaceable: true,
			category: 'Misc',
			icon: 'far far-square',
			format: false,
			formatAlign: 'left',
			isContainer: false,
			isContainerArray: false,
			preferId: true,
			...options,
		};

		return $macgyver;
	};


	$macgyver.$nextId = 0;
	$macgyver.nextId = ()=> `mgForm${$macgyver.$nextId++}`;


	/**
	* Set of convenience functions to manage on-screen MacGyver forms
	*/
	$macgyver.forms = {};


	/**
	* Convenience function to validate all MacGyver forms on a screen and return the array of failed validations
	* @param {string} [id] The form ID to validate, if omitted the first form on the page is used
	* @param {boolean} [showErrors=true] Allow the form to display a list of errors as well as returning them
	* @returns {array <Object>} Collection where each item is {error}
	*/
	$macgyver.forms.validate = (id, showErrors = true) => {
		if (!id) id = _.keys($macgyver.$forms)[0];
		if (!id) throw new Error('No MacGyver form found');
		console.log('Use form', id);

		var responses = [];
		$macgyver.forms.emitDown(id, 'mgValidate', error => responses.push({error}));
		if (showErrors) $macgyver.forms.emit(id, 'mgErrors', responses);

		return responses;
	};


	/**
	* Emit a message to a specific mgForm element
	* @param {string} id The ID of the form to emit to
	* @param {string} msg The message to emit
	* @param {*} [payload...] The payload of the message to emit
	*/
	$macgyver.forms.emit = (id, msg, ...payload) => {
		if (!$macgyver.$forms[id]) throw new Error('Unknown form ID');
		$macgyver.$forms[id].$emit(msg, ...payload);
	};


	/**
	* Emit a message to all child controls of a given form
	* @param {string} id The ID of the form to emit to
	* @param {string} msg The message to emit
	* @param {*} [payload...] The payload of the message to emit
	*/
	$macgyver.forms.emitDown = (id, msg, ...payload) => {
		if (!$macgyver.$forms[id]) throw new Error('Unknown form ID');
		$macgyver.$forms[id].$emitDown(msg, ...payload);
	};


	/**
	* Execute a function on a form
	* The default behaviour of this function is documented within the function
	* @param {string} id The ID of the form to execute the function on
	* @param {string} action The action to execute
	* @emits mgRun Event fired at the form level only. Use the form property handleActions to specify if the form should handle or trap the event to override
	*/
	$macgyver.forms.run = (id, action) => {
		// 1. Emit mgRun to parents and see if they want to handle it {{{
		var handled = false;
		$macgyver.$forms[id].$emitUp('mgRun', {action}, isHandled => {
			if (isHandled) handled = true;
		});
		if (handled) return;
		// }}}

		// 2. Use FORM.$props.onAction(action) and see if returns truthy {{{
		if ($macgyver.$forms[id].$props.onAction && $macgyver.$forms[id].$props.onAction(action)) return;
		// }}}

		// 3. See if FORM.$props.actions[action] exists and if so whether it returns truthy {{{
		var [junk, actionReadable, actionArgs] = /^([a-z0-9\_]*?)(\(.*\))?$/i.exec(action) || [];
		if (actionReadable && $macgyver.$forms[id].$props.actions && $macgyver.$forms[id].$props.actions[actionReadable]) {
			// Collapse strings to functions
			var func = _.isString($macgyver.$forms[id].$props.actions[actionReadable]) ? $macgyver.$forms[id][actionReadable]
				: $macgyver.$forms[id].$props.actions[actionReadable];

			// Tidy up actionArgs
			actionArgs = _(actionArgs || '').trim('()').split(',').map(i => i && JSON.parse(i.replace(/'/g, '"')));

			if (func.apply($macgyver.$forms[id], actionArgs)) return;
		}
		// }}}

		// 4. If all else failed and FORM.$props.actionsFallback is true - handle it via vm.$eval
		$macgyver.$forms[id].$eval.call($macgyver.$forms[id], action);
		// }}}
	};


	// $macgyver.notify{} {{{
	/**
	* A collection of ways MacGyver can notify the user
	* These should be replaced by whatever your local framework supports
	*/
	$macgyver.notify = {};


	/**
	* Signify that a loading event is taking place
	* This function should be overridden by the framework to include whatever load handling is requried
	* By default it uses https://www.npmjs.com/package/@momsfriendlydevco/loader
	* @param {string} id The unique ID for the loading item
	* @param {boolean} [status=true] Whether the item is performing an operation that requires loading
	* @param {Object} [options] Additional options
	* @param {boolean} [options.foreground=false] Whether the loading event should occur in the foreground
	*/
	$macgyver.notify.loading = (id, status = true, options) => {
		if (status && options && options.foreground) {
			Loader.start(id, status);
		} else if (status) {
			Loader.startBackground(id, status);
		} else {
			Loader.stop(id);
		}
	};


	/**
	* Provide a warning message to the user
	* @param {string} message The message to display
	*/
	$macgyver.notify.warn = message => $toast.warning(message);


	/**
	* Provide an error message to the user
	* @param {string} message The message to display
	*/
	$macgyver.notify.error = message => $toast.error(message);
	// }}}


	/**
	* Glue various MacGyver emitter handlers to a registered component
	* Registers a few universal handles, which can be called via $macgyver.forms.emitDown(id, EVENT):
	*   - mgIdentify - component will respond with its Vue instance
	*   - mgRefresh - component with refresh its data state
	*
	* Adds a watcher which will emit `mgChange` when the `data` property changes (basically transforms the change event to `mgChange`)
	*
	* @param {VueInstance} component The component to register against
	*/
	$macgyver.inject = component => {
		// Sanity checks {{{
		if (!component.$props.form) throw new Error('Cannot locate $props.form <string>, make sure that vm{props: {form: String, config: Object}} is declared');
		// }}}

		component.$on('mgIdentify', reply => reply(component));

		// Read in initial data value
		if (component.$props.config.$dataPath) {
			var refresher = ()=> {
				component.data = _.get($macgyver.$forms[component.$props.form].$props.data, component.$props.config.$dataPath);
			};

			component.$on('mgRefresh', refresher);
			refresher();
		}

		// Inject data watcher which transforms change operations into emitters to the nearest parent form {{{
		component.$watch('data', val => {
			$macgyver.$forms[component.$props.form].$emit('mgChange', component.$props.config.$dataPath, val);
		});
		// }}}
	};


	/**
	* Flatten the a spec into an object lookup where each key is the dotted notation of the key
	* NOTE: Specifying {want:'array'} will add the extra property 'path' onto the output collection
	* @param {Object} root The data or spec object to examine
	* @param {Object} [options] Optional settings to use
	* @param {number} [options.maxDepth=0] How far down the tree to recurse, set to falsy to infinitely recurse
	* @param {Object|function} [options.filter] Either a Lodash match expression or a function to run on each widget - only truthy values are appended to the output. Function is called as `(widget, dataPath, specPath, depth)`
	* @param {Object|function} [options.filterChildren] Either a Lodash match expression or a function to run on each widget - only truthy values are recursed into. Function is called as `(widget, dataPath, specPath, depth)`
	* @param {string} [type="auto"] How to recurse into items. ENUM: 'auto' (try to determine how to recurse from root element), 'spec', 'data'
	* @param {string} [want="object"] How to return the output. ENUM: 'object' (an object where each key is the path and the value is the object), 'array' (a flattened version of an object), object is faster
	* @param {boolean|string} [wantDataPath=false] Whether to mutate the output widget with a dotted notation string indicating where to look in a data object for the value of the widget, if this is a string it specifies the key to use as storage
	* @param {boolean} [wantSpec=false] Whether to mutate the output widget with the widget specification as an object for each item
	* @param {boolean|string} [wantSpecPath=false] Whether to mutate the output widget with a dotted notation path on where to find the widget within a spec object, if this is a string it specifies the key to use as storage
	*/
	$macgyver.flatten = (root, options) => {
		var settings = _.defaults(options, {
			maxDepth: 0,
			filter: undefined,
			filterChildren: undefined,
			type: 'auto',
			want: 'object',
			wantDataPath: false,
			wantSpec: false,
			wantSpecPath: false,
		});

		if (settings.filter && !_.isFunction(settings.filter) && _.isObject(settings.filter)) settings.filter = _.matches(settings.filter);
		if (settings.want != 'object' && settings.want != 'array') throw new Error('$macgyver.flatten({want}) can only be "object" or "array"');
		if (settings.type == 'auto') {
			if (root.items) {
				settings.type = 'spec';
			} else if (_.every(root, (k, v) => !v.items)) {
				settings.type = 'data';
			} else {
				throw new Error('Cannot determine type of input object to $macgyver.flatten(), specify it explicitly with {type=spec|data}');
			}
		}

		var found = settings.want == 'object' ? {} : [];

		var depthScanner = (node, dataPath, specPath, depth) => {
			if (!_.isObject(node)) return;

			// Add to bucket of found objects?
			if (
				!settings.filter // No filter
				|| settings.filter.call(node, node, path, depth) // OR we pass the filter
			) {
				if (settings.wantDataPath) node[_.isString(settings.wantDataPath) ? settings.wantDataPath : 'path'] = dataPath.concat([node.id]).filter(i => i).join('.');
				if (settings.wantSpecPath) node[_.isString(settings.wantSpecPath) ? settings.wantSpecPath : 'specPath'] = specPath.join('.');

				if (settings.want == 'object') {
					if (node.id) found[node.id] = node;
				} else {
					found.push(node);
				}
			}

			// Recurse into children?
			var recursionSubject = settings.type == 'spec' ? node.items : node;

			if (
				_.isArray(recursionSubject)
				&& (
					!settings.filterChildren // No filter
					|| settings.filterChildren.call(node, node, dataPath, specPath, depth) // ...or we pass the filter
				)
				&& (!settings.maxDepth || depth <= settings.maxDepth)
			) {
				recursionSubject.forEach((item, itemIndex) =>
					depthScanner(item, dataPath, specPath.concat(settings.type == 'spec' ? ['items', itemIndex] : [itemIndex]), depth + 1)
				);
			}
		};
		depthScanner(root, [], [], 0);

		return found;
	};


	/**
	* Apply various criteria to a 'rough' spec to turn it into a clean one
	*
	* NOTE: 'Shorthand' is a simple `{id1: spec1, id2: spec2}` way of setting up a form. See the widget config for an example
	*       Shorthand may also have types that omit the `mg` prefix e.g. `text` instead of `mgText`
	*
	* @param {Object|array} spec A MacGyver spec to process and mutate
	* @param {Object} [options] Additional options to use
	* @param {boolean} [options.clone=true] Whether to clone the object before neatening, slow but Vue disallows mutation
	* @param {boolean} [options.convertArray=true] Convert arrays to object if not already in that format
	* @param {function} [options.convertArrayWrapper] Function used to convert from array - defaults to a simple mgContainer wrapper. Called as (spec)
	* @param {boolean} [options.convertShorthand=true] Accept shorthand format and convert if necessary
	* @param {function} [options.convertShorthandDetect] Function used to detect shorthand format - defaults to object with valid string keys sans 'id' field. Called as (spec)
	* @param {function} [options.convertShorthandTranslate] Function used to convert shorthand format. Called as (spec)
	* @param {boolean} [options.widgetDefaults=true] Assign each item its default values from the widget config if that setting is omitted
	* @param {string} [options.widgetTitles=true] Add any missing title fields from the ID
	* @param {boolean} [options.deblank=true] Reformat null/undefined/empty forms into a skeleton form
	* @returns {Object} The mutated spec
	*/
	$macgyver.neatenSpec = (spec, options) => {
		var settings = {
			clone: true,
			convertArray: true,
			convertArrayWrapper: items => ({type: 'mgContainer', showTitles: false, items}),
			convertShorthand: true,
			convertShorthandDetect: spec =>
				_.isPlainObject(spec) // Simple object
				&& !_.has(spec, 'type') // It doesn't have a type key (i.e. there is only one item in this object
				&& _.every(spec, (v, k) => !_.has(v, 'id') && (!_.has(v, 'type') || v.type != 'mgContainer')), // Each item lacks and ID and either doesn't have a type or that type is not a container
			convertShorthandTranslate: spec => ({
				type: 'mgContainer',
				items: _.map(spec, (v, k) => ({
					id: k,
					...v,
					type: (()=> {
						if (_.isString(v)) v = {type: v}; // Only key given is a string, assume it means type
						if (!v.type) return 'mgText'; // No type given, assume mgText
						if (v.type.startsWith('mg')) return v.type; // Type begins with 'mg' - trust the user

						v.type = v.type.toLowerCase();
						return Object.keys($macgyver.widgets) // Search for likely widgets
							.find(wid => {
								var widget = $macgyver.widgets[wid];
								return (
									widget.id.substr(2).toLowerCase() == v.type // Matched after 'mg' part. e.g. 'text' becomes 'mgText'
									|| (widget.shorthand || []).find(s => s == v.type) // Matched a shorthand alias
								);
							})
							|| v.type;
					})(),
				})),
			}),
			widgetDefaults: true,
			widgetTitles: true,
			deblank: true,
			...options,
		};

		var layout = settings.clone ? _.cloneDeep(spec) : spec; // Output spec

		if (settings.deblank && _.isEmpty(layout)) { // Convert empty or unusable values into a skeleton
			layout = {type: 'mgContainer', items: []};
		}
		if (settings.convertArray && _.isArray(layout)) { // convert array spec -> object?
			layout = settings.convertArrayWrapper(layout);
		}
		if (settings.convertShorthand && settings.convertShorthandDetect(layout)) { // Is shorthand format
			layout = settings.convertShorthandTranslate(layout);
		}

		$macgyver.flatten(layout, {
			type: 'spec',
			want: 'array',
			wantDataPath: '$dataPath',
			wantSpecPath: '$specPath',
		})
			.forEach(widget => {
				if (!widget.type || !$macgyver.widgets[widget.type]) { // Remap unknown widget
					console.log(`Unknown widget '${widget.type}'`, widget);
					widget.errorText = widget.type ? `Unknown widget '${widget.type}'` : 'Widget type not specified';
					widget.errorWidgetType = widget.type;
					widget.type = 'mgError';
				} else if (settings.widgetDefaults) {
					Object.assign(widget, _($macgyver.widgets[widget.type].config)
						.pickBy((v, k) => !_.has(widget, k) && _.has(v, 'default'))
						.mapValues(v => v.default)
						.value()
					);
				}

				if (settings.widgetTitles && !widget.title && widget.id) widget.title = _.startCase(widget.id);
			})

		return layout;
	};


	/**
	* Fetch any artbitrary data set from a URL
	* This function is designed to accept a customizable single-string URL which the user can customize and a spec options object that the requesting widget can define
	* NOTE: This function will invoke the loading notifier and call the warning notifier on an error
	*
	* @param {string} url The URL to fetch
	* @param {Object} [options] Additional options
	* @param {boolean} [options.type='object'] What data type to expect from the server. ENUM: 'object', 'array', 'raw'. If array and mappings are specified each member of the collection is mapped and an array returned
	* @param {Object <Object>} [options.mappings={}] Mappings to extract, each key is the mapping name with the value as an object containing `{required <boolean>}`
	* @param {function} [options.format] Data formatter, defaults to a simple passthrough. Called as `(output, session)`
	* @param {string|function} [options.formatError] Error thrown if the formatter fails, can be a string or function called as `(err)`. Defaults to 'Unable to format data feed from ${url} - ${err.toString()}`
	* @returns {Object} The extracted data object
	*
	* @example Fetch a simple collection
	* fetch('/api/datafeeds/random/users')
	*
	* @example Generate a random number as an object and return the extracted value as the promise response
	* fetch('/api/datafeeds/random/number?$extract=number', {mappings: {extract: {required: true}, format: d => d.extract}});
	*
	* @example Fetch a collection of items extracting both 'id' and 'title' fields
	* fetch('/api/datafeeds/random/users?$title=name&$id=_id', {mappings: {_id: {required: true}, title: {required: true}}})
	*/
	$macgyver.fetch = (url, options) =>
		Promise.resolve()
			// Create the initial session {{{
			.then(()=> ({
				mappings: {},
				parsedUrl: new URL(url, window.location),
				settings: {
					type: 'object',
					mappings: {},
					format: (data, session) => data,
					formatError: err => `Unable to format data feed from ${url} - ${err.toString()}`,
					...options,
				},
			}))
			// }}}
			// Extract mappings from the URL string {{{
			.then(session => {
				if (!_.isEmpty(session.settings.mappings)) { // Extract mappings
					Array.from(session.parsedUrl.searchParams.entries())
						.forEach((pair) => {
							var [k, v] = pair;
							if (k.startsWith('$')) {
								session.mappings[k] = v;
								session.parsedUrl.searchParams.delete(k);
							}
						});
				}

				return session;
			})
			// }}}
			// Verify that requested mappings are present {{{
			.then(session => {
				var checkRequired = _(session.settings)
					.pickBy((v, k) => k.required && !_.has(session.mappings, v))
					.map((v, k) => k)
					.value();

				if (checkRequired.length) throw `Required URL "${url}" is missing the required mappings: ${checkRequired.join(', ')}`;
				return session;
			})
			// }}}
			// Make the request {{{
			.then(session =>
				$macgyver.$http.get(session.parsedUrl.toString())
					.then(res => session.response = res)
					.then(()=> session)
			)
			// }}}
			// Apply object cohersion + mappings {{{
			.then(session => {
				// FIXME: This logic is probably buggered - Too drunk, MC - 2019-01-04 
				switch (session.settings.type) {
					case 'array':
						if (!_.isArray(session.response.data)) throw `Expected an array from data feed "${url}" but got a non-array`;
						if (!_.isEmpty(session.mappings)) {
							var pickKeys = _.map(session.settings.mappings, (v, k) => session.mappings['$' + k])
							session.output = session.response.data.map(doc => // Remap data using mappings
								_.pick(doc, pickKeys)
							)
						} else {
							session.output = session.response.data;
						}
						return session;
					case 'object':
						if (!_.isPlainObject(session.response.data)) throw `Expected object return from data feed "${url}" but got a non-plain-object`;
						if (!_.isEmpty(session.mappings)) {
							session.output = _(session.mappings)
								.mapKeys((v, k) => k.replace(/^\$/, '')) // Remove '$' prefix
								.mapValues((v, k) => session.response.data[session.mappings['$' + k]])
								.value();
						} else {
							session.output = session.response.data;
						}
						return session;
					case 'raw':
						session.output = session.response.data;
						return session;
				}
			})
			// }}}
			// Apply formatter {{{
			.then(session => {
				try {
					return session.settings.format(session.output, session)
				} catch (err) {
					throw _.isString(session.settings.formatError)
						? session.settings.formatError
						: session.settings.formatError(err);
				}
			})
			// }}}
			.catch(err => {
				$macgyver.notify.error(err);
				throw err;
			})
			.finally(()=> $macgyver.notify.loading(url, false))


	/**
	* Register of known forms to their Vue instance mapping
	* @var $Object <VueInstance>}
	*/
	$macgyver.$forms = {};


	/**
	* Registeres a MacGyver form by its generated ID
	* @params {VueInstance} component The Vue component to register
	*/
	$macgyver.injectForm = component => {
		$macgyver.$forms[component.id] = component;
		component.$on('mgIdentify', reply => reply(component));
	};


	// Absorb various methods from a Vue prototype
	var vInstance = new Vue();
	['$on', '$off', '$once', '$emit'].forEach(method => $macgyver[method] = vInstance[method].bind(vInstance));

	return $macgyver;
})();

export default Vue.prototype.$macgyver;
</script>
