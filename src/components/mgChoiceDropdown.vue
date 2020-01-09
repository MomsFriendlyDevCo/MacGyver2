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
		enum: {
			type: 'mgList',
			title: 'List items',
			default: ['Item One', 'Item Two', 'Item Three'],
		},
		enumUrl: {type: 'mgUrl', advanced: true, help: 'Data feed URL to fetch choice values from'},
		placeholder: {type: 'mgText', help: 'Ghost text to display when there is no value'},
		required: {type: 'mgToggle', default: false, help: 'One choice must be selected'},
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
			this.value = val.title;
		},
	},
	created() {
		this.$macgyver.inject(this);
		this.$on('mgValidate', reply => {
			if (this.$props.config.required && !this.data) return reply(`${this.$props.config.title} is required`);
		});

		this.$watch('$props.config.enumUrl', ()=> {
			if (!this.$props.config.enumUrl) return;
			this.$macgyver.fetchEnumUrl(this.$props.config.enumUrl)
				.then(data => this.$set(this.$props.config, 'enum', data))
		}, {immediate: true});

		this.$watch('$props.config.enum', ()=> {
			if (_.isArray(this.$props.config.enum) && _.isString(this.$props.config.enum[0])) { // Array of strings
				this.enumIter = this.$props.config.enum.map(i => ({id: _.camelCase(i), title: i}));
			} else if (_.isArray(this.$props.config.enum) && _.isObject(this.$props.config.enum[0])) { // Collection
				this.enumIter = this.$props.config.enum;
			}

			if (this.data) {
				this.value = this.enumIter.find(e => e.id == this.data) || this.data;
			} else if (this.$props.config.default) {
				this.value = this.enumIter.find(e => e.id == this.$props.config.default) || this.$props.config.default;
			}
		}, {immediate: true});
	},
});
</script>

<template>
	<v-select
		:value="value"
		label="title"
		:options="enumIter"
		:placeholder="$props.config.placeholder"
		@input="change"
	/>
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
</style>
