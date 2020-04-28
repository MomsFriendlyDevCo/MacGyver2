<script>
export default Vue.mgComponent('mgHtml', {
	meta: {
		title: 'Static HTML',
		icon: 'fab fa-html5',
		category: 'General Decoration',
	},
	inject: {
		$mgForm: {from: '$mgForm'},
		$mgFormEditor: {from: '$mgFormEditor', default: false},
	},
	props: {
		text: {type: 'mgCodeEditor', syntax: 'html'},
	},
});
</script>

<template>
	<div>
		<div v-if="!$mgFormEditor" v-html="data || $props.text" class="form-control-static"/>
		<mg-form
			v-else
			:config="{id: 'content', type: 'mgWysiwyg'}"
			:data="{content: data === undefined ? $props.text : data}"
			@change="$mgFormEditor.mutatePath(`${config.$specPath}.text`, $event.content)"
		/>
	</div>
</template>
