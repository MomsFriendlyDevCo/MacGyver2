<script lang="js">
export default {
	install: function(app, options) {
		app.mgComponent('mgCheckBox', {
			meta: {
				title: 'Check Box',
				icon: 'far fa-check-square',
				category: 'Simple Inputs',
				preferId: true,
				format: v => v ? 'Yes' : 'No',
				formatClass: 'text-center',
			},
		});
	}
};
</script>

<template>
	<div class="text-center">
		<input v-model="data" type="checkbox"/>
	</div>
</template>
