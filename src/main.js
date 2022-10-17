import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCropper from 'vue-cropperjs'
import {i18n} from './i18n'

// Vue.use(VueI18n)
Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  VueCropper,
  render: h => h(App)
}).$mount('#app')
