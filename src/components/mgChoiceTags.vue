<script>
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
			type: 'mgList',
			title: 'List items',
			default: ['Item One', 'Item Two', 'Item Three'],
		},
		placeholder: {type: 'mgText', help: 'Ghost text to display when there is no value'},
		required: {type: 'mgToggle', default: false, help: 'One choice must be selected'},
		allowCreate: {type: 'mgToggle', default: false, help: 'Allow the user to create their own tags in addition to the supplied ones'},
		showDropdown: {type: 'mgToggle', default: true, help: 'When clicking, show a dropdown box. Disabling will only allow the user to use existing tags'},
	},
	format: true, // FIXME: Not sure about this, what if we need to lookup the value by the enum ID?
});

export default Vue.component('mgChoiceTags', {
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
			this.data = val.map(i => i.id);
			this.value = val;
		},
	},
	created() {
		this.$macgyver.inject(this);
		this.$on('mgValidate', reply => {
			if (this.$props.config.required && !this.data || !this.data.length) return reply(`${this.$props.config.title} is required`);
		});

		this.$watch('$props.config.enum', ()=> {
			if (_.isArray(this.$props.config.enum) && _.isString(this.$props.config.enum[0])) { // Array of strings
				this.enumIter = this.$props.config.enum.map(i => ({id: _.camelCase(i), title: i}));
			} else if (_.isArray(this.$props.config.enum) && _.isObject(this.$props.config.enum[0])) { // Collection
				this.enumIter = this.$props.config.enum;
			}

			if (this.data) this.value = this.enumIter.filter(e => this.data.includes(e.id));
		}, {immediate: true});
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
		:close-on-select="true"
		:multiple="true"
		@input="change"
	/>
</template>

<style>
/* Most of the style for this control is contained in macgyver/mgChoiceDropdown.vue */

.mg-choice-tags.v-select .dropdown-toggle {
	padding: 0;
}

.mg-choice-tags.v-select .selected-tag {
	padding: 0 .5em;
	margin: 6px 2px;
}

.mg-choice-tags.v-select input[type=search], .v-select input[type=search]:focus {
	margin: 0px !important;
}
</style>
