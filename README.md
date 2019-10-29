MacGyver
========
Dynamic form widgets for Vue.

MacGyver is a form designer for Vue that works by being given a form definition and a data set.

[LIVE DEMO](https://momsfriendlydevco.github.io/macgyver2)


Example
-------
```html
<mg-form
	:data="{ // Populated as the control values change
	}"
	:config="{ // Our form specification
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
	}"
	@change="data = $event"
/>
```


API Methods
===========
MagGyver works by using Vue's template system to nest widgets with data binding.


Creating MacGyver widgets
-------------------------
Each MagGyver widget begins with `mg` and should be registered via `$macgyver.register()`.

```javascript
$macgyver.register('mgText', {
	title: 'Textbox',
	icon: 'fa fa-pencil-square-o',
	config: {
		placeholder: {type: 'mgText', help: 'Ghost text to display when the textbox has no value'},
	},
}));
```


$macgyver
---------
The main service / provider within Angular.

**NOTE:** `$macgyverProvider` and `$macgyver` are the same. The provider is available as an alias to allow registration of components during the Angular Config phase.


$macgyver.register(id, properties)
----------------------------------
Register a widget for use by name. Each id should begin with `mg` and be in camelCase form.

Widgets can contain the following meta properties:

| Property           | Type      | Default                    | Description                                                                                      |
|--------------------|-----------|----------------------------|--------------------------------------------------------------------------------------------------|
| `id`               | `string`  | (`id` arg if its provided) | Alternative way to provide an entire config if the `id` parameter is omitted                 |
| `config`           | `Object`  | *none*                     | Object detailing each optional property the widget can take as a `mgContainer` specification     |
| `icon`             | `string`  | *none*                     | The icon CSS class to use in the `mgFormEditor` UI                                               |
| `isContainer`      | `boolean` | `false`                    | Indicates that the widget can contain other widgets (under the `items` array)                    |
| `isContainerArray` | `boolean` | `false`                    | Addition to `isContainer` that indicates the widget will contain an array of rows (like a table) |
| `template`         | `string`  | `<COMPONENT_NAME/>`        | Rendering template to be used to draw the element                                                |
| `title`            | `string`  | The ID via `_.startCase()` | The human friendly title of the widget                                                           |
| `userPlaceable`    | `boolean` | `false`                    | Whether to hide the object from the user in the `mgFormEditor` UI                                |
| `shorthand`        | `array`   | `[]`                       | Other aliases the widget answers to in shorthand mode                                            |


$macgyver.inject(vm)
--------------------
Glue various MacGyver emitter handlers to a registered component.


$macgyver.neatenSpec(spec)
--------------------------
Attempt to neaten up a 'rough' MacGyver spec into a pristine one.
This function performs various sanity checks on nested elements e.g. checking each item has a valid ID and if not adding one.


$macgyver.widgets
-----------------
An object containing data on each valid MacGyver widget registered. If running on the front-end this is updated as new widgets register themselves. On the backend this uses the computed version located in `./dist/widgets.json`.
