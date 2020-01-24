<script>
import ToggleButton from 'vue-js-toggle-button';
Vue.use(ToggleButton);

macgyver.register('mgToggle', {
	requires: 'node_modules/vue-js-toggle-button/dist/index.js',
	title: 'Toggle Switch',
	icon: 'far fa-toggle-on',
	category: 'Simple Inputs',
	preferId: true,
	config: {
		onText: {type: 'mgText', default: 'on'},
		onColor: {type: 'mgColor', default: '#75c791', advanced: true},
		offText: {type: 'mgText', default: 'off'},
		offColor: {type: 'mgColor', default: '#bfcbd9', advanced: true},
		switchColor: {type: 'mgColor', default: '#fff', advanced: true},
		disabledColor: {type: 'mgColor', default: '#cccccc', advanced: true},
	},
	format: (v, config) => v ? config.onText : config.offText,
	formatAlign: 'center',
	shorthand: ['boolean', 'switch', 'toggle'],
});

export default Vue.component('mgToggle', {
	data: ()=> ({
		data: undefined,
	}),
	props: {
		config: Object,
		form: String,
	},
	created() {
		this.$macgyver.inject(this);
	},
	methods: {
		change(e) {
			this.$macgyver.forms.emit(this.form, 'mgChange', this.config.id, e.value);
		},
	},
});
</script>

<template>
	<toggle-button
		:value="data"
		:color="{checked: $props.config.onColor, unchecked: $props.config.offColor, disabled: $props.config.disabledColor}"
		:labels="{checked: $props.config.onText, unchecked: $props.config.offText}"
		:switchColor="$props.config.switchColor"
		@change="change"
	/>
</template>
