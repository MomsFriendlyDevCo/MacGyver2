<script>
macgyver.register({
	id: 'mgAlert',
	title: 'Alert Box',
	icon: 'far fa-exclamation-triangle',
	category: 'General Decoration',
	preferId: false,
	config: {
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

export default Vue.component('mgAlert', {
	inject: ['$mgForm'],
	data() { return {
		data: undefined,
	}},
	props: {
		config: Object,
	},
	created() {
		this.$mgForm.inject(this);
	},
});
</script>

<template>
	<div class="alert" :class="$props.config.style">
		{{$props.config.text || data}}
	</div>
</template>
