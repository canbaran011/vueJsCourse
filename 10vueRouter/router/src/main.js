import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history', //hash default
  scrollBehavior(to, from, savedPosition) { //savedPos geri tusuna basinca alacagi pozisyon
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
});

router.beforeEach( (to,from,next) => {

console.log("<<<global olarak kontrol>>>");

  next(); // {name yada path ile belirli bir yere gitmesi de sagalanabilir..}
})



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
