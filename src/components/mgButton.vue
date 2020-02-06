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
	<a
		:class="$props.config.class"
		@click="$mgForm.run($props.config.action)"
		v-tooltip="$props.config.tooltip"
	>
		<i v-if="$props.config.icon" :class="$props.config.icon"/>
		{{$props.config.text}}
	</a>
</template>
