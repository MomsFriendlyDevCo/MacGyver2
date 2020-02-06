/**
* Shared front-end / back-end MacGyver utilities
* For Vue specific utilities see ./macgyver.vue
*/

import _ from 'lodash';
import sift from 'sift';
var $macgyver = {};

/**
* Storage for all MacGyver registered widgets
* @var {Object}
*/
$macgyver.widgets = {};

/**
* Add a known widget to the widgets lookup object
* @param {string} [id] The unique ID of the widget to add (this is optional if id is specified in properties)
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
* @param {array <string>} [options.shorthand] Other aliases the widget answers to in shorthand mode (e.g. `{shorthand: ['boolean']}` will map that widget to the boolean type
*
* @returns {$macgyver} This chainable object
*/
$macgyver.register = (id, options) => {
	// Argument mangling {{{
	if (id && options) { // both id + options
		options.id = id;
	} else if (_.isPlainObject(id)) { // Just options
		[id, options] = [id.id, id]; // Optional ID arg
	} else {
		throw new Error('$macgyver.register(id, options) requires either an ID + options or an options object');
	}
	// }}}

	if (!_.isString(options.id) || !options.id.startsWith('mg')) throw new Error('Widget IDs must be simple strings beginning with "mg*"');

	$macgyver.widgets[options.id] = {
		title: _.startCase(options.id),
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
* Set the given forms spec config
* @param {string} id The ID of the form to set the config of
* @param {Object|Array} config The config to set
* @returns {MacGyver} The chainable MacGyver instance
*/
$macgyver.forms.setConfig = (id, config) => {
	if (!$macgyver.$forms[id]) $macgyver.$forms[id] = {config: {}, data: {}};
	$macgyver.$forms[id].config = $macgyver.compileSpec(config).spec;
	return $macgyver;
};


/**
* Set the given forms spec data
* @param {string} id The ID of the form to set the config of
* @param {Object|Array} data The data population to set
* @returns {MacGyver} The chainable MacGyver instance
*/
$macgyver.forms.setData = (id, data) => {
	if (!$macgyver.$forms[id]) $macgyver.$forms[id] = {config: {}, data: {}};
	$macgyver.$forms[id].data = data;
	return $macgyver;
};


/**
* Convenience function to validate all MacGyver forms on a screen and return the array of failed validations
* @param {string} [id] The form ID to validate, if omitted the first form on the page is used
* @param {boolean} [showErrors=true] Allow the form to display a list of errors as well as returning them
* @returns {array <Object>} Collection where each item is {error}
*/
$macgyver.forms.validate = (id, showErrors = true) => {
	if (!$macgyver.$forms[id]) throw new Error('Invalid MacGyver form');
	console.warn('FIXME: Validation not yet supported');

	var responses = [];
	// FIXME: This needs to work internally using flatten()
	return true;
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


$macgyver.forms.getPath = (id, path, fallback) => {
	return $macgyver.utils.getPath($macgyver.$forms[id], path, fallback);
};


/**
* Compute the data prototype of the form
* This is an empty object with all the defaults populated
* @param {Object} spec The form spec object to exmaine
* @returns {Object} A prototype data object with all defaults populated
*/
$macgyver.forms.getPrototype = spec =>
	$macgyver
		.flatten(spec, {type: 'spec', want: 'array', wantDataPath: true})
		.reduce((data, node) => {
			if (!node.default) return data; // No default speciifed - skip

			$macgyver.utils.setPath(data, node.path, node.default);
			return data;
		}, {});


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
		console.log('[$macgyver]', 'Loading foreground', id, {status});
	} else if (status) {
		console.log('[$macgyver]', 'Loading background', id, {status});
	} else {
		console.log('[$macgyver]', 'Stop loading', id, {status});
	}
};


/**
* Provide a warning message to the user
* @param {string} message The message to display
*/
$macgyver.notify.warn = message => console.log('[$macgyver]', 'WARN', message);


/**
* Provide an error message to the user
* @param {string} message The message to display
*/
$macgyver.notify.error = message => console.log('[$macgyver]', message);
// }}}


/**
* Flatten the a spec into an object lookup where each key is the dotted notation of the key
* NOTE: Specifying {want:'array'} will add the extra property 'path' onto the output collection
* @param {Object|array} root The data or spec object to examine, this should be the root object but can also convert arrays into objects on the fly (although this is slower)
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
		root: _.isArray(root) ? $macgyver.compileSpec(root).spec : root,
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
		if (settings.root.items) {
			settings.type = 'spec';
		} else if (_.every(settings.root, (k, v) => !v.items)) {
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
	depthScanner(settings.root, [], [], 0);

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
* @returns {Object} An object composed of the keys {spec}
*/
$macgyver.compileSpec = (spec, options) => {
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

	var spec = settings.clone ? _.cloneDeep(spec) : spec; // Output spec

	if (settings.deblank && _.isEmpty(spec)) { // Convert empty or unusable values into a skeleton
		spec = {type: 'mgContainer', items: []};
	}
	if (settings.convertArray && _.isArray(spec)) { // convert array spec -> object?
		spec = settings.convertArrayWrapper(spec);
	}
	if (settings.convertShorthand && settings.convertShorthandDetect(spec)) { // Is shorthand format
		spec = settings.convertShorthandTranslate(spec);
	}

	/**
	* Collection of items that have a showIf property
	* @var {array<Object>} Each widget with a showIf property
	*/
	var showIfs = [];

	$macgyver.flatten(spec, {
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
				Object.assign(widget, $macgyver.widgets[widget.type].config
					|> v => _.pickBy(v, (v, k) => !_.has(widget, k) && _.has(v, 'default'))
					|> v => _.mapValues(v, v => v.default)
				);
			}

			// Glue .show property to all elements that omit it
			widget.show = widget.show == undefined ? true : !!widget.show;

			// Add all widgets with a .showIf expression into a quick-lookup collection
			if (widget.showIf) {
				widget.showIf = $macgyver.utils.evalCompile(widget.showIf); // Compile showIf property so its as fast as possible
				showIfs.push(widget);
			}

			if (settings.widgetTitles && !widget.title && widget.id) widget.title = _.startCase(widget.id);
		})

	return {spec, showIfs};
};


/**
* Register of known forms to their Vue instance / plain object mapping
* For front-end MacGyver this is the VueInstance object of the registered form
* For the back-end this is a simple object of the form `{config, data}`
* @var {VueInstance|Object>}
* @property {Object} config The form spec
* @property {Object} data The current form data
*/
$macgyver.$forms = {};


/**
* Set of misc utility helper functions
* @var {Object};
*/
$macgyver.utils = {};


/**
* Local storage for the global object
* This is a wrapper until `globalThis` becomes available in both Node and the browser
* @var {Object} The global scope
*/
$macgyver.utils.global = (()=> {
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
})();


/**
* Fetch any artbitrary data set from a URL
* This function is designed to accept a customizable single-string URL which the user can customize and a spec options object that the requesting widget can define
* NOTE: This function will invoke the loading notifier and call the warning notifier on an error
*
* @param {string} [url] The URL to fetch
* @param {Object} options Additional options
* @param {string} [options.url] Alternate way to pass the URL
* @param {boolean} [options.type='object'] What data type to expect from the server. ENUM: 'object', 'array', 'raw'. If array and mappings are specified each member of the collection is mapped and an array returned
* @param {function} [options.format] Data formatter, defaults to a simple passthrough. Called as `(output, session)`
* @param {string|function} [options.formatError] Error thrown if the formatter fails, can be a string or function called as `(err)`. Defaults to 'Unable to format data feed from ${url} - ${err.toString()}`
* @param {string} [options.from] The field from where to retrieve the value
*
* @param {Object <Object>} [options.mappings={}] Mappings to extract, each key is the mapping name with the value as an object containing the below spec
* @param {boolean} [options.mappings.required=false] Whether the mapping is required
*
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
$macgyver.utils.fetch = (url, options) =>
	Promise.resolve()
		// Sanity checks {{{
		.then(()=> $macgyver.$http || Promise.reject('No Axios compatible HTTP library - set $macgyver.$http to the library reference'))
		// }}}
		// Injection options from URL {{{
		.then(()=> {
			if (_.isPlainObject(url)) {
				[url, options] = [url.url, url];
			} else {
				options.url = url;
			}
			if (!url) throw new Error('Unknown URL to fetch');
		})
		// }}}
		// Create the initial session {{{
		.then(()=> ({
			mappings: {}, // Parsed mappings (either a copy of settings.mappings || extracted from the URL)
			parsedUrl: new URL(url, window.location),
			settings: {
				type: 'object',
				mappings: {}, // Optional mappings the user provided
				format: (data, session) => data,
				formatError: err => `Unable to format data feed from ${url} - ${err.toString()}`,
				...options,
			},
		}))
		// }}}
		// Extract mappings from the URL string {{{
		.then(session => {
			if (!_.isEmpty(options.mappings)) { // Mappings are specified in options
				session.mappings = options.mappings;
			} else { // Try to extract mappings if options doesn't already have a parsed set
				Array.from(session.parsedUrl.searchParams.entries())
					.forEach(pair => {
						var [k, v] = pair;
						if (k.startsWith('$')) {
							session.mappings[k.substr(1)] = {required: false, from: v};
							session.parsedUrl.searchParams.delete(k);
						}
					});
			}

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
			switch (session.settings.type) {
				case 'array':
					if (!_.isArray(session.response.data)) throw `Expected an array from data feed "${url}" but got a non-array`;
					if (!_.isEmpty(session.mappings)) {
						session.output = session.response.data.map((item, itemIndex) =>
							_.mapValues(session.mappings, (v, k) => {
								if (v.required && item[v.from] === undefined) throw new Error(`Required field ${v.from} is not present in data feed for item #${itemIndex+1}`);
								return item[v.from];
							})
						);
					} else {
						session.output = session.response.data;
					}
					return session;
				case 'object':
					if (!_.isPlainObject(session.response.data)) throw `Expected object return from data feed "${url}" but got a non-plain-object`;
					if (!_.isEmpty(session.mappings)) {
						session.output = _.mapValues(session.mappings, (v, k) => {
							if (v.required && session.response.data[k] === undefined) throw new Error(`Required field ${k} is not present in data feed for item #${itemIndex+1}`);
							return session.response.data[v.from];
						})
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
* Attempt to parse a rough JS expression into a Sift / Mongo compatible expression
* This makes future calls to $macgyver.utils.evalMatch() much quicker
* TODO: This probably needs replacing / merging with [sift-shorthand](https://github.com/hash-bang/sift-shorthand) at some point
* @param {Object|string} expression Input expression, if this is an object it is assumed to already be a sift expression and returned uneffected
* @param {boolean} [asFunc=true] Return a Sift filtering function (the most efficient method), if falsy return the compiled object (useful for debugging)
* @returns {Sift} Sift function for use with $macgyver.utils.evalMatch()
*/
$macgyver.utils.evalCompile = (expression, asFunc = true) => {
	var match;
	if (_.isFunction(expression)) { // Already compiled Sift function
		if (!asFunc) throw new Error('Cannot convert compiled Sift object back to an object - disable asFunc parameter');
		return expression;
	} else if (_.isPlainObject(expression)) { // An object but not as Sift function
		return (asFunc ? sift(expression) : expression);
	} else if ((_.isString(expression)) && (match = /^\s*(?<left>[\w\d\.]+)(?<operand>\s*==?\s*|\s*\!=\s*|\s*<=?\s*|\s*>=?\s*|\s+\$lte?\s+|\s+\$gte?\s+)(?<right>.+)\s*$/.exec(expression))) { // Simple direct (in)equality e.g. `a == 1', `b != 'this'`
		match.groups.operand = match.groups.operand.trim();
		if (isFinite(match.groups.right)) {
			match.groups.right = +match.groups.right;
		} else if (/^(["']).*\1$/.test(match.groups.right)) { // Enclosed in " or '
			match.groups.right = match.groups.right.substr(1, match.groups.right.length - 2);
		}

		var obj;
		if (['=', '==', '$eq'].includes(match.groups.operand)) { // Direct equality
			obj = {[match.groups.left]: match.groups.right};
		} else {
			var siftOperand =
				['!=', '$ne'].includes(match.groups.operand) ? '$ne'
				: ['>', '$gt'].includes(match.groups.operand) ? '$gt'
				: ['<', '$lt'].includes(match.groups.operand) ? '$lt'
				: ['>=', '$gte'].includes(match.groups.operand) ? '$gte'
				: ['<=', '$lte'].includes(match.groups.operand) ? '$lte'
				: throw new Error(`Unknown operand "${match.groups.operand}" while parsing expression "${expression}"`);

			obj = {[match.groups.left]: {[siftOperand]: match.groups.right}};
		}

		return (asFunc ? sift(obj) : obj);
	} else {
		throw new Error(`Error parsinng expression "${expression}", $macgyver.utils.evelParse() can only process simple expressions for now, use Sift object syntax for more complex tests`);
	}
};


/**
* Evaluate an expression and return if it matches the given environment
* This function is used by the `showIf` parameter to determine field visibility
* NOTE: Passing a string to this function is possible but its better to precompile the expression via $macgyver.utils.evalCompile() first so its quicker to process each time
* @param {string|Object|Sift} expression String expression (which will be parsed), object (which will be parsed) or Sift object to filter by in asending order of efficiency
* @param {Object} env Local environment to compare
*/
$macgyver.utils.evalMatch = (expression, env) => {
	return ([env].filter($macgyver.utils.evalCompile(expression))).length == 1;
};


/**
* Navigate down a dotted notation path and set the final value using Vue.set() (or simple object mutation if Vue is not available)
* This function is designed to work as simillaly as possible to _.set()
* @param {Object} target The source object, usually the root controller
* @param {string|array} path Either a path in dotted or array notation
* @param {*} value The value set
*/
$macgyver.utils.setPath = (target, path, value) => {
	var chunks = typeof path == 'string' ? path.split('.') : path;

	// Ensure all paths up to this chunk-1 exist
	var targ = target;
	for (var i = 0; i < chunks.length - 1; i++) {
		if (targ[chunks[i]] === undefined) {
			targ = $macgyver.utils.set(targ, chunks[i], {}); // Traversal point not yet setup
		} else {
			targ = targ[chunks[i]]; // Recurse into the newly created child (or the existing branch)
		}
	}
	return $macgyver.utils.set(targ, chunks[chunks.length-1], value);
};


/**
* Mapping around Vue.set (if its available) or simple key/val setting
* @param {Object} target The target object to mutate
* @param {string} key The key to set
* @param {*} val The value to set
* @returns {*} The set value
*/
$macgyver.utils.set = $macgyver.utils.global.Vue ? Vue.set : (target, key, val) => target[key] = val;


/**
* Provides a function to quickly get a data path on a Vue component by its path
* This function is designed to work as simillaly as possible to _.get()
* @param {Object} target The source object, usually the root controller
* @param {string|array} path Either a path in dotted or array notation
* @param {*} [fallback=undefined] Optional fallback to return if no value is found
* @returns {*} Either the found value or the fallback
*/
$macgyver.utils.getPath = (target, path, fallback) => {
	return _.get(target, path, fallback);
};


export default $macgyver;
