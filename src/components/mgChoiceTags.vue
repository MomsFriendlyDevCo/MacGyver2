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

export default Vue.mgComponent('mgChoiceTags', {
	meta: {
		title: 'Dropdown multiple-choice',
		icon: 'far fa-tags',
		category: 'Choice Selectors',
		preferId: true,
	},
	data() { return {
		value: [],
		enumIter: [],
	}},
	props: {
		enum: {
			type: 'mgTable',
			title: 'List items',
			items: [
				{id: 'id', title: 'ID'},
				{id: 'title', title: 'Title'},
			],
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

		this.$watch('$props.enum', ()=> {
			if (_.isArray(this.$props.enum) && _.isString(this.$props.enum[0])) { // Array of strings
				this.enumIter = this.$props.enum.map(i => ({id: _.camelCase(i), title: i}));
			} else if (_.isArray(this.$props.enum) && _.isObject(this.$props.enum[0])) { // Collection
				this.enumIter = this.$props.enum;
			}

			if (this.data) {
				this.value = this.enumIter.filter(e => e.id == this.data) || this.data;
			} else if (this.$props.default) {
				this.value = this.enumIter.filter(e => e.id == this.$props.default) || this.$props.default;
			}
		}, {immediate: true});
	},
	methods: {
		change(val) {
			this.data = val.map(i => i.id);
			this.value = val;
		},
	},
});
</script>

<template>
	<v-select
		class="mg-choice-tags"
		:value="value"
		label="title"
		:options="enumIter"
		:placeholder="$props.placeholder"
		:taggable="$props.allowCreate"
		:no-drop="!$props.showDropdown"
		:close-on-select="false"
		:multiple="true"
		@input="change"
	>
		<template #option="option">
			<i
				class="far fa-fw"
				:class="value.some(v => v.id == option.id) ? 'fa-check' : ''"
				:data-id="option.id"
			/>
			{{option.title}}
		</template>
		<template #selected-option-container="props">
			<span v-if="!$props.maxVisible || value.length - 1 < $props.maxVisible" class="vs__selected">
				{{props.option.title}}
				<i @click="props.deselect(props.option)" class="far fa-times ml-1 clickable"/>
			</span>
			<!-- Render only the first selected element - skip the rest -->
			<span v-else-if="props.option.id == value[0].id" class="vs__selected_overflow">
				{{value.length}} items selected
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
