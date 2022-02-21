<script lang="js">
export default app.mgComponent('mgChoiceRadio', {
	meta: {
		title: 'Radio multiple-choice',
		icon: 'far fa-list-ul',
		category: 'Choice Selectors',
		preferId: true,
	},
	data() { return {
		enumIter: [],
	}},
	props: {
		id: {
			type: 'mgString',
		},
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
	created() {
		this.$on('mgValidate', reply => {
			if (this.$props.required && !this.data) return reply(`${this.$props.title} is required`);
		});
	},
	methods: {
		select(id) {
			this.data = id;
		},
	},
	watch: {
		'$props.enum': {
			immediate: true,
			handler() {
				// FIXME: Could check `.every` for strings
				if (_.isArray(this.$props.enum) && _.isString(this.$props.enum[0])) { // Array of strings
					this.enumIter = this.$props.enum.map(i => ({id: _.camelCase(i), title: i}));
				} else if (_.isArray(this.$props.enum) && _.isObject(this.$props.enum[0])) { // Collection
					this.enumIter = this.$props.enum;
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
				:name="$props.id"
				:value="item.id"
				:id="`check-${$props.id}-${item.id}`"
			/>
			<label class="form-check-label" :for="`check-${$props.id}-${item.id}`">
				{{item.title}}
			</label>
		</div>
	</div>
</template>
