<script>
macgyver.register('mgSeperator', {
	title: 'Seperator',
	icon: 'far fa-minus',
	category: 'General Decoration',
});

export default Vue.component('mgSeperator', {
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
	<hr class="mg-seperator"/>
</template>

<style>
.mg-seperator {
	margin-top: 0px;
	margin-bottom: 10px;
}
</style>
