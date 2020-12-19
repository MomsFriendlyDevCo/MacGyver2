<script>
import VJsoneditor from 'v-jsoneditor';

export default Vue.mgComponent('mgCode', {
	meta: {
		title: 'Code Editor',
		icon: 'fal fa-code',
		category: 'Complex Inputs',
		preferId: true,
	},
	components: {VJsoneditor},
	data() { return {
		options: {},
	}},
	props: {
		enableSort: {type: 'mgChoiceCheckbox', default: true},
		mode: {type: 'mgChoiceDropdown', enum: ['view', 'form', 'code', 'text', 'preview'], default: 'tree'},
		modes: {type: 'mgChoiceList', default: ['tree', 'code']},
		search: {type: 'mgChoiceCheckbox', default: true},
		syntax: {type: 'mgChoiceDropdown', enum: ['text', 'json', 'javascript', 'html', 'css'], default: 'json'},
		theme: {type: 'mgChoiceDropdown', enum: ['chrome'], advanced: true, default: 'chrome', help: 'The syntax color scheme to use'},
		height: {type: 'mgText', default: '400px', help: 'The size of the editing window as a valid CSS measurement', advanced: true},
	},
	methods: {
		errorHandler(e) {
			this.$debug('errorHandler', e);
		}
	},
	created() {
		this.$debugging = false;

		this.options.enableSort = this.enableSort;
		this.options.mode = this.mode;
		this.options.modes = this.modes;
		this.options.search = this.search;
		this.options.theme = this.theme;
	},
});
</script>

<template>
	<div class="mg-code">
		<v-jsoneditor
			v-model="data"
			:options="options"
			:plus="false"
			:height="height"
			@error="errorHandler"
		/>
	</div>
</template>

<style>
.mg-code {
	border: 1px solid #f0f0f0;
	border-radius: 5px;
	min-width: 150px;
}
</style>
