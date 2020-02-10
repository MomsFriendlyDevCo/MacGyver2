<script>
macgyver.register('mgHtml', {
	title: 'Static HTML',
	icon: 'fab fa-html5',
	category: 'General Decoration',
	preferId: false,
	config: {
		text: {type: 'mgCodeEditor', syntax: 'html'},
	},
});

export default Vue.component('mgHtml', {
	inject: ['$mgForm', '$mgFormEditor'],
	data() { return {
		data: undefined,
	}},
	props: {
		config: Object,
	},
	created() {
		this.$mgForm.inject(this);
	},
});
</script>

<template>
	<div>
		<div v-if="!$mgFormEditor" v-html="data || $props.config.text" class="form-control-static"/>
		<mg-form
			v-else
			:config="{
				id: 'content',
				type: 'mgCode',
				syntax: 'html',
				height: '500px',
			}"
			:data="{content: data === undefined ? $props.config.text : data}"
			@change="$mgFormEditor.setWidget(this, {text: $event.content})"
		/>
	</div>
</template>
