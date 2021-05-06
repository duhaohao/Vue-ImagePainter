import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
// Vue.config.productionTip = false
// init commit
new Vue({
  render: h => h(App),
}).$mount('#app')
