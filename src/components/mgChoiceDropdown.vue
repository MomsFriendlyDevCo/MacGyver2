<script>
import VueSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

Vue.component('v-select', VueSelect);

macgyver.register('mgChoiceDropdown', {
	title: 'Dropdown multiple-choice',
	icon: 'far fa-chevron-circle-down',
	category: 'Choice Selectors',
	preferId: true,
	config: {
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
		enumUrl: {type: 'mgUrl', showIf: 'enumSource == "url"', help: 'Data feed URL to fetch choice values from'},
		placeholder: {type: 'mgText', help: 'Ghost text to display when there is no value'},
		required: {type: 'mgToggle', default: false, help: 'One choice must be selected'},
		focus: {type: 'mgToggle', default: false, help: 'Auto-focus the element when it appears on screen'},
	},
	format: true, // FIXME: Not sure about this, what if we need to lookup the value by the enum ID?
	shorthand: ['choice', 'choose', 'dropdown', 'pick'],
});

export default Vue.component('mgChoiceDropdown', {
	data: ()=> ({
		data: undefined,
		value: [],
		enumIter: [],
	}),
	props: {
		config: Object,
		form: String,
	},
	methods: {
		change(val) {
			this.data = val.id;
			this.value = val;
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
				this.value = this.enumIter.find(e => e.id == this.data) || this.data;
			} else if (this.$props.config.default) {
				this.value = this.enumIter.find(e => e.id == this.$props.config.default) || this.$props.config.default;
			}
		},
	},
	created() {
		this.$macgyver.inject(this);
		this.$on('mgValidate', reply => {
			if (this.$props.config.required && !this.data) return reply(`${this.$props.config.title} is required`);
		});

		this.$watch('$props.config.enumUrl', ()=> {
			if (!this.$props.config.enumUrl) return;
			this.$macgyver.utils.fetch(this.$props.config.enumUrl, {type: 'array'})
				.then(data => this.setEnum(data))
		}, {immediate: true});

		this.$watch('$props.config.enum', ()=> {
			if (_.isArray(this.$props.config.enum) && _.isString(this.$props.config.enum[0])) { // Array of strings
				this.setEnum(this.$props.config.enum.map(i => ({id: _.camelCase(i), title: i})));
			} else if (_.isArray(this.$props.config.enum) && _.isObject(this.$props.config.enum[0])) { // Collection
				this.setEnum(this.$props.config.enum);
			}
		}, {immediate: true});
	},
	mounted() {
		if (this.$props.config.focus) {
			// NOTE: Focus selection does NOT work if DevTools is open in Chome
			this.$refs.select.searchEl.focus();
		}
	},
});
</script>

<template>
	<v-select
		ref="select"
		:value="value"
		label="title"
		:options="enumIter"
		:placeholder="$props.config.placeholder"
		@input="change"
	>
		<template #selected-option="option">
			<i v-if="value.icon" :class="value.icon"/>
			{{value.title}}
		</template>
		<template #option="option">
			<i v-if="option.icon" :class="option.icon"/>
			{{option.title}}
		</template>
	</v-select>
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
.v-select .dropdown-toggle .clear {
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
