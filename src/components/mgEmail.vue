<script>
export default Vue.mgComponent('mgEmail', {
	meta: {
		title: 'Email address',
		icon: 'far fa-at',
		category: 'Simple Inputs',
		preferId: true,
		format: v => {
			if (!v) return '';
			return `<a href="mailto:${v}">${v}</a>`;
		},
	},
	props: {
		placeholder: {type: 'mgText', help: 'Ghost text to display when the text box has no value'},
		required: {type: 'mgToggle', default: false},
	},
	created() {
		this.$on('mgValidate', reply => {
			if (this.$props.required && !this.data) return reply(`${this.$props.title} is required`);
		});
	},
});
</script>

<template>
	<input v-model="data" type="email" class="form-control" :placeholder="$props.placeholder"/>
</template>
