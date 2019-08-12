<script>
macgyver.register('mgRestQuery', {
	title: 'ReST Query',
	icon: 'far fa-database',
	category: 'Data display',
	preferId: true,
	config: {
		class: {type: 'mgText', advanced: true},
		classActive: {type: 'mgText', default: 'btn btn-primary', advanced: true},
		classInactive: {type: 'mgText', default: 'btn btn-light', advanced: true},
		iconActive: {type: 'mgIcon', default: 'fa fa-database'},
		iconInactive: {type: 'mgIcon', default: 'far fa-plus'},
		textActive: {type: 'mgText', default: 'Edit query'},
		textInactive: {type: 'mgText', default: 'Add query'},
	},
	format: true,
});

export default Vue.component('mgRestQuery', {
	data: ()=> ({
		data: undefined,
	}),
	props: {
		config: Object,
		form: String,
	},
	computed: {
		codeDisplay() {
			if (!this.data) return '';
			return '<pre class="pre-sm">'
				+ JSON.stringify(this.data, null, '\t')
					.replace(/\n/g, '<br/>')
			+ '</pre>';
		},
	},
	created() {
		this.$macgyver.inject(this);
		this.$on('mgValidate', reply => {
			if (this.$props.config.required && !this.data) return reply(`${this.$props.config.title} is required`);
		});
	},
	methods: {
		editQuery() {
			Promise.resolve()
				.then(res => this.$prompt.macgyver({
					title: 'Edit query',
					// buttons: [], // We assume closing the dialog resolves so no need for buttons
					form: [
						{
							id: 'query',
							type: 'mgCodeEditor',
							showTitle: false,
						},
					],
					data: {
						query: this.data,
					},
				}))
				.then(form => this.data = JSON.parse(form.query));
		},
	},
});
</script>

<template>
	<a
		@click="editQuery()"
		class="btn btn-light"
		:class="data ? [data, $props.config.classActive || $props.config.class] : [$props.config.classInactive || $props.config.class]"
		v-tooltip="{content: codeDisplay, classes: 'text-left'}"
	>
		<i :class="data ? $props.config.iconActive : $props.config.iconInactive"/>
		{{data ? $props.config.textActive : $props.config.textInactive}}
	</a>
</template>
