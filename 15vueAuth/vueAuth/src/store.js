import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state : {
        token : ""
    },
    mutations : {
        setTokena(state , token){

        },
        clearToken(state){
            state.token = ""
        }
    },
    actions : {
        login({commit , dispatch , state} , authData ){ // vuexContext ıncludes

        },
        logout({commit ,dispatch , state}){

        }
    } ,

    getters : {

    }
})

export default store;