import Vue from 'vue'
import App from './App'
import inject from './plugins/inject'

Vue.config.productionTip = false

App.mpType = 'app'
Vue.use(inject)

const app = new Vue({
  ...App
})
app.$mount()
