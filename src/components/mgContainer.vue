<script>
/**
* MacGyver component loader
* This is a meta component that loads other dynamic components as an array
* @param {Object} config The config specification
* @param {array} config.items A collection of sub-item objects to display
* @param {string} [config.title] The title of the container to display
* @param {string} [config.layout="form"] The layout profile to use. ENUM: form = A standard horizontal form layout, card = a Bootstrap 4 card with header and footer, columns = vertically sorted column display
* @param {boolean} [config.items[].help] Optional help text to show under the element
* @param {boolean} [config.items[].showTitle=true] Whether to show the left-hand-side form title for the item
* @param {string} [config.items[].title] Optional title to display for the widget
* @param {string} config.items[].type The type of the object to render. This corresponds to a `mg*` component
*/

macgyver.register('mgContainer', {
	title: 'Container layout',
	icon: 'far fa-th-large',
	category: 'Layout',
	isContainer: true,
	preferId: false,
	config: {
		layout: {
			type: 'mgChoiceRadio',
			title: 'Layout profile',
			help: 'How to layout child elements',
			default: 'form',
			enum: [
				{id: 'form', title: 'Simple form layout'},
				{id: 'formFloating', title: 'Form with floating labels'},
				{id: 'card', title: 'Card based layout'},
				{id: 'columns', title: 'Vertical column layout'},
			],
		},
		showTitles: {type: 'mgToggle', default: true, help: 'Show titles for fields', showIf: "layout == 'form' || layout == 'card'"},
		columnHeaders: {type: 'mgToggle', default: false, help: 'Show column headers', showIf: "layout == 'columns'"},
		collapsable: {type: 'mgToggle', default: false, help: 'This card can be hidden', showIf: "layout == 'card'"},
		collapsed: {type: 'mgToggle', default: false, help: 'This card is collapsed by default', showIf: "layout == 'card'"},
		border: {type: 'mgToggle', default: true, help: 'Show a border around the container', showIf: "layout == 'columns'"},
	},
	configChildren: {
		help: {type: 'mgText', title: 'Help text', help: 'Optional help text for the item - just like what you are reading now'},
		showTitle: {type: 'mgToggle', default: true, title: 'Show Title', help: 'Whether to show the side title for this element'},
		title: {type: 'mgText', title: 'Title'},
		rowClass: {type: 'mgChoiceDropdown', title: 'Styling', help: 'Additional styling to apply to the widget', default: '', enum: [
			{id: '', title: 'Normal'},
			{id: 'mgContainerRowLarge', title: 'Large text'},
		]},
	},
});

export default Vue.component('mgContainer', {
	data: ()=> ({
		highlights: {}, // Lookup of extra classes to add to widgets
		localData: {}, // Lookup of immediate child data values, used when `$props.config.layout == 'formFloating'`
	}),
	props: {
		config: Object,
		form: String,
	},
	created() {
		this.$macgyver.inject(this);
	},
	mounted() {
		if (this.$props.config.collapsable) {
			var $card = $(this.$el).find('.card').first();

			$card.find('.card-header').first().on('click', ()=> {
				var $body = $(this.$el).find('.card-body');
				if ($card.hasClass('card-collapsed')) {
					$body.slideDown({complete: ()=> $card.removeClass('card-collapsed')});
				} else {
					$body.slideUp({complete: ()=> $card.addClass('card-collapsed')});
				}
			});
		}

		if (this.$props.config.layout == 'formFloating') {
			// When in floating mode we need to keep track of child data so we copy its value into our `localData` object lookup
			this.$macgyver.$forms[this.$props.form].$on('changeItem', v => { // Bind to parent form handler
				if (this.$props.config.items.some(item => item.$dataPath == v.path)) { // Is this widget one of our immediate children?
					this.$set(this.localData, v.path, v.value); // Copy its data against our local copy
				}
			});
		}
	},
});
</script>

<template>
	<div v-if="$props.config.layout == 'form' || $props.config.layout === undefined">
		<div v-for="(widget, widgetIndex) in $props.config.items" :key="widget.id" class="form-group row mgComponent" :class="[highlights[widgetIndex], widget.mgValidation == 'error' ? 'has-error' : '', widget.rowClass]">
			<label v-if="widget.showTitle || $props.config.showTitles" class="control-label text-left col-sm-3">
				{{widget.title}}
			</label>
			<div :class="widget.showTitle || $props.config.showTitles ? 'col-sm-9' : 'col-sm-12'">
				<mg-component :form="$props.form" :config="widget"/>
			</div>
			<div class="help-block" v-if="widget.help" :class="widget.showTitle || $props.config.showTitles ? 'col-sm-9 col-sm-offset-3' : 'col-sm-12'">{{widget.help}}</div>
		</div>
	</div>
	<div v-else-if="$props.config.layout == 'formFloating'">
		<div v-for="(widget, widgetIndex) in $props.config.items" :key="widget.id" class="form-group mgContainer-formFloating row mgComponent" :class="[highlights[widgetIndex], widget.mgValidation == 'error' ? 'has-error' : '', widget.rowClass]">
			<div class="col-12">
				<mg-component
					:form="$props.form"
					:config="widget"
					class="control-input"
					:class="!localData[widget.$dataPath] && 'blank'"
				/>
				<label v-if="$props.config.showTitles" class="control-label text-left col-sm-3">
					{{widget.title}}
				</label>
			</div>
			<div class="help-block" v-if="widget.help" :class="widget.showTitle || $props.config.showTitles ? 'col-sm-9 col-sm-offset-3' : 'col-sm-12'">{{widget.help}}</div>
		</div>
	</div>
	<div v-else-if="$props.config.layout == 'card'">
		<div class="card mg-container" :class="{'card-collapsable': $props.config.collapsable, 'card-collapsed': $props.config.collapsed}">
			<div class="card-header">{{$props.config.title}}</div>
			<div class="card-body">
				<div v-for="(widget, widgetIndex) in $props.config.items" :key="widget.id" class="form-group row mgComponent" :class="[highlights[widgetIndex], widget.mgValidation == 'error' ? 'has-error' : '', widget.rowClass]">
					<label v-if="widget.showTitle || $props.config.showTitles" class="control-label text-left col-sm-3">
						{{widget.title}}
					</label>
					<div :class="widget.showTitle || $props.config.showTitles ? 'col-sm-9' : 'col-sm-12'">
						<mg-component :form="$props.form" :config="widget"/>
					</div>
					<div class="help-block" v-if="widget.help" :class="widget.showTitle || $props.config.showTitles ? 'col-sm-9 col-sm-offset-3' : 'col-sm-12'">{{widget.help}}</div>
				</div>
			</div>
		</div>
	</div>
	<div v-else-if="$props.config.layout == 'columns'">
		<table class="mg-container" :class="$props.config.border ? 'table table-bordered' : 'mg-container-columns-no-border'" style="width: 100%">
			<thead v-if="$props.config.columnHeaders">
				<tr>
					<th v-for="widget in config.items" :key="widget.id">{{widget.title}}</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td v-for="(widget, widgetIndex) in $props.config.items" :key="widget.id" :class="[highlights[widgetIndex], widget.mgValidation == 'error' ? 'has-error' : '', widget.rowClass]">
						<mg-component :form="$props.form" :config="widget"/>
						<div class="help-block" v-if="widget.help">{{widget.help}}</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div v-else class="mg-container">
		<div class="alert alert-danger">
			Unsupported mgContainer layout "{{$props.config.layout || 'Unspecified'}}"
			<pre>{{$props.config}}</pre>
		</div>
	</div>
</template>

<style>
/* Card layout {{{ */
/* Collapsable card {{{ */
.mg-container.card.card-collapsable {
	transition: all 0.2s ease-in;
}

.mg-container.card.card-collapsable .card-header {
	cursor: pointer;
}

.mg-container.card.card-collapsable .card-header::after {
	font-family: "Font Awesome 5 Pro";
	content: '\f054';
	float: right;
	transition: transform 0.4s;
}

.mg-container.card.card-collapsable:not(.card-collapsed) .card-header::after {
	transform: rotate(90deg);
}


/* Collapsed card {{{ */
.mg-container.card.card-collapsable.card-collapsed {
	box-shadow: none;
	border-bottom: none;
	margin-bottom: 0px;
}

.mg-container.card.card-collapsable.card-collapsed .card-body {
	display: none;
}
/* }}} */
/* }}} */
/* }}} */

/* formFloating {{{ */
.mgContainer-formFloating > .col-12 {
	position: relative;
	line-height: 14px;
	margin: 0 0px;
	display: inline-block;
	width: 100%;
}

.mgContainer-formFloating > .col-12 > .control-input {
	height: 45px;
	padding-top: 8px;
	padding-bottom: 2px;
	padding-left: 2px;
	padding-right: 12px;
	font-size: 15px;
	line-height: 1.42857143;
	color: #333333;
	background-color: #ffffff;
	background-image: none;
	outline: none;
	/* border: 1px solid rgba(120, 120, 120, 0.5);
	*/
	border: none;
	border-bottom: 1px solid #bbb;
	-moz-box-shadow: none;
	-webkit-box-shadow: none;
	box-shadow: none;
	border-radius: 0;
	position: relative;
}

.mgContainer-formFloating > .col-12 > .control-input.blank + .control-label {
	transform: translateY(0px);
	color: #bbb;
	font-size: 15px;
	font-weight: 100;
	opacity: 1;
}

.mgContainer-formFloating > .col-12 > .control-input.control-input:focus + .control-label {
	transform: translateY(-21px);
	color: #66afe9;
	font-size: 14px;
	opacity: 1;
	font-weight: 100;
	background-color: white;
}

.mgContainer-formFloating > .col-12 > .control-label {
	color: #aaa;
	display: inline-block;
	font-size: 12px;
	position: absolute;
	z-index: 2;
	left: 2px;
	top: 16px;
	padding: 0 0px;
	pointer-events: none;
	background: white;
	transition: all 300ms ease;
	transform: translateY(-21px);
	font-weight: 500;
}
/* }}} */

/* Columns layout {{{ */
.mg-container.mg-container-columns-no-border th,
.mg-container.mg-container-columns-no-border td {
	padding: 5px;
}
/* }}} */

/* Misc utility types {{{ */
.mg-form .help-block {
	font-size: 80%;
	color: #6c757d !important;
}
/* }}} */
</style>
