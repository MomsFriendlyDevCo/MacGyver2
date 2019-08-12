<script>
macgyver.register('mgPlaceholder', {
	title: 'Placeholder',
	icon: 'far fa-traffic-cone',
	category: 'General Decoration',
	preferId: true,
	config: {
		text: {type: 'mgText'},
		height: {type: 'mgNumber', default: '100%'},
		style: {
			type: 'mgChoiceButtons',
			default: 'mg-placeholder-box',
			iconSelected: 'far fa-fw fa-check',
			iconDefault: 'far fa-fw',
			enum: [
				{id: 'mg-placeholder-box', title: 'Lined box'},
				{id: 'mg-placeholder-construction', title: 'Construction area'},
			],
		},
	},
});

export default Vue.component('mgPlaceholder', {
	data: ()=> ({
		data: undefined,
	}),
	props: {
		config: Object,
		form: String,
	},
	created() {
		this.$macgyver.inject(this);
	},
});
</script>

<template>
	<div class="mg-placeholder" :class="$props.config.style" :style="`height: ${$props.config.height || 'auto'}`">
		<div v-if="$props.config.text" class="mg-placeholder-text">
			{{$props.config.text}}
		</div>
	</div>
</template>

<style>
.mg-placeholder {
	min-height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
}

/* Style: placeholder-box {{{ */
.mg-placeholder.mg-placeholder-box {
	border: 1px solid #000;
	background:
		linear-gradient(to top left,
			rgba(0,0,0,0) 0%,
			rgba(0,0,0,0) calc(50% - 0.8px),
			rgba(0,0,0,1) 50%,
			rgba(0,0,0,0) calc(50% + 0.8px),
			rgba(0,0,0,0) 100%),
		linear-gradient(to top right,
			rgba(0,0,0,0) 0%,
			rgba(0,0,0,0) calc(50% - 0.8px),
			rgba(0,0,0,1) 50%,
			rgba(0,0,0,0) calc(50% + 0.8px),
			rgba(0,0,0,0) 100%);
}

.mg-placeholder.mg-placeholder-box > .mg-placeholder-text {
	background: #FFF;
	border-radius: 10px;
	padding: 10px 15px;
}
/* }}} */

/* Style: placeholder-construction {{{ */
.mg-placeholder.mg-placeholder-construction {
	background: repeating-linear-gradient(45deg, #dfc458, #dfc458 10px, #666 10px, #666 20px);
}

.mg-placeholder.mg-placeholder-construction > .mg-placeholder-text {
	font-size: 20pt;
	color: #FFF;
	text-shadow: -2px -2px 1px #000, 2px -2px 1px #000, -2px 2px 1px #000, 2px 2px 1px #000;
}
/* }}} */
</style>
