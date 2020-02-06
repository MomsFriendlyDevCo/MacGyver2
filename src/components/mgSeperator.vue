<script>
macgyver.register('mgSeperator', {
	title: 'Seperator',
	icon: 'far fa-minus',
	category: 'General Decoration',
});

export default Vue.component('mgSeperator', {
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
	<hr class="mg-seperator"/>
</template>

<style>
.mg-seperator {
	margin-top: 0px;
	margin-bottom: 10px;
}
</style>
