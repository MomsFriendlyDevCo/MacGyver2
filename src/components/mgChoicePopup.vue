<script>
macgyver.register('mgChoicePopup', {
	title: 'Choice Popup',
	icon: 'fas fa-window',
	category: 'Choice Selectors',
	preferId: true,
	config: {
		enum: { // Each item is in the form {id, [title], [class], [classActive], [classInactive]}
			type: 'mgList',
			title: 'List items',
			default: ['Item One', 'Item Two', 'Item Three'],
		},
		required: {type: 'mgToggle', default: false, help: 'One choice must be selected'},
		popupTitle: {type: 'mgText', default: 'Select item', advanced: true},
		inactiveText: {type: 'mgText', default: 'Select item...', advanced: true},
		iconActive: {type: 'mgIcon', default: 'far fa-check', advanced: true},
		iconInactive: {type: 'mgIcon', default: 'far fa-ellipsis-h', advanced: true},
		classActive: {type: 'mgText', default: 'btn btn-primary', advanced: true},
		classInactive: {type: 'mgText', default: 'btn btn-default', advanced: true},
	},
	format: true, // FIXME: Not sure about this, what if we need to lookup the value by the enum ID?
});

export default Vue.component('mgChoicePopup', {
	data: ()=> ({
		data: undefined,
		activeTitle: undefined,
		enumIter: [],
	}),
	props: {
		config: Object,
		form: String,
	},
	methods: {
		select(id) {
			this.$prompt.macgyver({
				title: this.$props.config.popupTitle,
				form: {
					id: 'selected',
					type: 'mgChoiceButtons',
					enum: this.enumIter,
					classWrapper: 'list-group',
					itemClassActive: 'list-group-item active',
					itemClassInactive: 'list-group-item',
				},
				data: {
					selected: this.data,
				},
				buttons: [],
				onShow: ()=> {
					// Bind to the mg-form element, detect the first change and close the dialog
					this.$macgyver.$forms.promptMacGyver.$on('mgChange', ()=> setTimeout(()=> { // Timeout not really needed but it lets the button highlight before we close
						this.$prompt.$settings.$defer.resolve(this.$prompt.$settings.data);
						this.$prompt.close(true)
					}, 100));
				},
			})
				.then(form => this.$set(this, 'data', form.selected))
		},
	},
	created() {
		this.$macgyver.inject(this);
		this.$on('mgValidate', reply => {
			if (this.$props.config.required && !this.data) return reply(`${this.$props.config.title} is required`);
		});
	},
	watch: {
		data() {
			if (this.data && this.enumIter.length) {
				var activeItem = this.enumIter.find(e => e.id == this.data);
				this.$set(this, 'activeTitle', activeItem ? activeItem.title : '');
			}
		},
		'$props.config.enumUrl': {
			immediate: true,
			handler() {
				if (!this.$props.config.enumUrl) return;
				this.$macgyver.fetch(this.$props.config.enumUrl, {
					type: 'array',
					mappings: {
						id: {required: true},
						title: {required: true},
					},
				})
					.tap(data => console.log('mgPopup got feed', data))
					.then(data => this.$set(this.$props.config, 'enum', data))
			},
		},
		'$props.config.enum': {
			immediate: true,
			handler() {
				if (_.isArray(this.$props.config.enum) && _.isString(this.$props.config.enum[0])) { // Array of strings
					this.enumIter = this.$props.config.enum.map(i => ({id: _.camelCase(i), title: i}));
				} else if (_.isArray(this.$props.config.enum) && _.isObject(this.$props.config.enum[0])) { // Collection
					this.enumIter = this.$props.config.enum;
				}
			},
		},
	},
});
</script>

<template>
	<div class="mg-choice-popup">
		<a
			:class="data ? $props.config.classActive : $props.config.classInactive"
			@click="select()"
		>
			<i :class="data ? $props.config.iconActive : $props.config.iconInactive"></i>
			{{this.data ? activeTitle : $props.config.inactiveText}}
		</a>
	</div>
</template>
