<script>
export default app.mgComponent('mgVideo', {
	meta: {
		title: 'Video',
		icon: 'far fa-film',
		category: 'Media',
		preferId: true,
	},
	props: {
		url: {type: 'mgUrl'},
		width: {type: 'mgText', default: '100%'},
		height: {type: 'mgText', default: '315px'},
		autoPlay: {type: 'mgToggle', default: false},
		showControls: {type: 'mgToggle', default: true},
		loop: {type: 'mgToggle', default: false},
	},
	computed: {
		videoResource() {
			if (!this.$props.url) {
				return {type: 'none'};
			} else if (/^https?:\/\/(www\.)?youtube\.com/.test(this.$props.url)) {
				return {
					type: 'youTube',
					url: this.$props.url
						+ `?autoplay=${this.$props.autoPlay ? '1' : '0'}`
						+ `&controls=${this.$props.showControls ? '1' : '0'}`
						+ `&loop=${this.$props.loop ? '1' : '0'}`
				}
			} else {
				return {type: 'unknown'};
			}
		},
	},
});
</script>

<template>
	<div class="mg-video" :style="{width: $props.width, height: $props.height}">
		<div
			v-if="!videoResource || videoResource.type == 'none'"
			class="alert alert-warning"
		>
			No video URL provided
		</div>
		<iframe
			v-if="videoResource.type == 'youTube'"
			width="100%"
			height="100%"
			:src="videoResource.url"
			frameborder="0"
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
		<div
			v-if="videoResource.type !== 'none' && videoResource.type !== 'youTube'"
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
