<script lang="js">
export default {
	install: function(app, options) {
		app.mgComponent('mgHeading', {
			meta: {
				title: 'Heading',
				icon: 'far fa-heading',
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
	<legend class="form-control-static">
		{{data || $props.text}}
	</legend>
</template>
