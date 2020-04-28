<script>
export default Vue.mgComponent('mgLabel', {
	meta: {
		title: 'Read-only label',
		icon: 'far fa-font',
		category: 'General Decoration',
	},
	props: {
		text: {type: 'mgText'},
		class: {type: 'mgText', default: 'form-control-static', advanced: true},
	},
});
</script>

<template>
	<div :class="$props.class">
		{{data || $props.text}}
	</div>
</template>
