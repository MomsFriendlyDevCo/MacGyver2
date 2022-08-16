<script lang="js">
//import Debug from '@doop/debug';
//const $debug = Debug('mgChoiceButtons').enable(false);

import _ from 'lodash';

export default app.mgComponent('mgChoiceButtons', {
	meta: {
		title: 'Choice Buttons',
		icon: 'fas fa-ellipsis-h',
		category: 'Choice Selectors',
		preferId: true,
	},
	data() { return {
		enumIter: [],
	}},
	props: {
		title: {type: 'mgText'},
		enum: {
			type: 'mgTable',
			title: 'List items',
			items: [
				{id: 'id', title: 'ID'},
				{id: 'title', title: 'Title'},
				{id: 'tooltip', title: 'Tooltip'},
				{id: 'icon', title: 'Icon', type: 'mgIcon'},
				{id: 'class', title: 'Classes'},
				{id: 'classActive', title: 'Active Class'},
				{id: 'classInactive', title: 'Inactive Class'},
				// Implied: {id: 'action', title: 'Action on select', type: 'function'},
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
		classWrapper: {type: 'mgText', default: 'btn-group', title: 'Group CSS class', advanced: true},
		itemClassActive: {type: 'mgText', default: 'btn btn-primary', advanced: true},
		itemClassInactive: {type: 'mgText', default: 'btn btn-light', advanced: true},
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
		// FIXME: Should respond to space key. Anchor needs to have 'role="button"' or 'class="btn"'?
		select(option) {
			if (!option) return this.data = null;

			this.data = this.getOptionKey(option);
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
	<div class="mg-choice-buttons" :class="$props.classWrapper">
		<a
			v-for="option in options"
			:key="option.id"
			:class="getOptionKey(option) && data == getOptionKey(option)
				? option.classActive || option.class || $props.itemClassActive
				: option.classInactive || option.class || $props.itemClassInactive
			"
			tabindex="0"
			v-tooltip="option.tooltip"
			@click="select(option)"
		>
			<i v-if="option.icon" :class="option.icon"/>
			{{ getOptionLabel(option) }}
		</a>
	</div>
</template>

<style>
.fa-invisible:before {
	content: "\f111";
	visibility: hidden;
}
</style>
