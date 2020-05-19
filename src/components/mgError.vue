<script>
export default Vue.mgComponent('mgError', {
	meta: {
		title: 'Error display',
		icon: 'far fa-exclamation-circle',
		category: 'General Decoration',
	},
	props: {
		text: {type: 'mgText'},
	},
});
</script>

<template>
	<div class="alert alert-danger">
		{{data || $props.text}}
	</div>
</template>
