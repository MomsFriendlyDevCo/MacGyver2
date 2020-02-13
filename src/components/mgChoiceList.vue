<script>
macgyver.register('mgChoiceList', {
	title: 'Radio multiple-choice',
	icon: 'far fa-list-ol',
	category: 'Choice Selectors',
	preferId: true,
	config: {
		enum: {
			type: 'mgTable',
			title: 'List items',
			default: [],
			items: [
				{id: 'title', type: 'mgText'},
				{id: 'icon', type: 'mgIcon', interface: 'modal'},
			],
		},
		required: {type: 'mgToggle', default: false, help: 'One choice must be selected'},
	},
	format: true, // FIXME: Not sure about this, what if we need to lookup the value by the enum ID?
});

export default Vue.component('mgChoiceList', {
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
	<div class="mg-choice-list list-group">
		<a
			v-for="item in enumIter"
			:key="item.id"
			class="list-group-item"
			:class="data == item.id && 'active'"
			@click="data = item.id"
		>
			<i v-if="item.icon" :class="item.icon"/>
			{{item.title}}
		</a>
	</div>
</template>

<style>
.mg-choice-list .list-group-item.active {
	color: #fff;
}
</style>
