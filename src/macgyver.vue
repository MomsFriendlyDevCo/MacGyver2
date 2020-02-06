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

	return $macgyver;
})();

export default Vue.prototype.$macgyver;
</script>
