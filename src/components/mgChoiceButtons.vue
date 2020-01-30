<script>
macgyver.register('mgChoiceButtons', {
	title: 'Choice Buttons',
	icon: 'fas fa-rectangle-landscape',
	category: 'Choice Selectors',
	preferId: true,
	config: {
		enum: { // Each item is in the form {id, [title], [class], [classActive], [classInactive], [tooltip]}
			type: 'mgList',
			title: 'List items',
			default: [],
		},
		required: {type: 'mgToggle', default: false, help: 'One choice must be selected'},
		classWrapper: {type: 'mgText', default: 'btn-group', title: 'Group CSS class', advanced: true},
		itemClassActive: {type: 'mgText', default: 'btn btn-primary', advanced: true},
		itemClassInactive: {type: 'mgText', default: 'btn btn-light', advanced: true},
	},
	format: true, // FIXME: Not sure about this, what if we need to lookup the value by the enum ID?
});

export default Vue.component('mgChoiceButtons', {
	data: ()=> ({
		data: undefined,
		enumIter: [],
	}),
	props: {
		config: Object,
		form: String,
	},
	methods: {
		select(id) {
			this.data = id;
		},
	},
	created() {
		this.$macgyver.inject(this);
		this.$on('mgValidate', reply => {
			if (this.$props.config.required && !this.data) return reply(`${this.$props.config.title} is required`);
		});
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
	<div class="mg-choice-buttons" :class="$props.config.classWrapper">
		<a
			v-for="item in enumIter"
			:key="item.id"
			:class="data == item.id ? item.classActive || item.class || $props.config.itemClassActive : item.classInactive || item.class || $props.config.itemClassInactive"
			v-tooltip="item.tooltip"
			@click="select(item.id)"
		>
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
