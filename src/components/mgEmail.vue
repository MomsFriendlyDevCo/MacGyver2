<script>
macgyver.register('mgEmail', {
	title: 'Email address',
	icon: 'far fa-at',
	category: 'Simple Inputs',
	preferId: true,
	config: {
		placeholder: {type: 'mgText', help: 'Ghost text to display when the text box has no value'},
		required: {type: 'mgToggle', default: false},
	},
	format: v => {
		if (!v) return '';
		return `<a href="mailto:${v}">${v}</a>`;
	},
});

export default Vue.component('mgEmail', {
	data: ()=> ({
		data: undefined,
	}),
	props: {
		config: Object,
		form: String,
	},
	created() {
		this.$macgyver.inject(this);
		this.$on('mgValidate', reply => {
			if (this.$props.config.required && !this.data) return reply(`${this.$props.config.title} is required`);
		});
	},
});
</script>

<template>
	<input v-model="data" type="email" class="form-control" :placeholder="$props.config.placeholder"/>
</template>
