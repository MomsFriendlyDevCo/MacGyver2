<script>
/**
* The top level MacGyver form
* @param {string} [form] Unique form name
* @param {Object|Array} config The MacGyver form object either in long form nested array structure or short form object (which is converted)
* @param {boolean} [populateDefaults=true] Apply initial defaults to the data when the config is ready, if false you can call vm.assignDefaults() manually if needed
* @param {boolean} [actionsFallback=true] Use vm.$eval as a runner when no action listener is found
* @param {Object} [actions] Actions subscribers, a lookup list of action definition string keys and their firable function. Functions are called with the context as `(...params)`
* @param {Object} [data] The data binding
*
* @emits change Emitted as `(data)` whenever any data changes
* @emits changeItem Emitted as `({path, value})` when any single item changes
* @emits onAction Emitted as `({action, params})` when any action is fired
*/
export default Vue.component('mgForm', {
	data() { return {
		id: undefined, // Set on create
		editing: false, // Set by mgFormEditor when its this components parent
		errors: [], // array <Object> {error}
		spec: undefined, // Calculated version of config after its been though $macgyver.compileSpec()
		formData: undefined, // Calculated version of $props.data after default population
		inRefresh: false, // Whether we are doing a refresh from the top-down, prevents recursive refreshing
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
		this.id = this.id || this.$props.form || this.$macgyver.nextId();
		this.$macgyver.injectForm(this);

		this.$on('mgChange', (path, value) => {
			if (this.inRefresh) return;
			this.$macgyver.utils.setPath(this, `formData.${path}`, value);
			this.$emit('changeItem', {path, value});

			this.$emit('change', this.formData);
			this.refreshShowIfs();
		});

		this.$on('mgErrors', errors => this.errors = errors);
		this.$on('mgForm.rebuild', ()=> this.rebuild());
	},
	methods: {
		/**
		* Force the form to rebuild its config
		*/
		rebuild() {
			this.id = this.id || this.$props.form || this.$macgyver.nextId();
			console.log(`Rebuild form config for form "${this.id}"`);

			this.spec = this.$macgyver.compileSpec(this.$props.config);
			if (!this.spec || !this.spec.spec) throw new Error('Invalid Macgyver form spec');
		},


		/**
		* Force the form to rebuild its data set
		*/
		rebuildData() {
			if (this.inRefresh) return console.log('Skip refresh');
			this.inRefresh = true;

			this.formData = _.cloneDeep(this.$props.data);

			if (this.$props.populateDefaults) this.assignDefaults();
			this.refreshShowIfs();
			this.$emit('mgRefreshForm');
			this.$nextTick(()=> // Wait one tick for all attempts to recall this function recursively to exhaust
				this.inRefresh = false
			);
		},


		/**
		* Force recomputation of show via showIf values
		*/
		refreshShowIfs() {
			if (!this.spec) return;
			this.spec.showIfs.forEach(widget =>
				widget.show = this.$macgyver.utils.evalMatch(widget.showIf, this.formData)
			);
		},


		/**
		* Assign initial defaults if a value is not in the data object
		*/
		assignDefaults() {
			if (!this.spec) return;
			_.defaultsDeep(this.formData, this.getPrototype());
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
		'$props.config': {
			immediate: false, // This actually gets called after $prop injection anyway
			deep: true,
			handler() { // Config has been clobbered - rebuild the layout
				this.rebuild();
			},
		},
		'$props.data': {
			immediate: false, // This actually gets called after $prop injection anyway
			deep: true,
			handler() { // Config has been clobbered - rebuild the layout
				this.rebuildData();
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

		<mg-component
			v-if="spec"
			:form="id"
			:config="spec.spec"
		/>
	</form>
</template>
