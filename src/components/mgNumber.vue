<script>
macgyver.register('mgNumber', {
	title: 'Number',
	icon: 'far fa-sort-numeric-down',
	category: 'Simple Inputs',
	preferId: true,
	config: {
		min: {type: 'mgNumber', title: 'Minimum value'},
		max: {type: 'mgNumber', title: 'Maximum value'},
		step: {type: 'mgNumber', title: 'Value to increment / decrement by'},
		placeholder: {type: 'mgNumber', help: 'Ghost text to display when there is no value'},
		required: {type: 'mgToggle', default: false},
		interface: {type: 'mgChoiceDropdown', title: 'Interface', help: 'How to allow number input', default: 'bumpers', enum: [
			{id: 'bumpers', title: 'Number input with buttons'},
			{id: 'slider', title: 'Slider bar'},
			{id: 'input', title: 'Number input box only'},
		]},
		bumperDownClass: {type: 'mgText', default: 'btn btn-light fa fa-arrow-down input-group-prepend', advanced: true, showIf: 'interface == "bumpers"'},
		bumperUpClass: {type: 'mgText', default: 'btn btn-light fa fa-arrow-up input-group-append', advanced: true, showIf: 'interface == "bumpers"'},
		prefix: {type: 'mgText', title: 'Prefix', help: 'Prefix to show before the input', showIf: 'interface == "input"'},
		prefixClass: {type: 'mgText', default: 'input-group-prepend input-group-text', advanced: true, showIf: 'interface == "input"'},
		suffix: {type: 'mgText', title: 'Suffix', help: 'Suffix to show after the input', showIf: 'interface == "input"'},
		suffixClass: {type: 'mgText', default: 'input-group-append input-group-text', advanced: true, showIf: 'interface == "input"'},
	},
	format: v => {
		if (!v) return '';
		return (_.isNumber(v) ? v : parseInt(v)).toLocaleString();
	},
	formatAlign: 'right',
	shorthand: ['integer', 'int', 'float'],
});

export default Vue.component('mgNumber', {
	data: ()=> ({
		data: undefined,
	}),
	props: {
		config: Object,
		form: String,
	},
	methods: {
		add(steps) {
			if (!_.isNumber(this.data)) return this.data = this.$props.config.min || 0; // Not already a number default to the min or zero

			this.data += steps * (this.$props.config.step || 1);
			if (this.$props.config.max && this.data > this.$props.config.max) this.data = this.$props.config.max;
			if (this.$props.config.min && this.data < this.$props.config.min) this.data = this.$props.config.min;
		},
	},
	created() {
		this.$macgyver.inject(this);
		this.$on('mgValidate', reply => {
			if (this.$props.config.required && !this.data) return reply(`${this.$props.config.title} is required`);
			if (this.$props.config.min && this.data < this.$props.config.min) return reply(`${this.$props.config.title} is too small (minimum value is ${this.$props.config.min})`);
			if (this.$props.config.max && this.data > this.$props.config.max) return reply(`${this.$props.config.title} is too large (maximum value is ${this.$props.config.max})`);
		});
	},
});
</script>

<template>
	<div class="mg-number">
		<div v-if="$props.config.interface == 'slider'">
			<input v-model="data" type="range" class="form-control" :placeholder="$props.config.placeholder" :min="$props.config.min" :max="$props.config.max" :step="$props.config.step"/>
		</div>
		<div v-else-if="$props.config.interface == 'bumpers'" class="input-group">
			<a @click="add(-1)" class="hidden-print" :class="$props.config.bumperDownClass"></a>
			<input v-model="data" type="number" class="form-control" :placeholder="$props.config.placeholder" :min="$props.config.min" :max="$props.config.max" :step="$props.config.step"/>
			<a @click="add(1)" class="hidden-print" :class="$props.config.bumperUpClass"></a>
		</div>
		<div v-else-if="$props.config.interface == 'input'" class="input-group">
			<div v-if="$props.config.prefix" :class="$props.config.prefixClass">{{$props.config.prefix}}</div>
			<input v-model="data" type="number" class="form-control" :placeholder="$props.config.placeholder" :min="$props.config.min" :max="$props.config.max" :step="$props.config.step"/>
			<div v-if="$props.config.suffix" :class="$props.config.suffixClass">{{$props.config.suffix}}</div>
		</div>
		<div v-else class="alert alert-warning">
			Unknown mgNumber interface '{{$props.config.interface}}'
		</div>
	</div>
</template>

<style>
.mg-number input[type=number] {
	padding: 0 10px;
}

.mg-number .btn {
	box-shadow: none;
	border: 1px solid #f0f0f0;
	display: flex;
	align-items: center;
}

/* Hide the spin button in mgNumber controls */
.mg-number input[type=number]::-webkit-outer-spin-button,
.mg-number input[type=number]::-webkit-inner-spin-button {
	/* display: none; <- Crashes Chrome on hover */
	-webkit-appearance: none;
	margin: 0; /* <-- Apparently some margin is still there even though it's hidden */
}
</style>
