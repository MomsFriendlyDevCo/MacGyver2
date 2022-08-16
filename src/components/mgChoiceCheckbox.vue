<script lang="js">
//import Debug from '@doop/debug';
//const $debug = Debug('mgChoiceCheckbox').enable(false);

import _ from 'lodash';

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
		title: {type: 'mgText'},
		id: {type: 'mgText'},
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
		// TODO: Support for "enumSource"/"enumUrl"
		optionsPath: {
			type: "mgText",
			default: "",
			help: "Path within data feed for options array",
		},
		optionKeyPath: {
			type: "mgText",
			default: "id",
			help: "Path within data feed for options key",
		},
		optionLabelPath: {
			type: "mgText",
			default: "title",
			help: "Path within data feed for options label",
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
	computed: {
		options() {
			return _.get(this.enumIter, this.$props.optionsPath, this.enumIter);
		},
	},
	methods: {
		select(option) {
			if (!option) return this.data = null;

			if (!this.data) this.data = [];

			if (this.data.some(i => i == option)) { // Checked
				this.data = this.data.filter(i => i != this.getOptionKey(option));
			} else {
				this.data.push(this.getOptionKey(option));

				if (this.$props.sort == 'sortId') {
					this.data.sort();
				} else if (this.$props.sort == 'sortTitle') {
					this.data = _.sortBy(this.data, d => this.enum.find(item => this.getOptionKey(item) == d));
				}
			}
			if (option.action) this.$mgForm.run(option.action);
		},
		/**
		* Retrieve option label based on path specified in properties.
		* @param {Object} option The selected option within enum
		*/
		getOptionLabel(option) {
			return _.get(option, this.$props.optionLabelPath, '');
		},

		/**
		* Retrieve option key based on path specified in properties.
		* @param {Object} option The selected option within enum
		*/
		getOptionKey(option) {
			return _.get(option, this.$props.optionKeyPath, '');
		},
	},
	created() {
		this.$on('mgValidate', reply => {
			if (this.$props.required && !this.data) return reply(`${this.$props.title} is required`);
		});

		if (!_.isArray(this.data)) this.data = [];
	},
	watch: {
		'$props.enum': {
			immediate: true,
			handler() {
				// FIXME: Could check `.every` for strings
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
		<div class="form-check" v-for="option in options" :key="getOptionKey(option)">
			<input
				type="checkbox"
				:id="`mg-choice-checkbox-${$props.id}-${getOptionKey(option)}`"
				:checked="data.includes(getOptionKey(option))"
				@change="select(option)"
			/>
			<label class="form-check-label" :for="`mg-choice-checkbox-${$props.id}-${getOptionKey(option)}`">
				{{ getOptionLabel(option) }}
			</label>
		</div>
	</div>
</template>
