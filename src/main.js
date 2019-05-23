import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import store from './store'

Vue.config.productionTip = false
export const BASE_URL = 'https://api.got.show/api'

export const eventBus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
