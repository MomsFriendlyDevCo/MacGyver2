<script lang="js">
export default app.mgComponent('mgTextArea', {
	meta: {
		title: 'Multi-line text',
		icon: 'fa fa-align-justify',
		category: 'Simple Inputs',
		preferId: true,
	},
	props: {
		rows: {type: 'mgNumber', title: 'Line height', default: 3},
		lengthMin: {type: 'mgNumber', title: 'Minimum Length', min: 0},
		lengthMax: {type: 'mgNumber', title: 'Maximum Length'},
		placeholder: {type: 'mgTextArea', help: 'Ghost text to display when there is no value'},
		label: {type: 'mgText', help: 'Textarea input label'},
		required: {type: 'mgToggle', default: false},
		disabled: {type: 'mgToggle', default: false},
		readonly: {type: 'mgToggle', default: false},
	},
	created() {
		this.$on('mgValidate', reply => {
			if (this.$props.required && !this.data) return reply(`${this.$props.title} is required`);
			if (this.$props.lengthMin && _.isString(this.data) && this.data.length < this.$props.lengthMin) return reply(`${this.$props.title} is too small (minimum length is ${this.$props.lengthMin})`);
			if (this.$props.lengthMax && _.isString(this.data) && this.data.length > this.$props.lengthMax) return reply(`${this.$props.title} is too long (maximum length is ${this.$props.lengthMax})`);
		});
	},
});
</script>

<template>
	<label>
		{{ $props.label }}
		<textarea
			v-model="data"
			class="form-control"
			:placeholder="$props.placeholder"
			:disabled="$props.disabled"
			:readonly="$props.readonly"
			:minlength="$props.lengthMin"
			:maxlength="$props.lengthMin"
			:rows="$props.rows"
			autocomplete="off"
		/>
	</label>
</template>
