<script>
export default Vue.component('mgForm', {
	data() { return {
		id: undefined, // Set on create
		editing: false, // Set by mgFormEditor when its this components parent
		errors: [], // array <Object> {error}
		layout: undefined, // Calculated version of config after its been though $macgyver.neatenSpec()
	}},
	props: {
		form: String,
		config: [Object, Array], // Can be a single object, array of objects or shorthand style
		data: Object,

		actionsFallback: {
			type: Boolean,
			default: true,
		},
		onAction: Function,
		actions: { // Object of functions e.g. `{customFunc: ()=> {}}`
			type: Object,
			validator: v => _.every(v => _.isFunction(v)),
		},
	},
	created() {
		this.id = this.$props.form || this.$macgyver.nextId();

		this.$macgyver.injectForm(this);

		this.$on('mgChange', (path, value) => {
			this.$setPath(`$props.data.${path}`, value);
			// this.$forceUpdate(); // FIXME: This is sometimes needed - not sure why, maybe in models? MC - 2018-12-12 
		});

		this.$on('mgErrors', errors => this.errors = errors);
		this.$on('mgForm.rebuild', ()=> this.rebuild());
	},
	methods: {
		/**
		* Force the form to rebuild its config
		*/
		rebuild() {
			console.log('Rebuild config');
			this.$set(this, 'layout', this.$macgyver.neatenSpec(this.$props.config));
		},
	},
	watch: {
		config: {
			immediate: true,
			handler() { // Config has been clobbered - rebuild the layout
				this.rebuild();
			},
		},
		data() { // Data object has been clobbered - tell all children to refetch their data
			this.$macgyver.forms.emitDown(this.id, 'mgRefresh');
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

		<mg-component :form="id" :config="layout"/>
	</form>
</template>
