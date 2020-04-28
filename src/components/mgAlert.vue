<script>
export default Vue.mgComponent('mgAlert', {
	meta: {
		title: 'Alert Box',
		icon: 'far fa-exclamation-triangle',
		category: 'General Decoration',
		preferId: false,
	},
	inject: ['$mgForm'],
	props: {
		text: {type: 'mgText', default: 'This is an alert!'},
		style: {
			type: 'mgChoiceButtons',
			default: 'alert-info',
			iconSelected: 'fa fa-fw fa-check',
			iconDefault: 'fa fa-fw',
			enum: [
				{id: 'alert-success', class: 'btn-success'},
				{id: 'alert-info', class: 'btn-info'},
				{id: 'alert-warning', class: 'btn-warning'},
				{id: 'alert-danger', class: 'btn-danger'},
			],
		},
	},
});
</script>

<template>
	<div class="alert" :class="$props.style">
		{{$props.text || data}}
	</div>
</template>
