<script>
macgyver.register('mgHeading', {
	title: 'Heading',
	icon: 'far fa-heading',
	category: 'General Decoration',
	preferId: false,
	config: {
		text: {type: 'mgText'},
	},
});

export default Vue.component('mgHeading', {
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
	<legend class="form-control-static">
		{{data || $props.config.text}}
	</legend>
</template>
