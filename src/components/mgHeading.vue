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
});
</script>

<template>
	<legend class="form-control-static">
		{{data || $props.config.text}}
	</legend>
</template>
