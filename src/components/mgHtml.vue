<script>
macgyver.register('mgHtml', {
	title: 'Static HTML',
	icon: 'fab fa-html5',
	category: 'General Decoration',
	preferId: false,
	config: {
		text: {type: 'mgCodeEditor', syntax: 'html'},
	},
});

export default Vue.component('mgHtml', {
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
	<div>
		<div v-html="data || $props.config.text" class="form-control-static"></div>
	</div>
</template>
