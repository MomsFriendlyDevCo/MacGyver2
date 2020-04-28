<script>
export default Vue.mgComponent('mgDate', {
	meta: {
		title: 'Date selection',
		icon: 'far fa-calendar',
		category: 'Simple Inputs',
		preferId: true,
		format: v => {
			if (!v) return '';
			var d = v instanceof Date ? v : new Date(v);
			console.log('mgDate SHOULD BE DATE', d);
			return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
		},
		formatClass: 'text-center',
	},
	props: {
		min: {type: 'mgDate', title: 'Earliest date'},
		max: {type: 'mgDate', title: 'Latest date'},
		required: {type: 'mgToggle', default: false},
	},
	created() {
		this.$on('mgValidate', reply => {
			if (this.$props.required && !this.data) return reply(`${this.$props.title} is required`);
			if (this.$props.min && _.isString(this.data) && this.data < this.$props.min) return reply(`${$props.title} is too early (earliest date is ${this.$props.min})`);
			if (this.$props.max && _.isString(this.data) && this.data > $props.max) return reply(`${$props.title} is too late (latest date is ${this.$props.max})`);
		});
	},
});
</script>

<template>
	<input v-model="data" type="date" class="form-control"/>
</template>
