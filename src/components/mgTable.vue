<script>
macgyver.register('mgTable', {
	title: 'Table layout',
	icon: 'far fa-table',
	category: 'Layout',
	isContainer: true,
	isContainerArray: true,
	preferId: false,
	config: {
		url: {type: 'mgUrl', relative: true, help: 'Data feed to populate the table'},
		allowAdd: {type: 'mgToggle', title: 'Allow Row Addition', default: true},
		allowDelete: {type: 'mgToggle', title: 'Allow Row Deletion', default: true},
		textEmpty: {type: 'mgText', title: 'No data message', default: 'No data'},
		items: {
			type: 'mgTableEditor',
			title: 'Column setup',
			default: [
				{id: 'col1', type: 'mgText'},
				{id: 'col2', title: 'mgText'},
				{id: 'col3', title: 'mgText'},
			],
		},
		addButtonActiveClass: {type: 'mgText', default: 'btn btn-block btn-success fa fa-plus', advanced: true},
		addButtonInactiveClass: {type: 'mgText', default: 'btn btn-block btn-disabled fa fa-plus', advanced: true},
		rowNumbers: {type: 'mgToggle', help: 'Show the row number at the beginning of each row', default: true},
	},
	configChildren: {
		showTitle: {type: 'mgToggle', default: false, title: 'Show Title'},
	},
});

export default Vue.component('mgTable', {
	data: ()=> ({
		data: [],
		newRow: [],
		isAdding: false,
	}),
	props: {
		config: Object,
		form: String,
	},
	created() {
		this.$macgyver.inject(this);
	},
	mounted() {
		this.$watch('$props.config.url', ()=> {
			if (!this.$props.config.url) return;
			this.$macgyver.fetch(this.$props.config.url, {type: 'array'})
				.then(data => this.$set(this.$props.config, 'data', data))
		}, {immediate: true});
	},
	watch: {
		data: {
			immediate: true,
			handler() {
				// Ensure that data is always an array
				if (!_.isArray(this.data)) this.data = [];
			},
		},
	},
	methods: {
		createRow(offset) { // Offset is the row to create after - i.e. array position splice
			console.log(`FIXME: createRow(${offset})`);
		},
		deleteRow(offset) {
			console.log(`FIXME: deleteRow(${offset})`);
		},
	},
});
</script>

<template>
	<table class="table table-bordered table-striped table-hover">
		<thead>
			<tr>
				<th v-if="$props.config.rowNumbers" class="row-number">#</th>
				<th v-for="col in $props.config.items" :key="col.id" :style="(col.width ? 'width: ' + col.width + '; ' : '') + col.class">
					{{col.title}}
				</th>
				<th class="btn-context"></th>
			</tr>
		</thead>
		<tbody>
			<tr v-if="!data || !data.length">
				<td :colspan="$props.config.items.length + ($props.config.rowNumbers ? 2 : 1)">
					<div class="alert alert-warning m-10">{{$props.config.textEmpty || 'No data'}}</div>
				</td>
			</tr>
			<tr v-for="(row, rowNumber) in data">
				<td v-if="$props.config.rowNumbers" class="row-number">
					{{rowNumber + 1 | number}}
				</td>
				<td v-for="col in $props.config.items" :key="col.id" :class="col.class">
					<mg-component :form="$props.form" :config="col"/>
				</td>
				<td class="btn-context">
					<div class="btn-group">
						<a class="btn btn-context" data-toggle="dropdown"><i class="far fa-ellipsis-v"></i></a>
						<ul class="dropdown-menu pull-right">
							<li><a @click="createRow(rowNumber)"><i class="far fa-arrow-circle-up"></i> Add row above</a></li>
							<li><a @click="createRow(rowNumber)"><i class="far fa-arrow-circle-down"></i> Add row below</a></li>
							<li v-if="$props.config.allowDelete" class="dropdown-divider"></li>
							<li v-if="$props.config.allowDelete" class="dropdown-item-danger"><a @click="deleteRow(rowNumber)"><i class="far fa-trash"></i> Delete</a></li>
						</ul>
					</div>
				</td>
			</tr>
			<tr class="mgTable-append" v-if="$props.config.allowAdd">
				<td v-if="$props.config.rowNumbers" class="row-number">
					<i class="far fa-asterisk"></i>
				</td>
				<td v-for="(col, colNumber) in $props.config.items" :key="col.id">
					<mg-component :form="$props.form" :config="col" :data="newRow[colNumber]"/>
				</td>
				<td>
					<a @click="createRow()" :class="isAdding ? $props.config.addButtonActiveClass : $props.config.addButtonInactiveClass"></a>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<style>
.mg-table .row-number {
	font-size: 16px;
	text-align: middle;
}

.mg-table td.row-number {
	margin-top: 14px;
}
</style>