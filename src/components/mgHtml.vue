<script lang="js">
import Debug from '@doop/debug';
const $debug = Debug('mgHtml').enable(false);

export default app.mgComponent('mgHtml', {
	meta: {
		title: 'Static HTML',
		icon: 'fab fa-html5',
		category: 'General Decoration',
	},
	props: {
		// TODO: Refactor "text" to "html" or "contents"
		// FIXME: Replace with "mgWysiwyg" once it is working again
		//text: {type: 'mgWysiwyg', syntax: 'html'},
		text: {type: 'mgCode', convert: false, syntax: 'html'},
	},
	created() {
		this.$debug = $debug;
	},
});
</script>

<template>
	<div>
		<div v-html="$props.text" class="form-control-static"/>

		<div v-if="$debug.$enabled" class="card">
			<div class="card-header">
				Raw mgHtml data
				<i class="float-right fas fa-debug fa-lg" v-tooltip="'Only visible to users with the Debug permission'"/>
			</div>
			<div class="card-body">
				<pre>{{$data}}</pre>
				<pre>{{$props}}</pre>
			</div>
		</div>
	</div>
</template>
