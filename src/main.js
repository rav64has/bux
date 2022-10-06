import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCropper from 'vue-cropperjs'

Vue.config.productionTip = false

new Vue({
  router,
  VueCropper,
  render: h => h(App)
}).$mount('#app')
