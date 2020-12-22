import Vue from 'vue'

import App from './App.vue'
// import Mxui from '../packages'
import Mxui from 'mxui-ui'
import 'mxui-ui/dist/mxui-ui.css'

Vue.use(Mxui)

new Vue({
  render: h => h(App)
}).$mount('#app')