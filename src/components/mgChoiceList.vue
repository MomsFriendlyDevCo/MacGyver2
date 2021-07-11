<script lang="js">
export default app.mgComponent('mgChoiceList', {
	meta: {
		title: 'Radio multiple-choice',
		icon: 'far fa-list-ol',
		category: 'Choice Selectors',
		preferId: true,
	},
	data() { return {
		enumIter: [],
	}},
	props: {
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
