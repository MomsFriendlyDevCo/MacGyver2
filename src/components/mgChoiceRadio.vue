<script lang="js">
//import Debug from '@doop/debug';
//const $debug = Debug('mgChoiceRadio').enable(false);

import _ from 'lodash';

export default app.mgComponent('mgChoiceRadio', {
	meta: {
		title: 'Radio multiple-choice',
		icon: 'far fa-list-ul',
		category: 'Choice Selectors',
		preferId: true,
	},
	data() { return {
		enumIter: [],
	}},
	props: {
		id: {type: 'mgText'},
		enum: {
			type: 'mgTable',
			title: 'List items',
			items: [
				{id: 'id', title: 'ID'},
				{id: 'title', title: 'Title'},
			],
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
	},
	computed: {
		options() {
			return _.get(this.enumIter, this.$props.optionsPath, this.enumIter);
		},
	},
	created() {
		this.$on('mgValidate', reply => {
			if (this.$props.required && !this.data) return reply(`${this.$props.title} is required`);
		});
	},
	methods: {
		/*
		// TODO: Selection like others?
		select(option) {
			if (!option) return this.data = this.selected = null;

			this.data = this.getOptionKey(option);
			this.selected = option;
			if (option.action) this.$mgForm.run(option.action);
		},
		*/

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
				v-model="data"
				type="radio"
				:name="$props.id"
				:value="getOptionKey(option)"
				:id="`check-${$props.id}-${getOptionKey(option)}`"
			/>
			<label class="form-check-label" :for="`check-${$props.id}-${getOptionKey(option)}`">
				{{ getOptionLabel(option) }}
			</label>
		</div>
	</div>
</template>
