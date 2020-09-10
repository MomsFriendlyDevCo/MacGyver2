<script>
import moment from 'moment';

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

		this.$watch('data', ()=> {
			this.formData = moment(this.data).format(moment.HTML5_FMT.DATETIME_LOCAL);
		}, { immediate: true });

		this.$watch('formData', ()=> {
			this.data = moment(this.formData, moment.HTML5_FMT.DATETIME_LOCAL).toISOString();
		});
	},
});
</script>

<template>
	<div class="mg-datetime">
		<!-- TODO: Allow for read-only displays -->
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
