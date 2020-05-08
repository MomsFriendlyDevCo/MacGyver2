<script>
import MacGyver from 'macgyver.js';
import Vue from 'vue';

/**
* Main MacGyver "service" (acutally just a Vue prototype extension)
* This service requires {$http, $toast} to be available on the prototype
* @var {Object}
*/
Vue.prototype.$macgyver = (()=> {
	var $macgyver = MacGyver;

	/**
	* Axios compatible HTTP fetcher
	* Optional binding unless anything requires web access
	* @var {Object}
	*/
	$macgyver.$http;


	/**
	* Doop compatible Prompt handler
	* @var {Object}
	*/
	$macgyver.$prompt;


	/**
	* Generic fallback action handler
	* @var {function} Called as `(action, params...)`
	i*/
	$macgyver.$eval = (...args) => console.warn('Fallback $macgyver.$eval(', ...args, ')');


	// Absorb various methods from a Vue prototype
	var vInstance = new Vue();
	['$on', '$off', '$once', '$emit'].forEach(method => $macgyver[method] = vInstance[method].bind(vInstance));


	// Auto-bind to Axios if its defined
	if ($macgyver.utils.global.axios) $macgyver.$http = $macgyver.utils.global.axios;


	Vue.mgComponent = function(name, component) {
		if (macgyver.widgets[name]) throw new Error(`Cannot redeclare MacGyver component "${name}"`);
		macgyver.widgets[name] = {
			meta: {
				title: _.startCase(name),
				icon: 'far fa-rectangle-wide',
				category: 'Misc',
				preferId: false,
				shorthand: [],
				format: true,
			},
			...component,
		};

		var vueComponent = {
			inject: component.inject || ['$mgForm'], // Defer to component injects or default to injecting $mgForm
			data() { return {
				data: undefined,
				...(component.data ? component.data() : {}), // Import other data definitions from the object
			}},
			props: {
				$dataPath: {type: String},
				$specPath: {type: String},
				value: {},
				..._.mapValues(component.props || {}, prop => { // Rewrite MacGyver props into Vue compatible props
					var newProp = {
						...(prop.default ? {default: prop.default} : {}),
					};

					// FIXME: This needs putting into each mgComponent declaration for Vue validation
					// Convert prop type to Vue native instances {{{
					if (prop.vueType) {
						newProp.type = _.chain(prop.vueType)
							.castArray() // Splat into an array (even if its a simple string)
							.map(type => { // Map each item into the native type
								switch (type) {
									// String to type bindings (usually via vueType)
									case 'array': newProp.type = Array; break;
									case 'boolean': newProp.type = Boolean; break;
									case 'date': newProp.type = Date; break;
									case 'number': newProp.type = Number; break;
									case 'string': newProp.type = String; break;
									case 'any': break; // Do not append type checking
									default:
										console.warn(`Unknown vueType JS primative "${type}" while declaring component "${name}" - assuming "string"`);
										newProp.type = String;
								}
							})
							.thru(v => v.length == 1 ? v[0] : v) // Flatten 1 item arrays into its native type
							.value()
					} else {
						switch (prop.type) {
							case 'mgText':
							case 'mgChoiceButtons':
							case 'mgChoiceDropdown':
							case 'mgChoiceRadio':
							case 'mgChoiceTree':
							case 'mgCode':
							case 'mgColor':
							case 'mgEmail':
							case 'mgIcon':
							case 'mgQuery':
							case 'mgRestQuery':
							case 'mgTextArea':
							case 'mgUnknown':
							case 'mgUrl':
							case 'mgWysiwyg':
								newProp.type = String;
								break;
							case 'mgNumber':
								newProp.type = Number;
								break;
							case 'mgChoiceCheckbox':
							case 'mgToggle':
								newProp.type = Boolean;
								break;
							case 'mgChoiceList':
							case 'mgChoiceTags':
							case 'mgList':
							case 'mgTable':
								newProp.type = Array;
								break;
							case 'mgDate':
							case 'mgTime':
								newProp.type = Date;
								break;
							case Number:
							case String:
							case Array:
							case Date:
								console.warn('Used native binding in component prop (e.g. `{type: Array}`). Always use mg* component types so these components are editable in the mgFormEditor');
								newProp.type = prop.type; // Native Vue types
								break;

							default:
								console.warn(`Unknown primative mapping of prop type "${prop.type}" while declaring component "${name}" - assuming "String"`);
								newProp.type = String;
						}
					}
					// }}}

					return newProp;
				}),
			},
			methods: {
				mgSetup() {
					// Setup event listners {{{
					this.$on('mgIdentify', reply => reply(component));
					// }}}

					// Read in initial data value {{{
					var refresher = ()=> {
						if (this.$props.value) { // Standalone value
							this.data = _.clone(this.$props.value);
						} else if (this.$props.$dataPath) { // Has a data path
							this.data = _.get(this.$mgForm.formData, this.$props.$dataPath);
						} else if (this.$props.default) { // Has a default
							this.data = _.clone(this.$props.default);
						}
					};

					this.$on('mgRefresh', refresher);
					this.$on('mgRefreshForm', refresher);

					refresher();
					// }}}

					// Data watcher which transforms change operations into emitters to the nearest parent form {{{
					this.$watch('data', value => {
						// Emit `mgChange` to form element (if there is a parent form)
						if (this.$mgForm && this.$props.$dataPath) this.$mgForm.$emit('mgChange', {path: this.$props.$dataPath, value});

						// Emit regular `change` event
						this.$emit('change', value);
					});
					// }}}
				},

				...component.methods,
			},
			created() {
				this.mgSetup();
				if (component.created) return component.created.call(this); // Call components own created() method if there is one
			},
			..._.omit(component, [ // Import remaining Vue properties that are not explicitly merged in above
				'inject',
				'data',
				'props',
				'methods',
				'created',
			]),
		};

		return Vue.component(name, vueComponent);
	};

	return $macgyver;
})();

export default Vue.prototype.$macgyver;
</script>
