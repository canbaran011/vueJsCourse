import Vue from 'vue'
import App from './App.vue'

// // v-color custom directives created here
// Vue.directive("color", {
//   bind(el, binding, vnode) {

//     if (binding.modifiers["delay"]) {
//       setTimeout(() => {

//         if (binding.arg == "background") {
//           el.style.backgroundColor = binding.value;

//         } else {
//           el.style.color = binding.value;
//         }

//       }, 2000);

//     } else {

//       if (binding.arg == "background") {
//         el.style.backgroundColor = binding.value;

//       } else {
//         el.style.color = binding.value;
//       }
//     }


//     // el.style.backgroundColor = binding.value; 
//     // 'red'

//   }
// });


new Vue({
  el: '#app',
  render: h => h(App)
})

// directive hook metodlari
//bind ( el , binding , vnode)
//inserted ( el ,binding , vnode )
//update ( el, binding , vnode  , oldVnode)
//componentUpdated ( el, binding, vnode, oldVnode)
//unbind ( el, binding , vnode)