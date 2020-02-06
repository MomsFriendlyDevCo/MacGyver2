<script>
macgyver.register('mgDate', {
	title: 'Date selection',
	icon: 'far fa-calendar',
	category: 'Simple Inputs',
	preferId: true,
	config: {
		min: {type: 'mgDate', title: 'Earliest date'},
		max: {type: 'mgDate', title: 'Latest date'},
		required: {type: 'mgToggle', default: false},
	},
	format: v => {
		if (!v) return '';
		var d = v instanceof Date ? v : new Date(v);
		console.log('mgDate SHOULD BE DATE', d);
		return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
	},
	formatAlign: 'center',
});

export default Vue.component('mgDate', {
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
			if (this.$props.config.min && _.isString(this.data) && this.data < this.$props.config.min) return reply(`${$props.config.title} is too early (earliest date is ${this.$props.config.min})`);
			if (this.$props.config.max && _.isString(this.data) && this.data > $props.config.max) return reply(`${$props.config.title} is too late (latest date is ${this.$props.config.max})`);
		});
	},
});
</script>

<template>
	<input v-model="data" type="date" class="form-control"/>
</template>
