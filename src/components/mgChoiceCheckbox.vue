<script>
macgyver.register('mgChoiceCheckbox', {
	title: 'Checkbox multiple-choice',
	icon: 'far fa-list',
	category: 'Choice Selectors',
	preferId: true,
	config: {
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
	format: true, // FIXME: Not sure about this, what if we need to lookup the value by the enum ID?
});

export default Vue.component('mgChoiceCheckbox', {
	inject: ['$mgForm'],
	data() { return {
		data: undefined,
		enumIter: [],
	}},
	props: {
		config: Object,
	},
	created() {
		this.$mgForm.inject(this);
		this.$on('mgValidate', reply => {
			if (this.$props.config.required && !this.data) return reply(`${this.$props.config.title} is required`);
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

				if (this.$props.config.sort == 'sortId') {
					this.data.sort();
				} else if (this.$props.config.sort == 'sortTitle') {
					this.data = _.sortBy(this.data, i => this.config.enum.find(e => e.id == i));
				}
			}
		},
	},
	watch: {
		'$props.config.enum': {
			immediate: true,
			handler() {
				if (_.isArray(this.$props.config.enum) && _.isString(this.$props.config.enum[0])) { // Array of strings
					this.enumIter = this.$props.config.enum.map(i => ({id: _.camelCase(i), title: i}));
				} else if (_.isArray(this.$props.config.enum) && _.isObject(this.$props.config.enum[0])) { // Collection
					this.enumIter = this.$props.config.enum;
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
				:id="`mg-choice-checkbox-${$props.config.id}-${item.id}`"
				:checked="data.includes(item.id)"
			/>
			<label class="form-check-label" :for="`mg-choice-checkbox-${$props.config.id}-${item.id}`">
				{{item.title}}
			</label>
		</div>
	</div>
</template>
