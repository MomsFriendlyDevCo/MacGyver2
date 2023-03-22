<script lang="js">
import Debug from '@doop/debug';
const $debug = Debug('mgCode').enable(true);

import _ from 'lodash';

// TODO: Ace provides no sane imports
//import ace from 'ace-code';
//import ace from 'ace-builds';
//import 'ace-builds/webpack-resolver';

export default app.mgComponent('mgCode', {
	meta: {
		title: 'Code Editor',
		icon: 'fal fa-code',
		category: 'Complex Inputs',
		preferId: true,
	},
	data() { return {
		formData: '',
	}},
	props: {
		title: {type: 'mgText'},
		syntax: {type: 'mgChoiceDropdown', enum: ['text', 'json', 'javascript', 'html', 'css'], default: 'json'},
		convert: {type: 'mgToggle', default: true, showIf: 'syntax == "json"', help: 'Convert data back to a native JS object'},
		theme: {type: 'mgChoiceDropdown', enum: ['chrome'], advanced: true, default: 'chrome', help: 'The syntax color scheme to use'},
		height: {type: 'mgText', default: '400px', help: 'The size of the editing window as a valid CSS measurement', advanced: true},
	},
	methods: {
		handleChange() {
			return Promise.resolve()
				.then(() => this.data = JSON.parse(this.formData))
				.catch(this.$toast.catch);
		},
	},
	beforeDestroy() {
		// @see https://github.com/ajaxorg/ace/issues/5099
		console.warn('TODO: ACE does not import properly with Webpack')
		return;

		this.editor.destroy();
		this.editor.container.remove();
	},
	mounted() {


		this.$watch('data', (newVal, oldVal)=> {
			$debug('data', newVal, oldVal);
			this.formData = JSON.stringify(this.data, null, 2);
		}, {deep: true, immediate: true});


		// @see https://github.com/ajaxorg/ace/issues/5099
		console.warn('TODO: ACE does not import properly with Webpack')
		return;

		$debug('ace', ace);
		this.editor = ace.edit(this.$el);
		$debug('editor', this.editor);
		this.editor.$blockScrolling = Infinity;

		this.editor.setOptions({
			showPrintMargin: false,
		});

		this.editor.on('change', (delta)=> {
			var value = this.editor.getValue();
			$debug('change', value);
			if (this.$props.convert && this.$props.syntax == 'json') {
				try {
					value = JSON.parse(value);

					/*
					// Replace dollarsign prefixed items with Unicode
					// https://stackoverflow.com/a/39126851/2438830
					function replaceKeysDeep(obj) {
						return _.transform(obj, function(res, v, k) {
							var cur = _.isString(k) ? k.replace(/^\$/, '\uFF04') : k;
							res[cur] = _.isObject(v) ? replaceKeysDeep(v) : v;
						});
					}
					replaceKeysDeep(value);
					*/

					this.data = value;
				} catch (e) {
					// Silently fail as the JSON is invalid
					console.log('Invalid JSON', e);
				}
			} else {
				this.data = value;
			}
			return true;
		});

		this.$nextTick(()=> this.editor.resize());

		/*
		this.$watch('config', ()=> {
			// TODO: Make compatible with Parcel
			//if (this.$props.syntax) this.editor.getSession().setMode(`ace/mode/${this.$props.syntax}`);
			//if (this.$props.theme) this.editor.setTheme(`ace/theme/${this.$props.theme}`);
		}, {
			// FIXME: deep?
			immediate: true
		});
		*/

		this.$watch('data', (newVal, oldVal)=> {
			if (!newVal) return;
			var value = this.editor.getValue();

			if (this.$props.convert && this.$props.syntax == 'json')
				newVal = JSON.stringify(newVal, null, '\t');

			// FIXME: This comparison will fail with parsed (convert = true) instances, resulting in update loop.
			if (newVal === value) return;

			this.editor.setValue(newVal, 1);
		}, {deep: true, immediate: true});
	},
	/*
	// TODO: Revert to this pattern when ace works again
	render(h) {
		return h('div', {
			attrs: {
				class: 'mg-code',
				style: `height: ${this.$props.height}; width: 100%`,
			},
		});
	},
	*/
});
</script>

<template>
	<div class="mg-code">
		<textarea
			:style="`height: ${height}`"
			:value="formData"
			@input="handleChange"
		/>
	</div>
</template>

<style>
.mg-code {
	height: 100%;
	width: 100%;
	border: 1px solid #f0f0f0;
	border-radius: 5px;
	min-width: 150px;
}

.mg-code textarea {
	width: 100%;
}
</style>
