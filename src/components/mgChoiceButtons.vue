<script lang="js">
import Debug from '@doop/debug';
const $debug = Debug('mgChoiceButtons').enable(false);

import _ from 'lodash';
import ChoiceEnum from '../mixins/ChoiceEnum.js';

export default app.mgComponent('mgChoiceButtons', {
	mixins: [ChoiceEnum],
	meta: {
		title: 'Choice Buttons',
		icon: 'fas fa-ellipsis-h',
		category: 'Choice Selectors',
		preferId: true,
	},
	props: {
		title: {type: 'mgText'},
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
		// FIXME: Should respond to space key. Anchor needs to have 'role="button"' or 'class="btn"'?
		select(option) {
			if (!option) return this.data = null;

			this.data = this.getOptionKey(option);
			if (option.action) this.$mgForm.run(option.action);
		},
	},
});
</script>

<template>
	<div class="mg-choice-buttons" :class="$props.classWrapper">
		<a
			v-for="option in options"
			:key="getOptionKey(option)"
			:class="getOptionKey(option) && data == getOptionKey(option)
				? option.classActive || option.class || $props.itemClassActive
				: option.classInactive || option.class || $props.itemClassInactive
			"
			tabindex="0"
			v-tooltip="option.tooltip"
			@click="select(option)"
		>
			<i v-if="getOptionIcon(option)" :class="getOptionIcon(option)"/>
			{{ getOptionLabel(option) }}
		</a>
	</div>
</template>

<style>
.fa-invisible:before {
	content: "\f111";
	visibility: hidden;
}
</style>
