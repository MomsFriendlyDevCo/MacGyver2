export default {
	data() { return {
		enumIter: [],
	}},
	props: {
		enumSource: {
			type: 'mgChoiceButtons',
			foo: 'bar',
			default: 'list',
			enum: ['list', 'url'],
			default: 'list',
			help: 'Where to populate the list data from'
		},
		enum: {
			type: 'mgTable',
			title: 'List items',
			showIf: 'enumSource == "list"',
			items: [
				{id: 'id', type: 'mgText', required: true},
				{id: 'title', type: 'mgText', required: true},
				{id: 'icon', type: 'mgIcon'},
			],
		},
		enumUrl: {
			type: 'mgUrl',
			vueType: ['string', 'object'],
			showIf: 'enumSource == "url"',
			help: 'Data feed URL to fetch choice values from'
		},
		optionsPath: {
			type: "mgText",
			default: "",
			help: "Path within data for options array",
		},
		optionKeyPath: {
			type: "mgText",
			default: "id",
			help: "Path within data for options key",
		},
		optionLabelPath: {
			type: "mgText",
			default: "title",
			help: "Path within data for options label",
		},
		optionIconPath: {
			type: "mgText",
			default: "icon",
			help: "Path within data for options icon",
		},
	},
	computed: {
		options() {
			return _.get(this.enumIter, this.$props.optionsPath, this.enumIter);
		},
	},
	methods: {
		/**
		 * Search for an enum option given a key
		 * @param {String, Number} key
		 */
		findOptionByKey(key) {
			return this.options.find(option => this.getOptionKey(option) === key);
		},

		/**
		* Retrieve option key based on path specified in properties.
		* @param {Object} option The selected option within enum
		*/
		getOptionKey(option) {
			return _.get(option, this.$props.optionKeyPath, '');
		},

		/**
		* Retrieve option label based on path specified in properties.
		* @param {Object} option The selected option within enum
		*/
		getOptionLabel(option) {
			return _.get(option, this.$props.optionLabelPath, '');
		},

		/**
		* Retrieve option icon based on path specified in properties.
		* @param {Object} option The selected option within enum
		*/
		getOptionIcon(option) {
			return _.get(option, this.$props.optionLabelPath, '');
		},
	},
	created() {
		this.$watch('$props.enumUrl', ()=> {
			if (!this.$props.enumUrl) return;
			this.$macgyver.utils.fetch(this.$props.enumUrl, {
				type: 'raw',
			})
				.then(data => this.setEnum(data))
		}, {immediate: true});

		this.$watchAll(['$props.enum', '$data.data'], ()=> {
			// FIXME: Could check `.every` for strings
			if (_.isArray(this.$props.enum) && _.isString(this.$props.enum[0])) { // Array of strings
				if (_.isFunction(this.setEnum)) {
					this.setEnum(this.$props.enum.map(i => ({id: _.camelCase(i), title: i})));
				} else {
					this.enumIter = this.$props.enum.map(i => ({id: _.camelCase(i), title: i}));
				}
			} else if (_.isArray(this.$props.enum) && _.isObject(this.$props.enum[0])) { // Collection
				if (_.isFunction(this.setEnum)) {
					this.setEnum(this.$props.enum);
				} else {
					this.enumIter = this.$props.enum;
				}
			}
		}, {immediate: true});
	},
};