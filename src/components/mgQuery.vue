<script>
macgyver.register('mgQuery', {
	title: 'Query',
	icon: 'far fa-filter',
	category: 'Data display',
	preferId: true,
	config: {
		/**
		* The spec is composed of an object lookup with the dotted notation path as the key and an object set of properties
		* @property {string} [type='string'] The type of the field, used to determine the component to use as the value input
		* @property {boolean} [showOperand=true] Whether to allow the user to select the operand ("Equals", "Is in" etc.) if false this only allows straight equality
		* @property {array <string>|array <object>|string} [enum] If the type is a string this restricts operand values to a list of selectable values. The value can also be one of the following meta values: '$FIELDS' - list all spec fields
		*/
		spec: {type: 'mgCodeEditor', syntax: 'json'},
	},
});

export default Vue.component('mgQuery', {
	data: ()=> ({
		data: undefined,
		subformData: {},
		queryComponent: [],
	}),
	props: {
		config: Object,
		form: String,
		spec: {type: String, default() { return {
			_id: {type: 'objectId'},
			name: {type: 'string'},
			username: {type: 'string'},
			email: {type: 'string'},
			'address.street': {type: 'string'},
			'address.city': {type: 'string'},
			'address.zip': {type: 'string'},
			'address.state': {type: 'string'},
			'address.country': {type: 'string'},
			phone: {type: 'string'},
			website: {type: 'string'},
			'company.name': {type: 'string'},
			role: {type: 'string', enum: ['user', 'admin', 'root']},
			status: {type: 'string', enum: ['pending', 'active', 'deleted']},
			lastLogin: {type: 'date'},

			sort: {type: 'string', showOperand: false, enum: '$FIELDS'},
			limit: {type: 'number', showOperand: false},
			skip: {type: 'number', showOperand: false},
		}}},
	},
	created() {
		this.$macgyver.inject(this);

		this.$watchAll([
			'$props.config.url',
			'$props.config.spec',
		], this.refresh, {immediate: true});
	},
	methods: {
		refresh() {
			// Calculate which fields we can use in enums
			var fieldsEnum = Object.keys(this.$props.spec)
				.map(key => ({
					id: key,
					title: _.startCase(key),
				}));


			/**
			* Populate enum values from a spec branch
			* Really this just deals with meta cases like '$FIELDS' (see spec definition for 'enum')
			* @param {Object} pathSpec The path branch specification
			* @returns {array} An mgChoice* compatible ENUM composed of {id, title}
			*/
			var populateEnum = pathSpec =>
				pathSpec.enum === '$FIELDS' ? fieldsEnum
					: pathSpec.enum;


			this.subformData = {};
			this.queryComponent = {
				type: 'mgContainer',
				layout: 'query',
				items: Object.keys(this.data)
					.map((path, pathIndex) => // Examine each path key
						Object.keys(typeof this.data[path] == 'object' ? this.data[path] : {$eq: this.data[path]}) // Examine each operand key
							.map((operand, operandIndex) => {
								var value = this.data[path][operand] || this.data[path];
								var pathSpec = this.spec[path] || {unknown: true, type: 'string'};

								var row = {
									type: 'mgContainer',
									layout: 'query-row',
									items: [
										{
											type: 'mgChoiceDropdown',
											enum: fieldsEnum,
											default: path,
										},
										{
											type: 'mgChoiceDropdown',
											enum: [
												...(['string', 'number'].includes(pathSpec.type) ? [
													{id: '$eq', title: 'Equals'},
													{id: '$ne', title: 'Does not equal'},
												] : []),

												...(pathSpec.type == 'date' ? [
													{id: '$eq', title: 'Is on'},
													{id: '$ne', title: 'Is not on'},
												] : []),

												{id: '$exists', title: 'Is present'},

												...(pathSpec.type != 'date' ? [
													{id: '$in', title: 'Is one of'},
													{id: '$nin', title: 'Is not one of'},
												] : []),

												...(pathSpec.type == 'number' ? [
													{id: '$gt', title: 'Is greater than'},
													{id: '$gte', title: 'Is equal or greater than'},
													{id: '$lt', title: 'Is less than'},
													{id: '$lte', title: 'Is equal or less than'},
												] : []),

												...(pathSpec.type == 'date' ? [
													{id: '$gt', title: 'Is after'},
													{id: '$gte', title: 'Is on or after'},
													{id: '$lt', title: 'Is before'},
													{id: '$lte', title: 'Is on or before'},
												] : []),
											],
											default: operand,
										},
									],
								};

								if (['$eq', '$ne'].includes(operand) && pathSpec.enum) {
									row.items.push({
										type: 'mgChoiceDropdown',
										enum: populateEnum(pathSpec),
										default: value,
									});
								} if (['$eq', '$ne'].includes(operand) && pathSpec.type == 'string') {
									row.items.push({type: 'mgText', default: value});
								} else if (['$eq', '$ne'].includes(operand) && pathSpec.type == 'number') {
									row.items.push({type: 'mgNumber', default: value});
								} else if (['$eq', '$ne'].includes(operand) && pathSpec.type == 'date') {
									row.items.push({type: 'mgDate', default: value});
								} else if (operand == '$exists') {
									row.items.push({
										type: 'mgToggle',
										onText: 'yes',
										offText: 'no',
										default: value,
									});
								} else if (operand == '$in' || operand == '$nin') {
									row.items.push({
										type: 'mgChoiceTags',
										default: value,
										enum: populateEnum(pathSpec),
									});
								} else {
									row.items.push({
										type: 'mgError',
										errorText: `Unsupported operand "${operand}"`,
									});
								}

								return row;
							})
					)
					.reduce((t, v) => t.concat(v), []) // Flatten
			};
		},
	},
});
</script>

<template>
	<div>
		<mg-form
			:form="`${$props.config.id}-subform`"
			:config="queryComponent"
			:data="subformData"
		/>
		<pre>Config: {{$props.config}}</pre>
		<pre>Data: {{data}}</pre>
		<pre>Subform Data: {{subformData}}</pre>
	</div>
</template>
