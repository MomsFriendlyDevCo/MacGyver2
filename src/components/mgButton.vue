<script>
macgyver.register('mgButton', {
	title: 'Button',
	icon: 'far fa-mouse-pointer',
	category: 'Interaction',
	preferId: false,
	config: {
		text: {type: 'mgText'},
		icon: {type: 'mgIcon', default: 'far fa-check'},
		tooltip: {type: 'mgText'},
		action: {type: 'mgText'},
		class: {type: 'mgText', advanced: true, default: 'btn btn-light'},
	},
	format: true,
});

export default Vue.component('mgButton', {
	data: ()=> ({
		data: undefined,
	}),
	props: {
		config: Object,
		form: String,
	},
	created() {
		this.$macgyver.inject(this);
	},
});
</script>

<template>
	<a
		:class="$props.config.class"
		@click="$macgyver.forms.run(form, $props.config.action)"
		v-tooltip="$props.config.tooltip"
	>
		<i v-if="$props.config.icon" :class="$props.config.icon"/>
		{{$props.config.text}}
	</a>
</template>
