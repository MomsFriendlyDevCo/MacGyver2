<script>
import mgFormEditorControls from './mgFormEditorControls';
/**
* mg-form-editor - Drag-and-drop form designer for MacGyver
*
* @param {Object} config mgForm compatible spec to edit
* @param {Object} [data] Optional data bindings for the form
* @param {array<Object>} [verbs] Verb edit mgForm to show in the small edit sidebar, defaults to selecting widgets / adding widgets buttons
* @param {string} [asideClassActive="mgfe-aside aside-right open"] Class to set all editing sidebars to when inactive
* @param {string} [asideClassInactive="mgfe-aside aside-right"] Class to set all editing sidebar to when inactive
* @param {string} [asideClassModeNormal="aside-sm"] Class to associate with the smaller toolkit display when editing
* @param {string} [asideClassModeAdding=""] Class to associate with the editing sidebar when adding
* @param {string} [asideClassModeEditing=""] Class to associate with the editing sidebar when editing
*
* @emits change Emitted as `(config)` on any item configuration change. WARNING, subscribing to this involves an entire deep copy of the config structure, subscribe to changeItem if possible
* @emits changeItem Emitted as `({path, value})` when a single config item changes, inexpensive compared to `change`
*/
export default Vue.component('mgFormEditor', {
	provide() { return {
		$mgFormEditor: this,
	}},
	components: {
		mgFormEditorControls,
	},
	data() { return {
		mode: 'normal', // ENUM: normal, editing, adding
		id: this.$macgyver.nextId(), // ID of the editing form item
		editing: undefined, // The active item we are editing
		widgetListMode: 'grid',

		// Asides
		editConfig: [],
		editData: {},

		// Add widget UI {{{
		addConfig: [
			{ // Header area
				type: 'mgContainer',
				layout: 'columns',
				border: false,
				rowClass: 'aside-header',
				showTitle: false,
				items: [
					{type: 'mgHeading', text: 'Add widget'},
					{
						type: 'mgContainer',
						layout: 'columns',
						border: false,
						showTitle: false,
						rowClass: 'aside-actions',
						items: [
							{type: 'mgButton', action: 'resetMode', text: '', icon: '', class: 'btn btn-link btn-xs far fa-times'},
						],
					},
				],
			},
			{ // Body area
				type: 'mgContainer',
				layout: 'form',
				rowClass: 'aside-body',
				showTitles: false,
				items: [
					{
						id: 'addType',
						type: 'mgChoiceButtons',
						title: 'Widget type to add',
						classWrapper: '',
						itemClassActive: 'btn btn-primary',
						itemClassInactive: 'btn btn-light',
						enum: _(this.$macgyver.widgets)
							.map((w, k) => ({
								id: k,
								tooltip: `${w.title} (${k})`,
								classActive: `btn btn-primary m-1 ${w.icon} fa-fw`,
								classInactive: `btn btn-light m-1 ${w.icon} fa-fw`,
							}))
							.sortBy('tooltip')
							.value(),
					},
				],
			},
		],
		addData: {},
		// }}}
	}},
	props: {
		data: Object,
		config: Object,
		asideClassActive: {type: String, default: 'mgfe-aside aside-right open'},
		asideClassInactive: {type: String, default: 'mgfe-aside aside-right'},
		asideClassModeNormal: {type: String, default: 'aside-sm'},
		asideClassModeAdding: {type: String, default: ''},
		asideClassModeEditing: {type: String, default: ''},
		generalVerbs: {
			type: Array,
			default() {
				return [
					{
						type: 'mgButton',
						action: "resetMode()",
						class: 'btn btn-primary',
						icon: 'fa fa-mouse-pointer fa-fw',
						showTitle: false,
						tooltip: {content: 'Select widgets to edit', placement: 'left'},
					},
					{
						type: 'mgButton',
						action: "setMode('adding')",
						class: 'btn btn-light',
						icon: 'far fa-plus fa-fw',
						showTitle: false,
						tooltip: {content: 'Add a new widget', placement: 'left'},
					},
				];
			},
		},
	},
	mounted() {
		this.$refs.form.$on('mgContainer.click', (container, componentIndex, e) => {
			e.stopPropagation();
			e.preventDefault();
			this.editWidget(container.$refs[`child-${componentIndex}`][0]);
		});

		this.$refs.form.$on('mgContainer.mouseEnter', (container, componentIndex, e) => {
			container.$set(container.highlights, componentIndex, (container.highlights[componentIndex] || []).concat(['editHover']));
		});

		this.$refs.form.$on('mgContainer.mouseLeave', (container, componentIndex, e) => {
			container.$set(container.highlights, componentIndex, (container.highlights[componentIndex] || []).filter(c => c != 'editHover'));
		});
	},
	methods: {
		/**
		* Stop editing / adding and return to regular mode
		* @param {string} [mode="normal"] Mode to switch to
		*/
		setMode(mode = 'normal') {
			// Deselect the existing item (if we have one)
			if (this.editing) {
				this.setComponentHighlight(this.editing, []);
				this.editing = undefined;
			}

			this.$set(this, 'mode', mode);
			return true; // Signal to mgForm that we have handled this action
		},


		/**
		* Delete the active widget
		*/
		deleteWidget() {
			if (!this.editing) {
				this.$macgyver.notify.warn('No widget selected to delete'); // Not editing anyway
			} else {
				this.removeWidget(this.editing.$props.config.$specPath);
			}

			return true; // Signal to mgForm that we have handled this action
		},


		/**
		* Set the component.highlight[index] to the given list of CSS classes
		* @param {VueController} component The VueController to set the highlight of within its mgContainer
		* @param {array<string>} classes Array of string classes to set
		*/
		setComponentHighlight(component, classes) {
			if (!_.isArray(classes)) throw new Error('setComponentHighlight must be passed an array');

			var container = false;
			component.$emit.up('mgIdentify', component => {
				if (!container && component.$props.config.type == 'mgContainer') container = component;
			});
			if (!container) return console.warn('[mgFormEditor] setComponentHighlight component failed to find enclosing container', {component});

			var childOffset = container.findChildIndex(component);
			if (childOffset === false) return console.warn('[mgFormEditor]', 'Cannot locate component within container', {container, component});

			console.log('Set container offset', childOffset, '=', classes);
			container.$set(container.highlights, childOffset, classes);
		},


		/**
		* Edit a widget by its specPath or component
		* @param {VueComponent} component The VueComponent to edit either as a Vue component or lodash compatible path
		*/
		editWidget(component) {
			var component; // The Vue component from the widget path
			if (!_.isObject(component) || !component._uid) throw new Error('editWidget() requires a VueComponent');

			this.setMode();

			this.$set(this, 'editing', component);
			this.$set(this, 'mode', 'editing');

			this.setComponentHighlight(component, ['editEditing']);

			var widget = this.$macgyver.widgets[component.$props.config.type];
			if (widget) {
				this.$set(this, 'editConfig', [
					{ // Header area
						type: 'mgContainer',
						layout: 'columns',
						border: false,
						rowClass: 'aside-header',
						showTitle: false,
						items: [
							{id: 'metaIcon', type: 'mgIcon'},
							{id: 'id', type: 'mgText', placeholder: 'No ID'},
							{
								type: 'mgContainer',
								layout: 'columns',
								border: false,
								showTitle: false,
								rowClass: 'aside-actions',
								items: [
									{type: 'mgButton', action: 'deleteWidget', class: 'btn btn-link btn-link-danger btn-xs', icon: 'far fa-trash', tooltip: 'Delete this widget'},
									{type: 'mgButton', action: 'setMode', text: '', icon: '', class: 'btn btn-link btn-xs far fa-times'},
								],
							},
						],
					},
					{ // Body area
						type: 'mgContainer',
						layout: 'form',
						rowClass: 'aside-body',
						showTitle: false,
						items: _.map(widget.config, (v, k) => _.set(v, 'id', k)),
					},
				]);
				this.$set(this, 'editData',
					_(widget.config)
						.pickBy((v, k) => _.has(widget.config, k))
						.mapValues((v, k) => _.get(component.$props.config, k) || _.get(widget.config, 'default'))
						.set('id', _.get(component.$props, 'config.id', ''))
						.set('metaIcon', widget.icon)
						.value()
				);
			} else {
				this.$macgyver.notify.warn(`Cannot edit unknown widget "${component.$props.config.type}"`);
				this.setMode();
			}
		},


		/**
		* Change the value of a nested config path
		* @param {string} path The dotted / array notation path to mutate
		* @param {*} value The value to set, if undefined the key is removed
		*/
		mutatePath(path, value) {
			// Only bother cloning the entire object if something is listening to 'change'
			if (this.$emit.hasListeners('change')) {
				var configCopy = _.cloneDeep(this.config);
				this.$setPath(configCopy, path, value);
				this.$emit('change', configCopy);
			}

			this.$emit('changeItem', path, value);
		},

		
		/**
		* Insert a widget at a given path
		* @param {Object} widget The widget to insert
		* @param {Object} [options] Additional options
		* @param {string|array} [options.specPath] The lodash notation specPath to target instead of the last element on the form
		* @param {string} [options.orientation='after'] Where to insert. ENUM: 'before', 'after'
		* @param {boolean} [options.useContainer=true] If appending, try and fit the new widget within the last container if one exists
		* @param {boolean} [options.allocateTitle=true] Try to allocate a title if not supplied
		* @param {boolean} [options.allocateId=true] Try to allocate an ID if not supplied and the widget has `preferId`
		*/
		insertWidget(widget, options) {
			var settings = {
				specPath: undefined,
				orientation: 'after',
				useContainer: true,
				allocateTitle: true,
				allocateId: true,
				...options,
			};

			// options.allocateTitle / settings.alloacteId {{{
			if (
				widget.type // Know the type
				&& ( // A field we want is missing
					(settings.allocateTitle && !widget.title)
					|| (settings.allocateId && !widget.id)
				)
			) {
				var widgetOffset = // Compute how many of this widget are on the form
					this.$macgyver.flatten(this.$props.config, {want: 'array'}).reduce((offset, widget) =>
						widget.type == this.addData.addType ? offset + 1 : offset
					, 0);

				if (settings.allocateTitle && !widget.title) widget.title =
					this.$macgyver.widgets[this.addData.addType].title
					+ String(widgetOffset == 0 ? '' : widgetOffset);

				if (settings.allocateId && !widget.id) widget.id =
					this.addData.addType
					+ String(widgetOffset == 0 ? '' : widgetOffset);
			}
			// }}}

			if (settings.specPath) { // Insert relative to another widget
				var targetPath = _.isString(settings.specPath) ? ['config'].concat(settings.specPath.split('.')) : `config.${settings.specPath}`;
				var targetParent = _.get(this.$props, targetPath.slice(0, -1));
				var targetIndex = targetPath.slice(-1)[0];
				if (options.orientation == 'before' && targetIndex > 0) targetIndex--;

				targetParent.splice(targetIndex, 0, widget);
			} else if ( // Insert within container?
				settings.useContainer
				&& this.$props.config
				&& this.$props.config.items.length
				&& this.$props.config.items.slice(-1)[0].type == 'mgContainer'
			) {
				this.$props.config.items.slice(-1)[0].items.push(widget);
			} else { // Blind insert as last item
				console.log('FIXME: Untested - insert last', widget);
				this.$props.config.items.push(widget);
			}

			this.$emit.down('mgForm.rebuild'); // Tell the mgForm under us to rebuild itself
		},


		/**
		* Remove a widget by its specPath
		* @param {string|array} specPath The lodash notation specPath to remove
		*/
		removeWidget(specPath) {
			var widgetPath = _.isString(specPath) ? ['config'].concat(specPath.split('.')) : `config.${specPath}`;
			var widgetGrandParent = _.get(this.$props, widgetPath.slice(0, -2));
			var widgetGrandParentIndex = widgetPath.slice(-2, -1)[0];
			var widgetParent = _.get(this.$props, widgetPath.slice(0, -1));
			var widgetTargetIndex = widgetPath.slice(-1)[0];

			if (!_.isArray(widgetParent)) throw 'Widget parent is not an array';

			this.$set(widgetGrandParent, widgetGrandParentIndex, widgetParent.filter((v, k) => k != widgetTargetIndex));

			if (_.get(this, ['editing', '$props', 'config', '$specPath']) == specPath) this.setMode(); // User editing this widget - reset back to normal mode

			this.$emit.down('mgForm.rebuild'); // Tell the mgForm under us to rebuild itself
		},

		rawEdit() {
			this.$prompt.macgyver({
				title: 'Template JSON',
				form: {
					id: 'code',
					type: 'mgCode',
					syntax: 'json',
					value: this.value,
				},
			})
				.then(form => this.$set(this, 'config', JSON.parse(form.code)))
		},
	},
});
</script>

<template>
	<div class="mg-form-editor">
		<!-- Aside normal mode {{{ -->
		<aside :class="[mode == 'normal' ? $props.asideClassActive : $props.asideClassInactive, $props.asideClassModeNormal]">
			<mg-form
				:form="`${id}-normal`"
				:config="$props.generalVerbs"
				:actions="{setMode, setMode}"
			/>
		</aside>
		<!-- }}} -->
		<!-- Aside widget library (add widget) {{{ -->
		<aside :class="[mode == 'adding' ? $props.asideClassActive : $props.asideClassInactive, $props.asideClassModeAdding]">
			<mg-form
				ref="formAdd"
				:config="addConfig"
				:data="addData"
				:actions="{setMode}"
			/>
		</aside>
		<!-- }}} -->
		<!-- Aside item editor (edit widget) {{{ -->
		<aside :class="[mode == 'editing' ? $props.asideClassActive : $props.asideClassInactive, $props.asideClassModeEditing]">
			<mg-form
				v-if="editing"
				:form="`${id}-edit`"
				:config="editConfig"
				:data="editData"
				:actions="{setMode, deleteWidget}"
				@changeItem="mutatePath(`${editing.config.$specPath}.${$event.path}`, $event.value)"
			/>
		</aside>
		<!-- }}} -->

		<!-- Display form {{{ -->
		<mg-form
			ref="form"
			:config="$props.config"
			:data="$props.data"
		/>
		<!-- }}} -->
	</div>
</template>

<style>
/* Variables {{{ */
:root {
	--mg-form-editor-selected-bg: #007bff;
	--mg-form-editor-selected-fg: #fff;;
	--mg-form-editor-hover-bg: #77b9ff;
	--mg-form-editor-hover-fg: #fff;
}
/* }}} */

/* Aside styles - .mgfe-aside {{{ */
.mgfe-aside {
	transition: transform 0.2s ease-out;
}

.mgfe-aside .mg-form {
	margin: 0;
}

.mgfe-aside.aside-right.open.open { /* Silly hack to force the transform when open (overrides .asign-sm in priority) */
	transform: translateX(0px);
}

.mgfe-aside.aside-right {
	position: fixed;
	top: 0px;
	right: 0px;
	bottom: 0px;
	background: #FFF;
	z-index: 100;
	box-shadow: 0 1px 40px rgba(0,0,0,.3);
	width: 350px;
	transform: translateX(380px);
}

/* .mgfe-aside-sm {{{ */
.mgfe-aside.aside-right.aside-sm {
	width: 40px;
	transform: translateX(50px);
	top: calc(50% - 30px); /* Approx middle of the screen */
	bottom: inherit;
	border-radius: 50px;
}

.mgfe-aside.aside-right.aside-sm .form-group {
	margin: 0;
}

/* Remove BS padding from sub-elements */
.mgfe-aside.aside-right.aside-sm .form-group [class*="col-"] {
	padding: 0;
}
/* }}} */

/* Headers {{{ */
.mgfe-aside .aside-header {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	border-bottom: 1px solid #e9ecef;
	margin: 0;
}

.mgfe-aside .aside-header h4 {
	flex-grow: 1;
}

.mgfe-aside .aside-header legend.form-control-static {
	border-bottom: none;
	font-size: 17pt;
}

.mgfe-aside .aside-header .close {
	color: #5e5e5e;
}

.mgfe-aside .aside-header .close:hover {
	color: #000;
}

.mgfe-aside .aside-header .close::after {
	display: inline-block;
	font-family: 'Font Awesome 5 Pro';
	font-weight: 900;
	content: "\f00d";
}
/* }}} */

/* Actions {{{ */
.mgfe-aside .aside-actions {
	justify-self: flex-end;
	margin-right: 10px;
}

.mgfe-aside .aside-actions .btn-group {
	border: none;
	box-shadow: none;
}

.mgfe-aside .aside-actions a {
	padding: 8px;
	font-size: 125%;
}
/* }}} */

/* Body {{{ */
.mgfe-aside .aside-body {
	margin-left: 0;
	margin: 10px 0;

	/* Body scrolling */
	overflow: auto;
	height: calc(100vh - 100px);
}
/* }}} */
/* }}} */

/* Component highlighting {{{

/* Highlight applied to active elements inside an mgContainer */
.mg-form-editor-target {
	border: 2px solid var(--blue);
	border-radius: 5px;
	position: relative;
	top: -4px;
	left: -4px;
	padding: 2px;
}

.mg-form-editor-drop-target {
}

.mg-form-editor-drop-target-before {
	border-top: 4px dashed var(--blue);
}

.mg-form-editor-drop-target-after {
	border-bottom: 4px dashed var(--blue);
}
/* }}} */

/* Drag + Drop {{{ */
body.mg-form-editor-dragging * {
	cursor: grabbing;
}

#mg-form-editor-drag {
	display: block;
	z-index: 1000;
	position: absolute;
	top: -10000px;
	left: -10000px;
	min-width: 160px;
	height: 40px;
	border-radius: 5px;
	background: #2196F3;
	box-shadow: 1px 1px 4px rgba(0,0,0,.3);
	padding: 10px;
	color: #FFF;
}

#mg-form-editor-drag > i {
	margin-right: 5px;
}
/* }}} */

/* Misc fixes {{{ */
/* Buttons that are also fixed with look weird */
.mg-form-editor .btn.fa-fw {
	width: 2.30em;
	padding: 4px 2px !important;
}
/* }}} */
</style>
