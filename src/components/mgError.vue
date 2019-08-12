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
	computed: {
		// Mutate the incomming config back to what the original object probably was
		displayConfig() {
			if (!this.$props.config) return 'No config';
			return _(this.$props.config)
				.pickBy((v, k) => !k.startsWith('error'))
				.set('type', this.$props.config.errorWidgetType)
				.value();
		},
	},
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
	<div class="alert alert-danger">
		{{data || $props.config.errorText}}
		<pre>Config: {{displayConfig}}</pre>
		<pre>Data: {{data || 'No data'}}</pre>
	</div>
</template>
