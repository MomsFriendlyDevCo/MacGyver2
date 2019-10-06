MacGyver
========
Dynamic form widgets for Angular.

MacGyver is a form designer for Angular that works by being given a form definition and a data set.

[LIVE DEMO](https://momsfriendlydevco.github.io/macgyver)


Example
-------
```javascript
angular
	.module('macgyver')
	.component('myComponent', {
		controller: function() {
			var $ctrl = this;

			$ctrl.data = {}; // This will be populated by MacGyver

			$ctrl.form = { // Our form specification
				type: "mgContainer",
				items: [
					{
						id: "textInput",
						type: "mgText",
						title: "Example Text",
					},
					{
						id: "toggleControl",
						type: "mgToggle",
						default: true,
					},
				],
			};
		},
		template: `
			<mg-form config="$ctrl.form" data="$ctrl.data"></mg-form>
		`,
	});
```

Editing a form
--------------
MacGyver also ships with a form editor. To use simply make a HTML page with the `mgFormEditor` component for an interactive UI.

```html
<mg-form-editor config="$ctrl.form" data="$ctrl.data"></mg-form-editor>
```



API Methods
===========
MagGyver works by using Angular's template system to nest widgets with two-way data binding.


Creating MacGyver widgets
-------------------------
Each MagGyver widget begins with `mg` and should be registered via `$macgyver.register()`.

```javascript
angular
	.module('macgyver')
	.config($macgyverProvider => $macgyverProvider.register('mgText', {
		title: 'Textbox',
		icon: 'fa fa-pencil-square-o',
		config: {
			placeholder: {type: 'mgText', help: 'Ghost text to display when the textbox has no value'},
		},
	}))
	.component('mgText', {
		bindings: {
			config: '<', // Config for this widget
			data: '=', // Data state for this widget
		},
		controller: function($macgyver, $scope) {
			var $ctrl = this;
			$macgyver.inject($scope, $ctrl);

			// Adopt default if no data value is given
			$scope.$watch('$ctrl.data', ()=> { if (_.isUndefined($ctrl.data) && _.has($ctrl, 'config.default')) $ctrl.data = $ctrl.config.default });

			// Optionally respond to validation requests
			$ctrl.validate = ()=> {
				if ($ctrl.config.required && !$ctrl.data) return `${$ctrl.config.title} is required`;
			};
		},
		template: `
			<input ng-model="$ctrl.data" type="text" class="form-control" placeholder="{{$ctrl.config.placeholder}}"/>
		`,
	})
```


$macgyver
---------
The main service / provider within Angular.

**NOTE:** `$macgyverProvider` and `$macgyver` are the same. The provider is available as an alias to allow registration of components during the Angular Config phase.


$macgyver.register(id, [properties])
------------------------------------
Register a widget for use by name. Each id should begin with `id` and be in camelCase form.

Widgets can contain the following meta properties:

| Property           | Type      | Default                    | Description                                                                                      |
|--------------------|-----------|----------------------------|--------------------------------------------------------------------------------------------------|
| `config`           | `Object`  | *none*                     | Object detailing each optional property the widget can take as a `mgContainer` specification     |
| `icon`             | `string`  | *none*                     | The icon CSS class to use in the `mgFormEditor` UI                                               |
| `isContainer`      | `boolean` | `false`                    | Indicates that the widget can contain other widgets (under the `items` array)                    |
| `isContainerArray` | `boolean` | `false`                    | Addition to `isContainer` that indicates the widget will contain an array of rows (like a table) |
| `template`         | `string`  | `<COMPONENT_NAME/>`        | Rendering template to be used to draw the element                                                |
| `title`            | `string`  | The ID via `_.startCase()` | The human friendly title of the widget                                                           |
| `userPlaceable`    | `boolean` | `false`                    | Whether to hide the object from the user in the `mgFormEditor` UI                                |
| `shorthand`        | `array`   | `[]`                       | Other aliases the widget answers to in shorthand mode                                            |


$macgyver.getForm($scope)
-------------------------
Finds and returns the component scope of the first available form under the given scope.


$macgyver.inject($scope, $ctrl)
-------------------------------
Function used by MacGyver components to register themselves against the standard event hooks during initialization.


$macgyver.getDataTree(root, [useDefaults=false])
------------------------------------------------
Generate an empty data entity from a given widget container. This function can be used to return the 'blank' form contents. If `useDefaults == true` the defaults for each widget will be set as the value.


$macgyver.neatenSpec(spec)
--------------------------
Attempt to neaten up a 'rough' MacGyver spec into a pristine one.
This function performs various sanity checks on nested elements e.g. checking each item has a valid ID and if not adding one.


$macgyver.specDataPrototype(spec)
---------------------------------
Create an empty data structure based on the specification. This is really just used to make sure that the deeply nested objects-within-objects (or arrays) are present when Angular tries to bind to them.


$macgyver.widgets
-----------------
An object containing data on each valid MacGyver widget registered. If running on the front-end this is updated as new widgets register themselves. On the backend this uses the computed version located in `./dist/widgets.json`.


API Events
==========
MacGyver components are also expected to optionally respond to the following events:

mg.get(event, register)
-----------------------
Used by MacGyver to 'ping' controls. Each control is expected to populate the register object with its ID and `$ctrl` instance.
This event is automatically responded to if the component calls `$macgyver.inject()` during its init cycle. If the component does not respond higher-level events such as validation will not be able to reach the component.


mg.getForm(event, form)
-----------------------
Used by MacGyver during `$macgyver.getForm()` calls to retrieve the forms under the scope.
The responding form is expected to populate the `form.form` object with its controller instance.
