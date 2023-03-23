<script lang="js">
import Debug from '@doop/debug';
const $debug = Debug('mgWysiwyg').enable(false);

import tinymce from 'tinymce';

import 'tinymce/icons/default';

import 'tinymce/themes/silver';
import 'tinymce/models/dom';

import 'tinymce/skins/ui/oxide/skin.css';

import 'tinymce/plugins/advlist';
import 'tinymce/plugins/code'; // FIXME: Not picking up changes made in editor view?
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/emoticons/js/emojis';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/table';

// import './plugins/checklist/plugin';
// import './plugins/powerpaste/plugin';
// import './plugins/powerpaste/js/wordimport';

import contentUiSkinCss from 'tinymce/skins/ui/oxide/content.css';

import contentCss from 'tinymce/skins/content/default/content.css';

export default app.mgComponent('mgWysiwyg', {
	meta: {
		title: 'WYSIWYG editor',
		icon: 'far fa-atlas',
		category: 'Complex Inputs',
		preferId: true,
		shorthand: ['content'],
	},
	props: {
		title: {type: 'mgText'},
		placeholder: {type: 'mgText', help: 'Ghost text to display when there is no value'},
		required: {type: 'mgToggle', default: false},
		disabled: {type: 'mgToggle', default: false},
		// TODO: readonly; Same as disabled in this case?
		height: {type: 'mgNumber', default: 400, help: 'The size of the editing window in pixels', advanced: true},
		syntax: {type: 'mgChoiceDropdown', enum: ['text', 'html'], default: 'html'},
		//convert: {type: 'mgToggle', default: true, showIf: 'syntax == "json"', help: 'Convert data back to a native JS object'},
	},
	created() {
		this.$debug = $debug;

		this.$on('mgValidate', reply => {
			if (this.$props.required && !this.data) return reply(`${this.$props.title} is required`);
		});
	},
	mounted() {
		tinymce.init({
			selector: `#mg-wysiwyg-${this._uid}`,
			height: parseInt(this.height),
			readonly: this.disabled,
			//min_height: this.height,
			placeholder: this.placeholder,

			resize: 'both',

			menubar: false,
			//plugins: 'advlist code emoticons link lists table', // TinyMCE believes it is being told to load "rtc" plugin @see https://github.com/tinymce/tinymce/issues/8582
			plugins: ['advlist', 'code', 'emoticons', 'link', 'lists', 'table'],
			toolbar: 'undo redo | bold italic forecolor backcolor | bullist numlist checklist table | link emoticons | code',

			// Configuration required for local self-install
			skin: false,
			content_css: false,
			content_style: contentUiSkinCss.toString() + '\n' + contentCss.toString(),

			promotion: false, // Oh yeah we really want adverts!

			// Bound to "change keyup" events as per https://github.com/tinymce/tinymce-vue/blob/b41c2a47eb8d9629eb01a41d6c6c633651f2d078/src/main/ts/Utils.ts#L115-L119
			init_instance_callback: editor => editor.on('change keyup', e => this.data = editor.getContent({ format: this.syntax })),
		});

		// Prevent Bootstrap dialog from blocking focusin
		// @see https://www.tiny.cloud/docs/tinymce/6/bootstrap-zip/#using-tinymce-in-a-bootstrap-dialog
		document.addEventListener('focusin', (e) => {
			if (e.target.closest(".tox-tinymce, .tox-tinymce-aux, .moxman-window, .tam-assetmanager-root") !== null) {
				e.stopImmediatePropagation();
			}
		});

		this.$watch('disabled', () => {
			tinymce.activeEditor.mode.set((this.disabled) ? 'readonly' : 'design');
		});
	},
});
</script>

<template>
	<div class="mg-wysiwyg">
		<textarea
			:id="`mg-wysiwyg-${_uid}`"
			:value="data"
		/>

		<div v-if="$debug.$enabled" class="card">
			<div class="card-header">
				Raw mgWysiwyg data
				<i class="float-right fas fa-debug fa-lg" v-tooltip="'Only visible to users with the Debug permission'"/>
			</div>
			<div class="card-body">
				<pre>{{$data}}</pre>
				<pre>{{$props}}</pre>
			</div>
		</div>
	</div>
</template>
