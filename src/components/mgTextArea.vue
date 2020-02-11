<script>
macgyver.register('mgTextArea', {
	title: 'Multi-line text',
	icon: 'fa fa-align-justify',
	category: 'Simple Inputs',
	preferId: true,
	config: {
		rows: {type: 'mgNumber', title: 'Line height', default: 3},
		lengthMin: {type: 'mgNumber', title: 'Minimum Length', min: 0},
		lengthMax: {type: 'mgNumber', title: 'Maximum Length'},
		placeholder: {type: 'mgTextArea', help: 'Ghost text to display when there is no value'},
		required: {type: 'mgToggle', default: false},
	},
	format: true,
});

export default Vue.component('mgTextArea', {
	inject: ['$mgForm'],
	data() { return {
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
});
</script>

<template>
	<textarea
		v-model="data"
		class="form-control"
		:placeholder="config.placeholder"
		:minlength="$props.config.lengthMin"
		:maxlength="$props.config.lengthMin"
		:rows="$props.config.rows"
		autocomplete="off"
	/>
</template>
