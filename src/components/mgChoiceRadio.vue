<script>
macgyver.register('mgChoiceRadio', {
	title: 'Radio multiple-choice',
	icon: 'far fa-list-ul',
	category: 'Choice Selectors',
	preferId: true,
	config: {
		enum: {
			type: 'mgTable',
			title: 'List items',
			items: [
				{id: 'id', title: 'ID'},
				{id: 'title', title: 'Title'},
			],
		},
		required: {type: 'mgToggle', default: false, help: 'One choice must be selected'},
	},
	format: true, // FIXME: Not sure about this, what if we need to lookup the value by the enum ID?
});

export default Vue.component('mgChoiceRadio', {
	inject: ['$mgForm'],
	data() { return {
		data: undefined,
		enumIter: [],
	}},
	props: {
		config: Object,
	},
	created() {
		this.$mgForm.inject(this);
		this.$on('mgValidate', reply => {
			if (this.$props.config.required && !this.data) return reply(`${this.$props.config.title} is required`);
		});
	},
	methods: {
		select(id) {
			this.data = id;
		},
	},
	watch: {
		'$props.config.enum': {
			immediate: true,
			handler() {
				if (_.isArray(this.$props.config.enum) && _.isString(this.$props.config.enum[0])) { // Array of strings
					this.enumIter = this.$props.config.enum.map(i => ({id: _.camelCase(i), title: i}));
				} else if (_.isArray(this.$props.config.enum) && _.isObject(this.$props.config.enum[0])) { // Collection
					this.enumIter = this.$props.config.enum;
				}
			},
		},
	},
});
</script>

<template>
	<div>
		<div class="form-check" v-for="item in enumIter" :key="item.id">
			<input
				v-model="data"
				type="radio"
				:name="$props.config.id"
				:value="item.id"
				:id="`check-${$props.config.id}-${item.id}`"
			/>
			<label class="form-check-label" :for="`check-${$props.config.id}-${item.id}`">
				{{item.title}}
			</label>
		</div>
	</div>
</template>
