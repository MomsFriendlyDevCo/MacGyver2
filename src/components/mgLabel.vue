<script>
macgyver.register('mgLabel', {
	title: 'Read-only label',
	icon: 'far fa-font',
	category: 'General Decoration',
	preferId: false,
	config: {
		text: {type: 'mgText'},
		class: {type: 'mgText', default: 'form-control-static', advanced: true},
	},
});

export default Vue.component('mgLabel', {
	inject: ['$mgForm'],
	data() { return {
		data: undefined,
	}},
	props: {
		config: Object,
	},
	created() {
		this.$mgForm.inject(this);
	},
});
</script>

<template>
	<div
		:class="$props.config.class"
	>
		{{data || $props.config.text}}
	</div>
</template>
