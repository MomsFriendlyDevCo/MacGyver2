<script>
export default Vue.component('mgFormEditorControls', {
	inject: ['$mgFormEditor'],
	data() { return {
	}},
	props: {
		config: {type: Object, required: true},
	},
	methods: {
	},
});
</script>

<template>
	<div
		class="mg-form-editor-controls"
	>
		<div class="mg-form-editor-controls-title">
			{{$props.config.type}}
		</div>
	</div>
</template>

<style>
/* Component outlines {{{ */
/* Neutral / Deselected {{{ */
.mg-form-editor .mg-component {
	border: 2px solid transparent;
	border-radius: 5px;
}
/* }}} */
/* Hover {{{ */
.mg-form-editor .mg-component.editHover {
	border: 2px dashed var(--mg-form-editor-hover-bg);
}
/* }}} */
/* Editing {{{ */
.mg-form-editor .mg-component.editEditing {
	border: 2px solid var(--mg-form-editor-selected-bg);
}
/* }}} */
/* }}} */

/* Edit controls {{{ */
.mg-form-editor-controls {
	pointer-events: none;
	position: absolute;
	transform: translate(2px, -30px);
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	padding: 2px 8px;
}

.mg-component.editHover .mg-form-editor-controls {
	background: var(--mg-form-editor-hover-bg);
	color: var(--mg-form-editor-hover-fg);
}

.mg-component.editEditing .mg-form-editor-controls {
	background: var(--mg-form-editor-selected-bg);
	color: var(--mg-form-editor-selected-fg);
}

.mg-form-editor-controls .mg-form-editor-controls-title {
	display: inline-block;
}
/* }}} */
</style>
