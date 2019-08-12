<script>
/**
* Provides the vm.$setPath(path, value) function to quickly set a data path on a Vue component by its path
* This function is designed to work as simillaly as possible to _.set()
* @param {string|array} path Either a path in dotted or array notation
*/

Vue.prototype.$setPath = function(path, value) {
	var chunks = typeof path == 'string' ? path.split('.') : path;

	if (chunks.length == 1) // Only one item - assume root node setter
		throw new Error('Setting root nodes via vm.$setPath is not recommended - declare the node in data:{} first');

	return this.$set(_.get(this, chunks.slice(0, -1)), chunks.slice(-1)[0], value);
};

export default Vue.prototype.$setPath;
</script>
