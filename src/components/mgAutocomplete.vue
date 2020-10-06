<script>
import VueSelect from "vue-select";
import "vue-select/dist/vue-select.css";

Vue.component("v-select", VueSelect);

export default Vue.mgComponent("mgAutocomplete", {
	meta: {
		title: "Autocomplete",
		icon: "far fa-chevron-circle-down",
		category: "Choice Selectors",
		preferId: true,
		shorthand: ["choice", "choose", "dropdown", "pick"],
	},
	data() {
		return {
			selected: [],
			enumIter: [],
		};
	},
	props: {
		enumSource: {
			type: "mgChoiceButtons",
			default: "list",
			enum: ["list", "url"],
			default: "list",
			help: "Where to populate the list data from",
		},
		enum: {
			type: "mgTable",
			title: "List items",
			showIf: 'enumSource == "list"',
			items: [
				{ id: "id", type: "mgText", required: true },
				{ id: "title", type: "mgText", required: true },
				{ id: "icon", type: "mgIcon" },
			],
		},
		enumUrl: {
			type: "mgUrl",
			vueType: ["string", "object"],
			showIf: 'enumSource == "url"',
			help: "Data feed URL to fetch choice values from",
		},
		placeholder: {
			type: "mgText",
			help: "Ghost text to display when there is no value",
		},
		required: {
			type: "mgToggle",
			default: false,
			help: "One choice must be selected",
		},
		focus: {
			type: "mgToggle",
			default: false,
			help: "Auto-focus the element when it appears on screen",
		},

		/**
		* Tells vue-select what key to use when generating option
		* labels when each `option` is an object.
		* @type {String}
		*/
		label: {
			type: String,
			default: "label",
		},

		/**
		* Callback to generate the label text. If {option}
		* is an object, returns option[this.label] by default.
		*
		* Label text is used for filtering comparison and
		* displaying. If you only need to adjust the
		* display, you should use the `option` and
		* `selected-option` slots.
		*
		* @type {Function}
		* @param  {Object || String} option
		* @return {String}
		*/
		getOptionLabel: {
			type: Function,
			default(option) {
				if (typeof option === "object") {
					if (!option.hasOwnProperty(this.label)) {
						return console.warn(
							`[vue-select warn]: Label key "option.${this.label}" does not` +
								` exist in options object ${JSON.stringify(
									option
								)}.\n` +
								"https://vue-select.org/api/props.html#getoptionlabel"
						);
					}
					return option[this.label];
				}
				return option;
			},
		},

		/**
		* Generate a unique identifier for each option. If `option`
		* is an object and `option.hasOwnProperty('id')` exists,
		* `option.id` is used by default, otherwise the option
		* will be serialized to JSON.
		*
		* If you are supplying a lot of options, you should
		* provide your own keys, as JSON.stringify can be
		* slow with lots of objects.
		*
		* The result of this function*must* be unique.
		*
		* @type {Function}
		* @param  {Object || String} option
		* @return {String}
		*/
		getOptionKey: {
			type: Function,
			default(option) {
				if (typeof option !== "object") {
					return option;
				}

				try {
					return option.hasOwnProperty("id")
						? option.id
						: sortAndStringify(option);
				} catch (e) {
					const warning =
						`[vue-select warn]: Could not stringify this option ` +
						`to generate unique key. Please provide'getOptionKey' prop ` +
						`to return a unique key for each option.\n` +
						"https://vue-select.org/api/props.html#getoptionkey";
					return console.warn(warning, option, e);
				}
			},
		},
	},
	created() {
		this.$on("mgValidate", (reply) => {
			if (this.$props.required && !this.data)
				return reply(`${this.$props.title} is required`);
		});

		// FIXME: No need to respond to changes during settings adjustments
		//this.$watch('$props.enumUrl', () => this.fetchEnum(), {immediate: true});

		/*
		this.$watch('$props.enum', ()=> {
			if (_.isArray(this.$props.enum) && _.isString(this.$props.enum[0])) { // Array of strings
				this.setEnum(this.$props.enum.map(i => ({id: _.camelCase(i), title: i})));
			} else if (_.isArray(this.$props.enum) && _.isObject(this.$props.enum[0])) { // Collection
				this.setEnum(this.$props.enum);
			}
		}, {immediate: true});
		*/
	},
	mounted() {
		if (this.$props.focus) {
			// NOTE: Focus selection does NOT work if DevTools is open in Chome
			this.$refs.select.searchEl.focus();
		}
	},
	methods: {
		changeHandler(e) {
			console.log("changeHandler", e);
			if (!e) return this.data = this.selected = null;
			this.data = this.getOptionKey(e);
			this.selected = e;
		},

		/**
		* Triggered when the search text changes.
		*
		* @param search {String} Current search text
		* @param loading {Function} Toggle loading class
		*/
		searchHandler(search, loading) {
			console.log("searchHandler", search);
			// TODO: Debounce
			loading(true);
			this.fetchEnum(search).then(() => loading(false));
		},

		/*
		// TODO: Default and move out a layer
		getOptionKey(e) {
			console.log("getOptionKey", e._id);
			return e._id;
		},

		getOptionLabel(e) {
			console.log("getOptionLabel", e.meta.title);
			return e.meta.title;
		},
		*/

		fetchEnum(query) {
			console.log("fetchEnum", this.$props.enumUrl, query);
			if (!this.$props.enumUrl || !query) return Promise.resolve();
			return this.$macgyver.utils
				.fetch(this.$props.enumUrl + query, { type: "array" })
				.then((data) => this.setEnum(data));
		},

		/**
		* Populate the enumIter object
		* This function also correctly populates the selected item (or the default)
		* Each item is assumed to have the spec `{id: String, title: String, icon?: String}`
		* @param {array<Object>} enumIter The new iterable enum
		*/
		setEnum(enumIter) {
			this.enumIter = enumIter;

			if (this.data) {
				this.selected =
					this.enumIter.find(
						(e) => this.getOptionKey(e) == this.data
					) || this.data;
			} else if (this.$props.default) {
				this.selected =
					this.enumIter.find(
						(e) => this.getOptionKey(e) == this.$props.default
					) || this.$props.default;
			}
		},
	},
});
</script>

<template>
	<v-select
		ref="select"
		:value="selected"
		label="title"
		:options="enumIter"
		:placeholder="$props.placeholder"
		:clearable="!$props.required"
		:get-option-key="$props.getOptionKey"
		:get-option-label="$props.getOptionLabel"
		@search="searchHandler"
		@input="changeHandler"
	>
		<template #selected-option="option">
			<!-- TODO: getOptionIcon -->
			<i v-if="option.icon" :class="option.icon" />
			{{ getOptionLabel(option) }}
		</template>
		<template #option="option">
			<i v-if="option.icon" :class="option.icon" />
			{{ getOptionLabel(option) }}
		</template>
	</v-select>
</template>
