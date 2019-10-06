<script>
macgyver.register('mgUrl', {
	title: 'URL',
	icon: 'far fa-globe',
	category: 'Simple Inputs',
	preferId: true,
	config: {
		placeholder: {type: 'mgUrl', help: 'Ghost text to display when there is no value'},
		required: {type: 'mgToggle', default: false},
		relative: {type: 'mgToggle', help: 'Allow relative URL paths to the host'}, // FIXME: Not yet implemented
	},
	format: v => {
		if (!v) return '';
		return `<a href="${v}" target="_blank">${v}</a>`;
	},
	shorthand: ['uri'],
});

export default Vue.component('mgUrl', {
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
	<input v-model="data" type="url" class="form-control" :placeholder="$props.config.placeholder"/>
</template>
