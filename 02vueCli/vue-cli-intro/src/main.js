import Vue from 'vue'
import App from './App'
import Home from './components/Home.vue'


Vue.component("lamp-comp", Home)

new Vue({
  el: '#app',
  render: h => h(App)
})
