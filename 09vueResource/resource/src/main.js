import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.http.options.root = "https://vuejs-vue-resource-d24d7.firebaseio.com";

Vue.http.interceptors.push( (request,next)=>{ //butun projeyi etkiler , mahvedebilir..dikkat et
  // console.log(req.method);
  // if(req.method == "POST"){
  //   req.method = "PUT";
  //   next();
  // }
  next(response =>{
   response.json = () => {
     return{
      userList : response.body

     }
   }
  });
}
);

new Vue({
  el: '#app',
  render: h => h(App)
})
