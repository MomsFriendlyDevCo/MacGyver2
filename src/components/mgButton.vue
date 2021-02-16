<script lang="js">
export default {
	install: function(app, options) {
		app.mgComponent('mgButton', {
			meta: {
				title: 'Button',
				icon: 'far fa-mouse-pointer',
				category: 'Interaction',
				preferId: false,
			},
			props: {
				text: {type: 'mgText'},
				icon: {type: 'mgIcon', default: 'far fa-check'},
				tooltip: {type: 'mgText'},
				action: {type: 'mgText', vueType: 'any'},
				className: {type: 'mgText', advanced: true, default: 'btn btn-light'},
			},
		});
	}
};
</script>

<template>
	<a
		:class="$props.className"
		@click="$mgForm.run($props.action)"
		v-tooltip="$props.tooltip"
	>
		<i v-if="$props.icon" :class="$props.icon"/>
		{{$props.text}}
	</a>
</template>
