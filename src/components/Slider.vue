<template>
	<div class="slider">
		<div class="mainImage">
			<zoom-on-hover
				:img-normal="activeImageThumbnailUrl"
				:img-zoom="activeImageUrl"
			></zoom-on-hover>
			<!-- <img :src="activeImageUrl" /> -->
		</div>
		<div class="images">
			<img
				v-for="image in images"
				:key="image.id"
				:src="image.thumbnailUrl"
				@click="setActiveImage(image.url)"
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
			activeImageUrl: this.images[0].url,
			activeImageThumbnailUrl: this.images[0].thumbnailUrl,
		}
	},
	methods: {
		setActiveImage(url) {
			this.activeImageUrl = url
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
