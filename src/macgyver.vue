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

	// Absorb various methods from a Vue prototype
	var vInstance = new Vue();
	['$on', '$off', '$once', '$emit'].forEach(method => $macgyver[method] = vInstance[method].bind(vInstance));

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
		} else if (component.$props.config.default) { // No data path but there IS a default - link to that instead
			component.data = _.clone(component.$props.config.default);
		}

		// Inject data watcher which transforms change operations into emitters to the nearest parent form {{{
		component.$watch('data', val => {
			// Emit `mgChange` to form element
			$macgyver.$forms[component.$props.form].$emit('mgChange', component.$props.config.$dataPath, val);

			// If the component also has a .onChange binding fire that
			if (component.$props.config.onChange) component.$props.config.onChange.call(component, val);
		});
		// }}}
	};


	/**
	* Registeres a MacGyver form by its generated ID
	* @params {VueInstance} component The Vue component to register
	*/
	$macgyver.injectForm = component => {
		$macgyver.$forms[component.id] = component;
		component.$on('mgIdentify', reply => reply(component));
	};


	return $macgyver;
})();

export default Vue.prototype.$macgyver;
</script>
