<script>
macgyver.register('mgCheckBox', {
	title: 'Check Box',
	icon: 'far fa-check-square',
	category: 'Simple Inputs',
	preferId: true,
	config: {},
	format: v => v ? 'Yes' : 'No',
	formatAlign: 'center',
});

export default Vue.component('mgCheckBox', {
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
	<div class="text-center">
		<input v-model="data" type="checkbox"/>
	</div>
</template>
