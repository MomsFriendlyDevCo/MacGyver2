<script lang="js">
import Debug from '@doop/debug';
const $debug = Debug('mgWysiwyg').enable(false);

// FIXME: Erroneous event stomps content with '<p>\n\t\t\t\t\t</p><p><br></p><p>\n\t\t\t\t</p>'
import {VueEditor} from 'vue2-editor';

export default app.mgComponent('mgWysiwyg', {
	meta: {
		title: 'WYSIWYG editor',
		icon: 'far fa-atlas',
		category: 'Complex Inputs',
		preferId: true,
		shorthand: ['content'],
	},
	components: {VueEditor},
	props: {
		title: {type: 'mgText'},
		placeholder: {type: 'mgText', help: 'Ghost text to display when there is no value'},
		required: {type: 'mgToggle', default: false},
	},
	created() {
		this.$debug = $debug;

		// TODO: Wait for the first "@input" event and then initialise with actual content to work-around vue2-editor bad update?

		this.$on('mgValidate', reply => {
			if (this.$props.required && !this.data) return reply(`${this.$props.title} is required`);
		});
	},
});
</script>

<template>
	<div class="mg-wysiwyg">
		<vue-editor
			:placeholder="$props.placeholder"
			v-model="data"
		/>

		<div v-if="$debug.$enabled" class="card">
			<div class="card-header">
				Raw mgWysiwyg data
				<i class="float-right fas fa-debug fa-lg" v-tooltip="'Only visible to users with the Debug permission'"/>
			</div>
			<div class="card-body">
				<pre>{{$data}}</pre>
				<pre>{{$props}}</pre>
			</div>
		</div>
	</div>
</template>
