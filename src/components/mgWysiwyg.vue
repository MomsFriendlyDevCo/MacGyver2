<script>
import {VueEditor} from 'vue2-editor';

macgyver.register('mgWysiwyg', {
	title: 'WYSIWYG editor',
	icon: 'far fa-atlas',
	category: 'Complex Inputs',
	preferId: true,
	config: {
		placeholder: {type: 'mgText', help: 'Ghost text to display when there is no value'},
		required: {type: 'mgToggle', default: false},
	},
	format: true,
	shorthand: ['content'],
});

export default Vue.component('mgWysiwyg', {
	inject: ['$mgForm'],
	components: {VueEditor},
	data() {return {
		data: undefined,
	}},
	props: {
		config: Object,
	},
	created() {
		this.$mgForm.inject(this);
		this.$on('mgValidate', reply => {
			if (this.$props.config.required && !this.data) return reply(`${this.$props.config.title} is required`);
		});
	},
});
</script>

<template>
	<vue-editor
		v-model="data"
		:placeholder="$props.config.placeholder"
		class="mg-wysiwyg"
	/>
</template>
