<template>
	<div class="slider">
		<div class="mainImage">
			<zoom-on-hover :img-normal="activeImage" :img-zoom="zoomedActiveImage" />
		</div>
		<div class="images">
			<img
				v-for="image in images"
				:key="image.id"
				:src="image.thumbnailUrl"
				@click="setActiveImage(image)"
			/>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		images: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			zoomedActiveImage: this.images?.[0]?.url,
			activeImage: this.images?.[0]?.thumbnailUrl,
		}
	},
	methods: {
		setActiveImage(image) {
			this.activeImage = image.thumbnailUrl
			this.zoomedActiveImage = image.url
		},
	},
}
</script>

<style scoped>
.slider {
	display: flex;
	flex-direction: column;
	max-width: 750px;
}
.mainImage,
.images {
	display: flex;
	justify-content: center;
}
.mainImage {
	margin: 10px;
	cursor: none;
}
.images img {
	margin: 5px;
	cursor: pointer;
}
</style>
