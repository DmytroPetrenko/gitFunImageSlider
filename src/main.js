import Vue from "vue"
import App from "./App.vue"
import store from "./store"
import ZoomOnHover from "vue-zoom-on-hover"

Vue.use(ZoomOnHover)

Vue.config.productionTip = false

new Vue({
	store,
	render: (h) => h(App),
}).$mount("#app")
