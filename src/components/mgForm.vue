<script>
/**
* The top level MacGyver form
* @param {string} [form] Unique form name
* @param {Object|Array} config The MacGyver form object either in long form nested array structure or short form object (which is converted)
* @param {boolean} [populateDefaults=true] Apply initial defaults to the data when the config is ready, if false you can call vm.assignDefaults() manually if needed
* @param {boolean} [actionsFallback=true] Use vm.$eval as a runner when no action listener is found
* @param {Object} [actions] Actions subscribers
* @param {Object} [data] The data binding
*
* @emits change Emitted as `(data)` whenever any data changes
* @emits changeItem Emitted as `({path, value})` when any single item changes
*/
export default Vue.component('mgForm', {
	data() { return {
		id: undefined, // Set on create
		editing: false, // Set by mgFormEditor when its this components parent
		errors: [], // array <Object> {error}
		spec: undefined, // Calculated version of config after its been though $macgyver.compileSpec()
	}},
	props: {
		form: String,
		config: [Object, Array], // Can be a single object, array of objects or shorthand style
		data: Object,

		populateDefaults: {type: Boolean, default: true},
		onAction: Function,
		actionsFallback: {type: Boolean, default: true},
		actions: { // Object of functions e.g. `{customFunc: ()=> {}}`
			type: Object,
			validator: v => _.every(v => _.isFunction(v)),
		},
	},
	created() {
		this.id = this.$props.form || this.$macgyver.nextId();

		this.$macgyver.injectForm(this);

		this.$on('mgChange', (path, value) => {
			this.$macgyver.utils.setPath(this, `$props.data.${path}`, value);
			this.$emit('changeItem', {path, value});

			// FIXME: Its annoying we have to use cloneDeep here but if the data object remains as a Vue object deep nodes don't get change detection upstream
			this.$emit('change', _.cloneDeep(this.$props.data));
		});

		this.$on('mgErrors', errors => this.errors = errors);
		this.$on('mgForm.rebuild', ()=> this.rebuild());
	},
	methods: {
		/**
		* Force the form to rebuild its config
		*/
		rebuild() {
			console.log(`Rebuild form config for form "${this.id}"`);

			this.spec = this.$macgyver.compileSpec(this.$props.config);

			if (this.$props.populateDefaults) this.assignDefaults();
		},


		/**
		* Force recomputation of show via showIf values
		*/
		refreshShowIf() {
		},


		/**
		* Assign initial defaults if a value is not in the data object
		*/
		assignDefaults() {
			_.merge(this.data, this.getPrototype());
		},


		/**
		* Compute the data prototype of the form
		* This is an empty object with all the defaults populated
		* @returns {Object} A prototype data object with all defaults populated
		* @see $macgyver.forms.getPrototype()
		*/
		getPrototype() {
			if (!this.id) return {}; // Form not yet ready
			return this.$macgyver.forms.getPrototype(this.id);
		},
	},
	watch: {
		config: {
			immediate: true,
			handler() { // Config has been clobbered - rebuild the layout
				this.rebuild();
			},
		},
	},
});
</script>

<template>
	<form @submit.prevent="submit()" class="form-horizontal mg-form">
		<div v-if="errors.length" class="alert alert-warning">
			<ul>
				<li v-for="err in errors">{{err.error}}</li>
			</ul>
		</div>

		<mg-component :form="id" :config="spec.spec"/>
	</form>
</template>
