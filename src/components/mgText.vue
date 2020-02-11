<script>
macgyver.register('mgText', {
	title: 'Text',
	icon: 'far fa-edit',
	category: 'Simple Inputs',
	preferId: true,
	config: {
		lengthMin: {type: 'mgNumber', title: 'Minimum Length', min: 0},
		lengthMax: {type: 'mgNumber', title: 'Maximum Length'},
		placeholder: {type: 'mgText', help: 'Ghost text to display when there is no value'},
		required: {type: 'mgToggle', default: false},
		focus: {type: 'mgToggle', default: false, help: 'Auto-focus the element when it appears on screen'},
		autoComplete: {
			type: 'mgChoiceDropdown',
			help: 'Allow auto-complete value propagation',
			default: 'off',
			advanced: true,
			enum: [
				{id: 'on', title: 'Automatic'},
				{id: 'name', title: 'Name'},
				{id: 'email', title: 'Email'},
				{id: 'username', title: 'Username'},
				{id: 'street-address', title: 'Street address'},
				{id: 'address-line1', title: 'Address line 1'},
				{id: 'address-line2', title: 'Address line 2'},
				{id: 'address-line3', title: 'Address line 3'},
				{id: 'address-level1', title: 'Address level 1'},
				{id: 'address-level2', title: 'Address level 2'},
				{id: 'address-level3', title: 'Address level 3'},
				{id: 'address-level4', title: 'Address level 4'},
				{id: 'country', title: 'Country code'},
				{id: 'country-name', title: 'Country name'},
				{id: 'postal-code', title: 'Postcode'},
			],
		},
	},
	format: true,
	shorthand: ['string', 'str'],
});

export default Vue.component('mgText', {
	inject: ['$mgForm'],
	data() {return {
		data: undefined,
	}},
	props: {
		config: Object,
	},
	created() {
		this.$mgForm.inject(this);
		this.$on('mgValidate', reply => {
			if (this.$props.config.required && !this.data) return reply(`${this.$props.config.title} is required`);
			if (this.$props.config.lengthMin && _.isString(this.data) && this.data.length < this.$props.config.lengthMin) return reply(`${this.$props.config.title} is too small (minimum length is ${this.$props.config.lengthMin})`);
			if (this.$props.config.lengthMax && _.isString(this.data) && this.data.length > this.$props.config.lengthMax) return reply(`${this.$props.config.title} is too long (maximum length is ${this.$props.config.lengthMax})`);
		});
	},
	mounted() {
		if (this.$props.config.focus) {
			var $el = $(this.$el);
			var focusVisible = ()=> {
				if ($el.is(':visible')) {
					$el.focus();
				} else {
					setTimeout(focusVisible, 100);
				}
			};
			focusVisible();
		}
	},
});
</script>

<template>
	<input
		v-model="data"
		type="text"
		class="form-control"
		:autocomplete="$props.config.autoComplete"
		:placeholder="$props.config.placeholder"
	/>
</template>
