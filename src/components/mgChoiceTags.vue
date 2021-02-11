<script>
/**
* NOTE: Toggling deselection from the menu is not yet supported until
*       https://github.com/sagalbot/vue-select/pull/877
*       Has been merged
*       - MC 2020-01-10
*/

import VueSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

Vue.component('v-select', VueSelect);

export default app.mgComponent('mgChoiceTags', {
	meta: {
		title: 'Dropdown multiple-choice',
		icon: 'far fa-tags',
		category: 'Choice Selectors',
		preferId: true,
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
				//{id: 'icon', type: 'mgIcon'},
			],
		},
		enumUrl: {type: 'mgUrl', vueType: ['string', 'object'], showIf: 'enumSource == "url"', help: 'Data feed URL to fetch choice values from'},
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
		allowCreate: {type: 'mgToggle', default: false, help: 'Allow the user to create their own tags in addition to the supplied ones'},
		showDropdown: {type: 'mgToggle', default: true, help: 'When clicking, show a dropdown box. Disabling will only allow the user to use existing tags'},
		maxVisible: {type: 'mgNumber', default: 0, help: 'Maximum number of tags to display before showing helper text, set to zero to disable'},
	},
	created() {
		this.$on('mgValidate', reply => {
			if (this.$props.required && !this.data || !this.data.length) return reply(`${this.$props.title} is required`);
		});

		this.$watch('$props.enumUrl', ()=> {
			if (!this.$props.enumUrl) return;
			this.$macgyver.utils.fetch(this.$props.enumUrl, {type: 'array'})
				.then(data => this.setEnum(data))
		}, {immediate: true});

		this.$watch('$props.enum', ()=> {
			if (_.isArray(this.$props.enum) && _.isString(this.$props.enum[0])) { // Array of strings
				this.setEnum(this.$props.enum.map(i => ({id: _.camelCase(i), title: i})));
			} else if (_.isArray(this.$props.enum) && _.isObject(this.$props.enum[0])) { // Collection
				this.setEnum(this.$props.enum);
			}
		}, {immediate: true});
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
				this.selected =
					this.enumIter.find(
						(e) => this.getOptionKey(e) == this.data
					) || this.data;
			} else if (this.$props.default) {
				this.selected =
					this.enumIter.find(
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
});
</script>

<template>
	<v-select
		class="mg-choice-tags"
		:value="selected"
		label="title"
		:options="enumIter"
		:placeholder="$props.placeholder"
		:taggable="$props.allowCreate"
		:no-drop="!$props.showDropdown"
		:close-on-select="false"
		:multiple="true"
		:get-option-key="getOptionKey"
		:get-option-label="getOptionLabel"
		@input="changeHandler"
	>
		<template #option="option">
			<i
				class="far fa-fw"
				:class="selected.some(v => getOptionKey(v) == getOptionKey(option)) ? 'fa-check' : ''"
				:data-id="getOptionKey(option)"
			/>
			{{ getOptionLabel(option) }}
		</template>
		<template #selected-option-container="props">
			<span v-if="!$props.maxVisible || selected.length - 1 < $props.maxVisible" class="vs__selected">
				{{ getOptionLabel(props.option) }}
				<i @click="props.deselect(props.option)" class="far fa-times ml-1 clickable"/>
			</span>
			<!-- Render only the first selected element - skip the rest -->
			<span v-else-if="getOptionKey(props.option) == getOptionKey(selected[0])" class="vs__selected_overflow">
				{{selected.length}} items selected
			</span>
			<!-- Not sure why Vue needs an empty element but if its not here it falls back to the v-select render -->
			<span v-else/>
		</template>
	</v-select>
</template>

<style>
.mg-choice-tags.v-select .vs__selected > i {
	cursor: pointer;
}

.mg-choice-tags.v-select .vs__selected_overflow {
	margin: 2px 10px;
}
</style>
