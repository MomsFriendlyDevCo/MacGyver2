<script>
/**
* MacGyver component layout for grids
* This container displays a 2D layout table where each cell can contain a unique widget
*/
macgyver.register('mgGrid', {
	title: 'Grid layout',
	icon: 'far fa-grip-horizontal',
	category: 'Layout',
	preferId: false,
	config: {
		items: {type: 'mgUnknown', default: []},
	},
	format: true,
});

export default Vue.component('mgGrid', {
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
	<table class="table table-striped table-bordered">
		<tr v-for="row in $props.config.items">
			<td v-for="cell in row.items">
				<mg-component :form="$props.form" :config="cell"/>
			</td>
		</tr>
	</table>
</template>
