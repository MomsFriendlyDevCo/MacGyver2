<script>
export default Vue.mgComponent('mgChoiceButtons', {
	meta: {
		title: 'Choice Buttons',
		icon: 'fas fa-ellipsis-h',
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
			items: [
				{id: 'id', title: 'ID'},
				{id: 'title', title: 'Title'},
				{id: 'tooltip', title: 'Tooltip'},
				{id: 'icon', title: 'Icon', type: 'mgIcon'},
				{id: 'class', title: 'Classes'},
				{id: 'classActive', title: 'Active Class'},
				{id: 'classInactive', title: 'Inactive Class'},
				// Implied: {id: 'action', title: 'Action on select', type: 'function'},
			],
		},
		required: {type: 'mgToggle', default: false, help: 'One choice must be selected'},
		classWrapper: {type: 'mgText', default: 'btn-group', title: 'Group CSS class', advanced: true},
		itemClassActive: {type: 'mgText', default: 'btn btn-primary', advanced: true},
		itemClassInactive: {type: 'mgText', default: 'btn btn-light', advanced: true},
	},
	created() {
		this.$on('mgValidate', reply => {
			if (this.$props.required && !this.data) return reply(`${this.$props.title} is required`);
		});
	},
	methods: {
		select(item) {
			this.data = item.id;
			if (item.action) this.$mgForm.run(item.action);
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
	<div class="mg-choice-buttons" :class="$props.classWrapper">
		<a
			v-for="item in enumIter"
			:key="item.id"
			:class="item.id && data == item.id
				? item.classActive || item.class || $props.itemClassActive
				: item.classInactive || item.class || $props.itemClassInactive
			"
			v-tooltip="item.tooltip"
			@click="select(item)"
		>
			<i v-if="item.icon" :class="item.icon"/>
			{{item.title}}
		</a>
	</div>
</template>

<style>
.fa-invisible:before {
	content: "\f111";
	visibility: hidden;
}
</style>
