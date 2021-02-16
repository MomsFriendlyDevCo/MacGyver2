<script lang="js">
export default {
	install: function(app, options) {
		app.mgComponent('mgError', {
			meta: {
				title: 'Error display',
				icon: 'far fa-exclamation-circle',
				category: 'General Decoration',
			},
			props: {
				text: {type: 'mgText'},
			},
		});
	}
};
</script>

<template>
	<div class="alert alert-danger">
		{{data || $props.text}}
	</div>
</template>
