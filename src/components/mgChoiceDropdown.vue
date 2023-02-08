<script lang="js">
import Debug from '@doop/debug';
const $debug = Debug('mgChoiceDropdown').enable(true);

import VueSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

app.component('v-select', VueSelect);

export default app.mgComponent('mgChoiceDropdown', {
	meta: {
		title: 'Dropdown multiple-choice',
		icon: 'far fa-chevron-circle-down',
		category: 'Choice Selectors',
		preferId: true,
		shorthand: ['choice', 'choose', 'dropdown', 'pick'],
	},
	data() { return {
		selected: [],
		enumIter: [],
	}},
	props: {
		enumSource: {type: 'mgChoiceButtons', default: 'list', enum: ['list', 'url'], default: 'list', help: 'Where to populate the list data from'},
		enum: {
			type: 'mgTable',
			title: 'List items',
			showIf: 'enumSource == "list"',
			items: [
				{id: 'id', type: 'mgText', required: true},
				{id: 'title', type: 'mgText', required: true},
				{id: 'icon', type: 'mgIcon'},
			],
		},
		enumUrl: {type: 'mgUrl', vueType: ['string', 'object'], showIf: 'enumSource == "url"', help: 'Data feed URL to fetch choice values from'},
		// FIXME: These are relevant for passed in `enum` options also?
		optionsPath: {
			type: "mgText",
			default: "",
			help: "Path within data feed for options array",
			showIf: 'enumSource == "url"',
		},
		optionKeyPath: {
			type: "mgText",
			default: "id",
			help: "Path within data feed for options key",
			showIf: 'enumSource == "url"',
		},
		optionLabelPath: {
			type: "mgText",
			default: "title",
			help: "Path within data feed for options label",
			showIf: 'enumSource == "url"',
		},
		placeholder: {type: 'mgText', help: 'Ghost text to display when there is no value'},
		required: {type: 'mgToggle', default: false, help: 'One choice must be selected'},
		focus: {type: 'mgToggle', default: false, help: 'Auto-focus the element when it appears on screen'},
	},
	methods: {
		changeHandler(e) {
			if (!e) return this.data = this.selected = null;
			this.data = this.getOptionKey(e);
			this.selected = e;
		},

		/**
		* Populate the enumIter object
		* This function also correctly populates the selected item (or the default)
		* Each item is assumed to have the spec `{id: String, title: String, icon?: String}`
		* @param {array<Object>} enumIter The new iterable enum
		*/
		setEnum(enumIter) {
			this.enumIter = enumIter;

			if (this.data) {
				this.selected = _.get(this.enumIter, this.$props.optionsPath, this.enumIter)
					.find(
						(e) => this.getOptionKey(e) == this.data
					) || this.data;
			} else if (this.$props.default) {
				this.selected = _.get(this.enumIter, this.$props.optionsPath, this.enumIter)
					.find(
						(e) => this.getOptionKey(e) == this.$props.default
					) || this.$props.default;
			}
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
		this.$debug = $debug;

		this.$on('mgValidate', reply => {
			if (this.$props.required && !this.data) return reply(`${this.$props.title} is required`);
		});

		this.$watch('$props.enumUrl', ()=> {
			if (!this.$props.enumUrl) return;
			this.$macgyver.utils.fetch(this.$props.enumUrl, {
				type: 'raw',
			})
				.then(data => this.setEnum(data))
		}, {immediate: true});

		this.$watchAll(['$props.enum', '$data.data'], ()=> {
			// FIXME: Could check `.every` for strings
			if (_.isArray(this.$props.enum) && _.isString(this.$props.enum[0])) { // Array of strings
				this.setEnum(this.$props.enum.map(i => ({id: _.camelCase(i), title: i})));
			} else if (_.isArray(this.$props.enum) && _.isObject(this.$props.enum[0])) { // Collection
				this.setEnum(this.$props.enum);
			}
		}, {immediate: true});
	},
	mounted() {
		if (this.$props.focus) {
			// NOTE: Focus selection does NOT work if DevTools is open in Chome
			this.$refs.select.searchEl.focus();
		}
	},
});
</script>

<template>
	<div class="mg-choice-dropdown">
		<v-select
			ref="select"
			:value="selected"
			label="title"
			:options="_.get(this.enumIter, this.$props.optionsPath, this.enumIter)"
			:placeholder="$props.placeholder"
			:clearable="!$props.required"
			:get-option-key="getOptionKey"
			:get-option-label="getOptionLabel"
			@input="changeHandler"
		>
			<template #selected-option="option">
				<!-- TODO: getOptionIcon -->
				<i v-if="option.icon" :class="option.icon" />
				{{ getOptionLabel(option) }}
			</template>
			<template #option="option">
				<i v-if="option.icon" :class="option.icon" />
				{{ getOptionLabel(option) }}
			</template>
		</v-select>
	</div>
</template>

<style>
/* Make look consistant with Bootstrap */
.v-select.open .dropdown-toggle {
	border-color: #5cb3fd;
}

/* Remove weird dropdown icon that Bootstrap adds */
.v-select .dropdown-toggle::after {
	display: none;
}

/* Wider spacing for clear button */
.v-select .dropdown-toggle .vs__clear {
	margin-right: 10px;
}

/* Align dropdown icon correctly */
.v-select .open-indicator {
	margin-top: -2px;
}

.v-select .vs__selected i {
	margin-right: 5px;
}
</style>
