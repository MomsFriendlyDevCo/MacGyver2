<script>
export default Vue.mgComponent('mgCode', {
	meta: {
		title: 'Code Editor',
		icon: 'fal fa-code',
		category: 'Complex Inputs',
		preferId: true,
	},
	props: {
		syntax: {type: 'mgChoiceDropdown', enum: ['text', 'json', 'javascript', 'html', 'css'], default: 'json'},
		convert: {type: 'mgToggle', default: true, showIf: 'syntax == "json"', help: 'Convert data back to a native JS object'},
		theme: {type: 'mgChoiceDropdown', enum: ['chrome'], advanced: true, default: 'chrome', help: 'The syntax color scheme to use'},
		height: {type: 'mgText', default: '400px', help: 'The size of the editing window as a valid CSS measurement', advanced: true},
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
			var value = this.editor.getvalueue();
			if (this.$props.convert && this.$props.syntax == 'json') {
				try {
					value = JSON.parse(value);
					this.$mgForm.$emit('mgChange', {path: this.$props.id, value})
				} catch (e) {
					// Silently fail as the JSON is invalueid
				}
			} else {
				this.$mgForm.$emit('mgChange', {path: this.$props.id, value})
			}
			return true;
		});

		this.$nextTick(()=> this.editor.resize());

		this.$watch('config', ()=> {
			if (this.$props.syntax) this.editor.getSession().setMode(`ace/mode/${this.$props.syntax}`);
			if (this.$props.theme) this.editor.setTheme(`ace/theme/${this.$props.theme}`);
		}, {immediate: true});
	},
	render(h) {
		return h('div', {
			attrs: {
				class: 'mg-code',
				style: `height: ${this.$props.height}; width: 100%`,
			},
		});
	},
});
</script>

<style>
.mg-code {
	border: 1px solid #f0f0f0;
	border-radius: 5px;
}
</style>
