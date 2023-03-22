<script lang="js">
import Debug from '@doop/debug';
const $debug = Debug('mgCode').enable(false);

import _ from 'lodash';

// TODO: Ace provides no sane webpack compatible imports
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
	beforeDestroy() {
		// @see https://github.com/ajaxorg/ace/issues/5099
		// TODO: ACE does not import properly with Webpack
		return;

		this.editor.destroy();
		this.editor.container.remove();
	},
	created() {
		this.$debug = $debug;
	},
	mounted() {
		this.$watch('data', ()=> {
			//$debug('$watch.data', this.data);
			if (this.$props.convert && this.$props.syntax == 'json') {
				this.formData = JSON.stringify(this.data, null, 2);
			} else {
				this.formData = this.data;
			}
		}, {deep: true, immediate: true});

		this.$watch('formData', ()=> {
			//$debug('$watch.formData', this.formData);
			try {
				if (this.$props.convert && this.$props.syntax == 'json') {
					this.data = JSON.parse(this.formData);
				} else {
					this.data = this.formData;
				}
			} catch(e) {
				console.warn('Invalid syntax', e); // Silently fail
			}
		});


		// @see https://github.com/ajaxorg/ace/issues/5099
		// TODO: ACE does not import properly with Webpack
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
	// TODO: ACE does not import properly with Webpack
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
			v-model="formData"
		/>

		<div v-if="$debug.$enabled" class="card">
			<div class="card-header">
				Raw mgCode data
				<i class="float-right fas fa-debug fa-lg" v-tooltip="'Only visible to users with the Debug permission'"/>
			</div>
			<div class="card-body">
				<pre>{{$data}}</pre>
				<pre>{{$props}}</pre>
			</div>
		</div>
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
