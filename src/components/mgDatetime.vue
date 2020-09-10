<script>
export default Vue.mgComponent('mgDatetime', {
	meta: {
		title: 'Datetime selection',
		icon: 'far fa-calendar',
		category: 'Simple Inputs',
		preferId: true,
		format: v => {
			if (!v) return '';
			var d = v instanceof Date ? v : new Date(v);
			console.log('mgDatetime SHOULD BE DATE', d);
			//return d.toISOString();
			return d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() + 'T' + d.getHours() + ':' + d.getMinutes();
		},
		formatClass: 'text-center',
	},
	data() { return {
		formData: undefined,
	}},
	props: {
		min: {type: 'mgDatetime', title: 'Earliest date'},
		max: {type: 'mgDatetime', title: 'Latest date'},
		required: {type: 'mgToggle', default: false},
	},
	created() {
		this.$debugging = true;

		this.$on('mgValidate', reply => {
			if (this.$props.required && !this.data) return reply(`${this.$props.title} is required`);
			if (this.$props.min && _.isString(this.data) && this.data < this.$props.min) return reply(`${$props.title} is too early (earliest date is ${this.$props.min})`);
			if (this.$props.max && _.isString(this.data) && this.data > $props.max) return reply(`${$props.title} is too late (latest date is ${this.$props.max})`);
		});

		// Convert to local format https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#Local_date_and_time_strings
		var d = new Date(this.data);
		this.formData = d.getFullYear() + '-' + `${d.getMonth() + 1}`.padStart(2, '0') + '-' + d.getDate() + 'T' + d.getHours() + ':' + d.getMinutes();

		this.$watch('formData', ()=> {
			this.$debug('watch', this.formData);
			this.data = new Date(this.formData).toISOString();
		});
	},
});
</script>

<template>
	<div class="mg-datetime">
		<input
			v-model="formData"
			type="datetime-local"
			class="form-control"
			:max="$props.max"
			:min="$props.min"
		/>

		<div v-if="this.$debugging" class="card">
			<div class="card-header">
				Raw data
			</div>
			<div class="card-body">
				<pre>{{$data}}</pre>
			</div>
		</div>
	</div>
</template>
