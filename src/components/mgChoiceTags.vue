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

macgyver.register('mgChoiceTags', {
	title: 'Dropdown multiple-choice',
	icon: 'far fa-tags',
	category: 'Choice Selectors',
	preferId: true,
	config: {
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
		maxVisible: {type: 'number', default: 0, help: 'Maximum number of tags to display before showing helper text, set to zero to disable'},
	},
	format: true, // FIXME: Not sure about this, what if we need to lookup the value by the enum ID?
});

export default Vue.component('mgChoiceTags', {
	inject: ['$mgForm'],
	data() { return {
		data: undefined,
		value: [],
		enumIter: [],
	}},
	props: {
		config: Object,
	},
	created() {
		this.$mgForm.inject(this);
		this.$on('mgValidate', reply => {
			if (this.$props.config.required && !this.data || !this.data.length) return reply(`${this.$props.config.title} is required`);
		});

		this.$watch('$props.config.enum', ()=> {
			if (_.isArray(this.$props.config.enum) && _.isString(this.$props.config.enum[0])) { // Array of strings
				this.enumIter = this.$props.config.enum.map(i => ({id: _.camelCase(i), title: i}));
			} else if (_.isArray(this.$props.config.enum) && _.isObject(this.$props.config.enum[0])) { // Collection
				this.enumIter = this.$props.config.enum;
			}

			if (this.data) {
				this.value = this.enumIter.filter(e => e.id == this.data) || this.data;
			} else if (this.$props.config.default) {
				this.value = this.enumIter.filter(e => e.id == this.$props.config.default) || this.$props.config.default;
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
		:placeholder="$props.config.placeholder"
		:taggable="$props.config.allowCreate"
		:no-drop="!$props.config.showDropdown"
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
			<span v-if="!$props.config.maxVisible || value.length - 1 < $props.config.maxVisible" class="vs__selected">
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
