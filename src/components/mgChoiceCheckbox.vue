<script lang="js">
export default app.mgComponent('mgChoiceCheckbox', {
	meta: {
		title: 'Checkbox multiple-choice',
		icon: 'far fa-list',
		category: 'Choice Selectors',
		preferId: true,
		// TODO: format function to output choices as CSV?
	},
	data() { return {
		enumIter: [],
	}},
	props: {
		id: {
			type: 'mgString',
		},
		enum: {
			type: 'mgList',
			title: 'List items',
			enum: {
				type: 'mgTable',
				title: 'List items',
				items: [
					{id: 'id', title: 'ID'},
					{id: 'title', title: 'Title'},
					{id: 'tooltip', title: 'Tooltip'},
				],
			},
		},
		required: {type: 'mgToggle', default: false, help: 'One choice must be selected'},
		sort: {
			type: 'mgChoiceRadio',
			default: 'addOrder',
			advanced: true,
			help: 'Sort newly ticked items into their correct position',
			enum: [
				{id: 'addOrder', title: 'No sorting'},
				{id: 'sortId', title: 'Sort by item ID'},
				{id: 'sortTitle', title: 'Sort by title'},
			],
		},
	},
	created() {
		this.$on('mgValidate', reply => {
			if (this.$props.required && !this.data) return reply(`${this.$props.title} is required`);
		});

		if (!_.isArray(this.data)) this.data = [];
	},
	methods: {
		change(id) {
			if (!this.data) this.data = [];

			if (this.data.some(i => i == id)) { // Checked
				this.data = this.data.filter(i => i != id);
			} else {
				this.data.push(id);

				if (this.$props.sort == 'sortId') {
					this.data.sort();
				} else if (this.$props.sort == 'sortTitle') {
					this.data = _.sortBy(this.data, i => this.enum.find(e => e.id == i));
				}
			}
		},
	},
	watch: {
		'$props.enum': {
			immediate: true,
			handler() {
				if (_.isArray(this.$props.enum) && _.isString(this.$props.enum[0])) { // Array of strings
					this.enumIter = this.$props.enum.map(i => ({id: _.camelCase(i), title: i}));
				} else if (_.isArray(this.$props.enum) && _.isObject(this.$props.enum[0])) { // Collection
					this.enumIter = this.$props.enum;
				}
			},
		},
	},
});
</script>

<template>
	<div>
		<div class="form-check" v-for="item in enumIter" :key="item.id">
			<input
				type="checkbox"
				@change="change(item.id)"
				:id="`mg-choice-checkbox-${$props.id}-${item.id}`"
				:checked="data.includes(item.id)"
			/>
			<label class="form-check-label" :for="`mg-choice-checkbox-${$props.id}-${item.id}`">
				{{item.title}}
			</label>
		</div>
	</div>
</template>
