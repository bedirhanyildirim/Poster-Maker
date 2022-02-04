import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/firebase/index'
import '@/assets/styles/reset.css'

Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
