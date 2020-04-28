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

		console.log('DECLARE', name);

		var vueComponent = {
			inject: component.inject || ['$mgForm'], // Defer to component injects or default to injecting $mgForm
			data() { return {
				data: undefined,
				...(component.data ? component.data() : {}), // Import other data definitions from the object
			}},
			props: {
				$dataPath: {type: String},
				$specPath: {type: String},
				..._.mapValues(component.props || {}, prop => { // Rewrite MacGyver props into Vue compatible props
					var newProp = {
						...(prop.default ? {default: prop.default} : {}),
					};

					// FIXME: This needs putting into each mgComponent declaration for Vue validation
					// Convert prop type to Vue native instances {{{
					switch (prop.vueType || prop.type) {
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
						case 'mgTable':
							newProp.type = Array;
							break;
						case 'mgDate':
							newProp.type = Date;
							break;
						case Number:
						case String:
						case Array:
						case Date:
							console.warn('Used native binding in component prop (e.g. `{type: Array}`). Always use mg* component types so these components are editable in the mgFormEditor');
							newProp.type = prop.type; // Native Vue types
							break;

						// String to type bindings (usually via vueType)
						case 'array': newProp.type = Array; break;
						case 'boolean': newProp.type = Boolean; break;
						case 'date': newProp.type = Date; break;
						case 'number': newProp.type = Number; break;
						case 'string': newProp.type = String; break;
						default:
							console.warn(`Unknown vue type mapping "${prop.type}" assuming "String"`);
							newProp.type = String;
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
					if (this.$props.$dataPath) {
						var refresher = ()=> {
							this.data = _.get(this.$mgForm.formData, this.$props.$dataPath);
						};

						this.$on('mgRefresh', refresher);
						this.$on('mgRefreshForm', refresher);

						refresher();
					} else if (this.$props.default) { // No data path but there IS a default - link to that instead
						this.data = _.clone(this.$props.default);
					}
					// }}}

					// Inject data watcher which transforms change operations into emitters to the nearest parent form {{{
					this.$watch('data', value => {
						// Emit `mgChange` to form element
						this.$mgForm.$emit('mgChange', {path: this.$props.$dataPath, value});

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
			..._.pick(component, [ // Import remaining Vue properties
				// Lifecycle hooks:
				'activated',
				'beforeCreate',
				'beforeDestroy',
				'beforeMount',
				/* created - handled above */,
				'deactivated',
				'destroyed',
				'errorCaptured',
				'mounted',
				'updated',

				// Misc
				'provide',
			]),
		};

		return Vue.component(name, vueComponent);
	};

	return $macgyver;
})();

export default Vue.prototype.$macgyver;
</script>
