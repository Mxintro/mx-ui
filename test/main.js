import Vue from 'vue'

import App from './App.vue'
import Mxui from '../packages'

Vue.use(Mxui)

new Vue({
  render: h => h(App)
}).$mount('#app')