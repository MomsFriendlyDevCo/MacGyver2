<script>
export default Vue.mgComponent('mgError', {
	meta: {
		title: 'Error display',
		icon: 'far fa-exclamation-circle',
		category: 'General Decoration',
	},
	props: {
		errorText: {type: 'mgText'},
	},
	computed: {
		// Mutate the incomming config back to what the original object probably was
		displayConfig() {
			if (!this.$props) return 'No config';
			return this.$props
				|> v => _.pickBy(v, (v, k) => !k.startsWith('error'))
				|> v => _.set(v, 'type', this.$props.errorWidgetType)
		},
	},
});
</script>

<template>
	<div class="alert alert-danger">
		{{data || $props.errorText}}
		<pre>Config: {{displayConfig}}</pre>
		<pre>Data: {{data || 'No data'}}</pre>
	</div>
</template>
