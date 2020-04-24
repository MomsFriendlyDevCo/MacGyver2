<script>
macgyver.register('mgVideo', {
	title: 'Video',
	icon: 'far fa-film',
	category: 'Media',
	preferId: true,
	config: {
		url: {type: 'mgUrl', required: true},
		width: {type: 'mgText', default: '100%'},
		height: {type: 'mgText', default: '315px'},
		autoPlay: {type: 'mgToggle', default: false},
		showControls: {type: 'mgToggle', default: true},
		loop: {type: 'mgToggle', default: false},
	},
});

export default Vue.component('mgVideo', {
	inject: ['$mgForm'],
	data() {return {
		data: undefined,
	}},
	props: {
		config: Object,
	},
	computed: {
		videoResource() {
			if (!this.$props.config.url) {
				return {type: 'none'};
			} else if (/^https?:\/\/(www\.)?youtube\.com/.test(this.$props.config.url)) {
				return {
					type: 'youTube',
					url: this.$props.config.url
						+ `?autoplay=${this.$props.config.autoPlay ? '1' : '0'}`
						+ `&controls=${this.$props.config.showControls ? '1' : '0'}`
						+ `&loop=${this.$props.config.loop ? '1' : '0'}`
				}
			} else {
				return {type: 'unknown'};
			}
		},
	},
});
</script>

<template>
	<div class="mg-video" :style="{width: $props.config.width, height: $props.config.height}">
		<div
			v-if="videoResource.type == 'none'"
			class="alert alert-warning"
		>
			No video URL provided
		</div>
		<iframe
			v-else-if="videoResource.type == 'youTube'"
			width="100%"
			height="100%"
			:src="videoResource.url"
			frameborder="0"
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
		<div
			v-else
			class="alert alert-warning" 
		>
			Unsupported video URL
		</div>
	</div>
</template>

<style>
.mg-video .alert {
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
}
</style>
