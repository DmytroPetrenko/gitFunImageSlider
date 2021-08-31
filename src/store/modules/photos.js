import axios from "axios"
const state = () => ({
	photos: [],
})

const getters = {}

const actions = {
	async fetchPhotos({ commit }) {
		try {
			const response = await axios.get(
				"https://picsum.photos/v2/list?page=1&limit=5"
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
