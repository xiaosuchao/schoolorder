import Vue from 'vue'
import App from './App'
import store from './store/index'

/* app-only-begin */

import fly from './utils/fly'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$http = fly

/* app-only-end */

Vue.prototype.$store = store

const app = new Vue(App)
app.$mount()
