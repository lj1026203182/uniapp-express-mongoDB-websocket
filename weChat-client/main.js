import Vue from 'vue'
import App from './App'
import Request from './utils/request.js'

Vue.prototype.$Request = Request
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
