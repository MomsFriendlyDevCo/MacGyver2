<script>
import MacGyver from 'macgyver.js';
import Vue from 'vue';

/**
* Main MacGyver "service" (acutally just a Vue prototype extension)
* This service requires {$http, $toast} to be available on the prototype
* @var {Object}
*/
Vue.prototype.$macgyver = (()=> {
	// Absorb various methods from a Vue prototype
	var vInstance = new Vue();
	['$on', '$off', '$once', '$emit'].forEach(method => MacGyver[method] = vInstance[method].bind(vInstance));

	return MacGyver;
})();

export default Vue.prototype.$macgyver;
</script>
