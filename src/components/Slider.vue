<template>
	<div class="slider">
		<div class="mainImage">
			<VueMagnifier :src="activeImage" :src-large="zoomedActiveImage" />
		</div>
		<div class="images">
			<font-awesome-icon
				:icon="['fas', 'arrow-left']"
				class="arrow"
				@click="decreaseActiveImageIndex"
			/>
			<img
				v-for="(image, index) in images"
				:key="image.id"
				:src="image.thumbnailUrl"
				@click="setActiveImageIndex(index)"
			/>
			<font-awesome-icon
				:icon="['fas', 'arrow-right']"
				class="arrow"
				@click="increaseActiveImageIndex"
			/>
		</div>
	</div>
</template>

<script>
import VueMagnifier from "@/components/VueMagnifier"
export default {
	props: {
		images: {
			type: Array,
			required: true,
			validator(value) {
				if (value.length > 4) {
					value = value.splice(4, value.length - 4)
				}
				return true
			},
		},
	},
	components: { VueMagnifier },
	data() {
		return {
			zoomedActiveImage: this.images?.[0]?.url,
			activeImage: this.images?.[0]?.thumbnailUrl,
			activeImageIndex: 0,
		}
	},
	methods: {
		setActiveImage() {
			this.activeImage = this.images?.[this.activeImageIndex]?.thumbnailUrl
			this.zoomedActiveImage = this.images?.[this.activeImageIndex]?.url
		},
		setActiveImageIndex(index) {
			this.activeImageIndex = index
			this.setActiveImage()
		},
		decreaseActiveImageIndex() {
			if (this.activeImageIndex) {
				this.activeImageIndex--
			} else {
				this.activeImageIndex = this.images?.length - 1
			}
			this.setActiveImage()
		},
		increaseActiveImageIndex() {
			if (this.activeImageIndex === this.images?.length - 1) {
				this.activeImageIndex = 0
			} else {
				this.activeImageIndex++
			}
			this.setActiveImage()
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
	max-width: 400px;
	align-self: center;
}
.arrow {
	cursor: pointer;
	font-size: 30px;
	color: grey;
	align-self: center;
}
.images img {
	margin: 5px;
	cursor: pointer;
}
</style>
