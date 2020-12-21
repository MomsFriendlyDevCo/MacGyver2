<script>
import VJsoneditor from 'v-jsoneditor';

/**
* Code editor with multi-language support
*
* @param {number} height The size of the editing window
* @param {string} syntax ENUM: ['text', 'json', 'javascript', 'html', 'css']
* @param {object} options Further customisations for underlying library
*
* @emits change Emitted as `(newValue)` when the value changes
*
* @example Display a code editor box
* <mg-code syntax="javascript" :value="someValue" @change="someValue = $event">
*/
export default Vue.mgComponent('mgCode', {
	meta: {
		title: 'Code Editor',
		icon: 'fal fa-code',
		category: 'Complex Inputs',
		preferId: true,
	},
	components: {VJsoneditor},
	data() { return {
		editor: undefined,
	}},
	computed: {
		// TODO: Could pick options based on what each library supports
		options() {
			if (this.syntax === 'json') {
				return {
					enableSort: false,
					search: false,
					mode: 'code',
					modes: ['code', 'tree'],
					..._.isPlainObject(this.$props.options) ? this.$props.options : {},
				};
			} else {
				return {
					showPrintMargin: false,
					..._.isPlainObject(this.$props.options) ? this.$props.options : {},
				};
			}
		},
	},
	props: {
		height: {type: 'mgText', default: '400', help: 'The size of the editing window', advanced: true},
		syntax: {type: 'mgChoiceDropdown', enum: ['text', 'json', 'javascript', 'html', 'css'], default: 'json'},
		options: {type: 'mgCode', default: {}, help: 'Further customisations for underlying library'},
	},
	methods: {
		initAceMode(mode) {
			return new Promise((resolve, reject) => {
				const script = document.createElement('script');
				script.src = 'node_modules/ace-builds/src-noconflict/mode-' + mode + '.js';
				script.addEventListener('load', resolve);
				script.addEventListener('error', e => reject(e.error));
				document.head.appendChild(script);
			}).then(() => {
				var Mode = ace.require('ace/mode/' + mode).Mode;
				this.editor.session.setMode(new Mode());
			});
		},
		initAce() {
			this.$el.style = `position: relative; height: ${this.$props.height}px; width: 100%;`;
			this.editor = ace.edit(this.$el);

			this.initAceMode(this.syntax);

			this.editor.$blockScrolling = Infinity;
			this.editor.setOptions(this.options);

			this.$nextTick(()=> this.editor.resize(true));

			this.editor.on('change', delta => {
				this.data = this.editor.getValue();
				return true;
			});

			this.$watch('data', (newVal, oldVal)=> {
				if (!newVal) return;
				if (newVal === this.editor.getValue()) return;
				this.editor.setValue(newVal, 1);
			}, {deep: true, immediate: true});
		},
		errorHandler(e) {
			console.log('errorHandler', e);
		}
	},
	mounted() {
		if (this.syntax === 'json') return;
		
		this.initAce();
	},
	beforeDestroy() {
		if (!this.editor) return;

		this.editor.destroy();
		this.editor.container.remove();
	},
});
</script>

<template>
	<div class="mg-code">
		<v-jsoneditor
			v-if="syntax == 'json'"
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
.jsoneditor-menu a.jsoneditor-poweredBy {
	display: none;
}
</style>
