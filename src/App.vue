<template>
	<div id="app">
		<Slider v-if="photos.length" :images="photos" />
	</div>
</template>

<script>
import Slider from "@/components/Slider.vue"
import { mapActions, mapState } from "vuex"

export default {
	name: "App",
	components: {
		Slider,
	},
	computed: {
		...mapState("photos", ["photos"]),
	},
	methods: {
		...mapActions("photos", ["fetchPhotos"]),
	},
	created() {
		this.fetchPhotos()
	},
}
</script>
