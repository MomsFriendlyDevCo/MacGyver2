<script>
macgyver.register('mgCodeEditor', {
	requires: 'node_modules/ace-builds/src-noconflict/ace.js',
	title: 'Code Editor',
	icon: 'fal fa-code',
	category: 'Complex Inputs',
	preferId: true,
	config: {
		syntax: {type: 'mgChoiceDropdown', enum: ['text', 'json', 'javascript', 'html'], default: 'json'},
		convert: {type: 'mgToggle', default: true, showIf: 'syntax == "json"', help: 'Convert data back to a native JS object'},
		theme: {type: 'mgChoiceDropdown', enum: ['chrome'], advanced: true, default: 'chrome', help: 'The syntax color scheme to use'},
		height: {type: 'mgText', default: '400px', help: 'The size of the editing window as a valid CSS measurement', advanced: true},
	},
});

export default Vue.component('mgCodeEditor', {
	inject: ['$mgForm'],
	data() { return {
		data: undefined,
	}},
	props: {
		config: Object,
	},
	created() {
		this.$mgForm.inject(this);
	},
	beforeDestroy() {
		this.editor.destroy();
		this.editor.container.remove();
	},
	mounted() {
		this.editor = ace.edit(this.$el);
		this.editor.$blockScrolling = Infinity;

		this.editor.setValue(
			_.isObject(this.data) ? JSON.stringify(this.data, null, '\t') // Parse raw objects into JSON
			: this.data ? this.data
			: ''
		, 1);

		this.editor.setOptions({
			showPrintMargin: false,
		});

		this.editor.on('change', ()=> {
			var val = this.editor.getValue();
			if (this.$props.config.convert && this.$props.config.syntax == 'json') {
				try {
					val = JSON.parse(val);
					this.$mgForm.$emit('mgChange', this.$props.config.id, val)
				} catch (e) {
					// Silently fail as the JSON is invalid
				}
			} else {
				this.$mgFormemit('mgChange', this.$props.config.id, val)
			}
			return true;
		});

		this.$nextTick(()=> this.editor.resize());

		this.$watch('config', ()=> {
			this.editor.getSession().setMode(`ace/mode/${this.$props.config.syntax}`);
			this.editor.setTheme(`ace/theme/${this.$props.config.theme}`);
		}, {immediate: true});
	},
	render(h) {
		return h('div', {
			attrs: {
				class: 'mg-code-editor',
				style: `height: ${this.$props.config.height}; width: 100%`,
			},
		});
	},
});
</script>

<style>
.mg-code-editor {
	border: 1px solid #f0f0f0;
	border-radius: 5px;
}
</style>
