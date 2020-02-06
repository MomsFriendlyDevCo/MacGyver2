<script>
/**
* Instance of a MacGyver widget
* This is the parent of all other mg* components except mgContainer
*/
export default Vue.component('mgComponent', {
	inject: ['$mgForm'],
	data() { return {
		data: undefined,
	}},
	props: {
		config: Object,
	},
	render(h) {
		if (!this.$macgyver.widgets[this.$props.config.type]) return h('mg-error', {props: {config: {errorText: `Unknown type: ${this.$props.config.type}`}}});

		return h(this.$props.config.type, {
			nativeOn: {
				mousedown: e => this.$mgForm.$emit('mgComponent.mouseDown', this, e),
				mouseup: e => this.$mgForm.$emit('mgComponent.mouseUp', this, e),
				mousemove: e => this.$mgForm.$emit('mgComponent.mouseMove', this, e),
				mouseout: e => this.$mgForm.$emit('mgComponent.mouseOut', this, e),
			},
			props: {
				config: this.$props.config,
				data: this.data,
			},
		});
	},
});
</script>
