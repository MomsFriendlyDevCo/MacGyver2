<script>
export default Vue.mgComponent('mgTime', {
	meta: {
		title: 'Time selection',
		icon: 'fa fa-clock',
		category: 'Simple Inputs',
		preferId: true,
		format: v => {
			if (!v) return '';
			var d = v instanceof Date ? v : new Date(v);
			return d.toLocaleTimeString();
		},
		formatClass: 'text-center',
	},
	props: {
		min: {type: 'mgTime', title: 'Earliest time'},
		max: {type: 'mgNumber', title: 'Latest time'},
		required: {type: 'mgToggle', default: false},
	},
	created() {
		this.$on('mgValidate', reply => {
			if (this.$props.required && !this.data) return reply(`${this.$props.title} is required`);
			if (this.$props.min && _.isString(this.data) && this.data < this.$props.min) return reply(`${this.$props.title} is too early (earliest time is ${this.$props.min})`);
			if (this.$props.max && _.isString(this.data) && this.data > this.$props.max) return reply(`${this.$props.title} is too late (latest time is ${this.$props.max})`);
		});
	},
});
</script>

<template>
	<input v-model="data" type="time" class="form-control"/>
</template>
