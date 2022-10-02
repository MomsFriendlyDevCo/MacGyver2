<script lang="js">
export default app.mgComponent('mgButton', {
	meta: {
		title: 'Button',
		icon: 'far fa-mouse-pointer',
		category: 'Interaction',
		preferId: false,
	},
	props: {
		title: {type: 'mgText'},
		text: {type: 'mgText'},
		icon: {type: 'mgIcon', default: 'far fa-check'},
		tooltip: {type: 'mgText'},
		action: {type: 'mgText', vueType: 'any'},
		className: {type: 'mgText', advanced: true, default: 'btn btn-light'}, // TODO: Can we simply use "class" as a property?
	},
});
</script>

<template>
	<div class="mg-button" :class="$props.className">
		<a
			tabindex="0"
			v-tooltip="$props.tooltip"
			@keyup.enter="$mgForm.run($props.action)"
			@click="$mgForm.run($props.action)"
		>
			<i v-if="$props.icon" :class="$props.icon"/>
			{{$props.text}}
		</a>
	</div>
</template>
