<script>
macgyver.register('mgTime', {
	title: 'Time selection',
	icon: 'fa fa-clock',
	category: 'Simple Inputs',
	preferId: true,
	config: {
		min: {type: 'mgTime', title: 'Earliest time'},
		max: {type: 'mgNumber', title: 'Latest time'},
		required: {type: 'mgToggle', default: false},
	},
	format: v => {
		if (!v) return '';
		var d = v instanceof Date ? v : new Date(v);
		return d.toLocaleTimeString();
	},
	formatAlign: 'center',
});

export default Vue.component('mgTime', {
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
			if (this.$props.config.min && _.isString(this.data) && this.data < this.$props.config.min) return reply(`${this.$props.config.title} is too early (earliest time is ${this.$props.config.min})`);
			if (this.$props.config.max && _.isString(this.data) && this.data > this.$props.config.max) return reply(`${this.$props.config.title} is too late (latest time is ${this.$props.config.max})`);
		});
	},
});
</script>

<template>
	<input v-model="data" type="time" class="form-control"/>
</template>
