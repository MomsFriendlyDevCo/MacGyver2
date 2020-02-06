<script>
macgyver.register('mgError', {
	userPlacable: false,
	title: 'Error display',
	icon: 'far fa-exclamation-circle',
	category: 'General Decoration',
	preferId: false,
	config: {
		errorText: {type: 'mgText'},
	},
});

export default Vue.component('mgError', {
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
	computed: {
		// Mutate the incomming config back to what the original object probably was
		displayConfig() {
			if (!this.$props.config) return 'No config';
			return this.$props.config
				|> v => _.pickBy(v, (v, k) => !k.startsWith('error'))
				|> v => _.set(v, 'type', this.$props.config.errorWidgetType)
		},
	},
});
</script>

<template>
	<div class="alert alert-danger">
		{{data || $props.config.errorText}}
		<pre>Config: {{displayConfig}}</pre>
		<pre>Data: {{data || 'No data'}}</pre>
	</div>
</template>
