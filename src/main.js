import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vueSmoothScroll from 'vue2-smooth-scroll'

Vue.config.productionTip = false
Vue.use(vueSmoothScroll, {
  duration: 700,
  offset: -150,
  updateHistory: false,
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
