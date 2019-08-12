<script>
/**
* Instance of a MacGyver widget
* This is the parent of all other mg* components except mgContainer
*/
export default Vue.component('mgComponent', {
	data() { return {
		data: undefined,
	}},
	props: {
		config: Object,
		form: String,
	},
	render(h) {
		if (!this.$macgyver.widgets[this.$props.config.type]) return h('mg-error', {props: {form: this.form, config: {errorText: `Unknown type: ${this.$props.config.type}`}}});

		return h(this.$props.config.type, {
			nativeOn: {
				mousedown: e => this.$macgyver.$forms[this.$props.form].$emit('mgComponent.mouseDown', this, e),
				mouseup: e => this.$macgyver.$forms[this.$props.form].$emit('mgComponent.mouseUp', this, e),
				mousemove: e => this.$macgyver.$forms[this.$props.form].$emit('mgComponent.mouseMove', this, e),
				mouseout: e => this.$macgyver.$forms[this.$props.form].$emit('mgComponent.mouseOut', this, e),
			},
			props: {
				form: this.$props.form,
				config: this.$props.config,
				data: this.data,
			},
		});
	},
});
</script>
