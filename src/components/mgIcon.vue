<script>
macgyver.register('mgIcon', {
	title: 'Icon',
	icon: 'far fa-flag',
	category: 'Simple Inputs',
	preferId: true,
	config: {
		iconFallback: {type: 'mgIcon', default: 'far fa-info', help: 'The icon to use if non is selected'},
		required: {type: 'mgToggle', default: false},
		iconFeed: {type: 'mgText', default: '/api/webfonts/fa.json', advanced: true, help: 'The data source to import icon information', relative: true},
		class: {type: 'mgText', default: 'btn btn-light btn-circle', advanced: true},
		classActive: {type: 'mgText', advanced: true},
		classInactive: {type: 'mgText', advanced: true},
	},
	format: true,
});

export default Vue.component('mgIcon', {
	data: ()=> ({
		data: undefined,
	}),
	props: {
		config: Object,
		form: String,
	},
	created() {
		this.$macgyver.inject(this);
		this.$on('mgValidate', reply => {
			if (this.$props.config.required && !this.data) return reply(`${this.$props.config.title} is required`);
		});
	},
	methods: {
		selectIcon() {
			Promise.resolve()
				.then(()=> this.$macgyver.notify.loading(this._uid, true))
				.then(()=> this.$http.get(this.$props.config.iconFeed))
				.tap(()=> this.$macgyver.notify.loading(this._uid, false))
				.then(res => this.$macgyver.$prompt.macgyver({
					title: 'Select icon',
					buttons: [], // We're capturing the first click so we don't need confirm buttons
					form: [
						{
							id: 'class',
							type: 'mgChoiceButtons',
							showTitle: false,
							classWrapper: '',
							enum: res.data.map(icon => ({
								id: icon.class,
								class: `btn btn-icon-fixed ${icon.class} fa-fw`,
								classActive: `btn btn-primary btn-icon-fixed ${icon.class} fa-fw`,
							})),
						},
					],
					data: {
						class: this.data,
					},
					onShow: ()=> {
						// Bind to the mg-form element, detect the first change and close the dialog
						this.$macgyver.$forms.promptMacGyver.$on('mgChange', ()=> setTimeout(()=> { // Timeout not really needed but it lets the button highlight before we close
							this.$macgyver.$prompt.$settings.$defer.resolve(this.$macgyver.$prompt.$settings.data);
							this.$macgyver.$prompt.close(true)
						}, 100));
					},
				}))
				.then(form => this.data = form.class)
		},
	},
});
</script>

<template>
	<a
		@click="selectIcon()"
		class="btn btn-light"
		:class="data ? [data, $props.config.classActive || $props.config.class] : [$props.config.iconFallback, $props.config.classInactive || $props.config.class]"
	/>
</template>

<style>
.btn.btn-icon-fixed {
	box-shadow: none;
	width: 32px;
	height: 32px;
	padding: 7px 0;
}
</style>
