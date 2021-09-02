import Vue from "vue"
import App from "./App.vue"
import store from "./store"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(faArrowLeft, faArrowRight)

Vue.component("font-awesome-icon", FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
	store,
	render: (h) => h(App),
}).$mount("#app")
