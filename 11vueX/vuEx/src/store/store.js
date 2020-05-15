import Vue from 'vue';
import Vuex from 'vuex';
import Counter from './modules/counter';
import * as mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value : 10
    },
    getters:getters,
    mutations: mutations,
    actions: actions,
    modules: {
        counter : Counter
    }
})


// mutations : {
//     increaseCounter(state , value){
//         state.counter += value;
//     },


