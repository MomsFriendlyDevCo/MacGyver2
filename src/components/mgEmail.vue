<script lang="js">
export default app.mgComponent('mgEmail', {
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
		label: {type: 'mgText', help: 'Email input label'},
		required: {type: 'mgToggle', default: false},
		disabled: {type: 'mgToggle', default: false},
		readonly: {type: 'mgToggle', default: false},
	},
	created() {
		this.$on('mgValidate', reply => {
			if (this.$props.required && !this.data) return reply(`${this.$props.title} is required`);
		});
	},
});
</script>

<template>
	<label class="mg-email">
		{{ $props.label }}
		<input
			v-model="data"
			type="email"
			class="form-control"
			:disabled="$props.disabled"
			:placeholder="$props.placeholder"
			:readonly="$props.readonly"
		/>
	</label>
</template>
