<script>
import moment from 'moment';

export default Vue.mgComponent('mgTime', {
	meta: {
		title: 'Time selection',
		icon: 'far fa-calendar',
		category: 'Simple Inputs',
		preferId: true,
		format: v => {
			if (!v) return '';
			return v;
			//return moment.duration(v).humanize();
		},
		formatClass: 'text-center',
	},
	data() { return {
		formData: undefined,
	}},
	props: {
		min: {type: 'mgTime', title: 'Earliest time'},
		max: {type: 'mgTime', title: 'Latest time'},
		required: {type: 'mgToggle', default: false},
	},
	created() {
		this.$debugging = false;

		this.$on('mgValidate', reply => {
			if (this.$props.required && !this.data) return reply(`${this.$props.title} is required`);
			if (_.isString(this.data)) {
				var d = moment.duration(this.data);
				if (!moment.isDuration(d)) return reply(`${this.$props.title} must be a time`);
				if (this.$props.min && d.asMilliseconds() < moment.duration(this.$props.min).asMilliseconds()) return reply(`${$props.title} is too early (earliest time is ${this.$props.min})`);
				if (this.$props.max && d.asMilliseconds() > moment.duration(this.$props.max).asMilliseconds()) return reply(`${$props.title} is too late (latest time is ${this.$props.max})`);
			}
		});

		this.$watch('data', newVal => {
			if (!newVal) return;
			this.formData = newVal;
		}, { immediate: true });

		this.$watch('formData', ()=> {
			this.data = moment.duration(this.formData).toISOString();
		});
	},
});
</script>

<template>
	<div class="mg-time">
		<!-- TODO: Allow for read-only displays -->
		<input
			v-model="formData"
			type="time"
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
