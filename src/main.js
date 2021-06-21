import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from"vue-router"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import LoginComponent from "./components/Login.vue"
import ChatComponent from "./components/ChatBox.vue"



Vue.config.productionTip = false


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: LoginComponent },
  { path: '/chat', component: ChatComponent },
]

const router = new VueRouter({ routes})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

Vue.prototype.$axios = axios