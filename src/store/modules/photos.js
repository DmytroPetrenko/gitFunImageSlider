import axios from "axios"
const state = () => ({
	photos: [],
})

const getters = {}

const actions = {
	async fetchPhotos({ commit }) {
		try {
			const response = await axios.get(
				"https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10"
			)
			commit("initPhotos", response.data)
		} catch (error) {
			console.log(error)
		}
	},
}

const mutations = {
	initPhotos(state, data) {
		state.photos = data
	},
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
}
