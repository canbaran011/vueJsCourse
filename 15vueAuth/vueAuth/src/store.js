import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { router } from './router';

Vue.use(Vuex);

const store = new Vuex.Store({
    state : {
        token : "",
        fbAPIKey : "AIzaSyAy_VteDk13LdzmRRmsVDS0_DONUxhFWuQ"
        
    },
    mutations : {
        setToken(state , token){
            state.token = token
        },
        clearToken(state){
            state.token = ""
        }
    },
    actions : {
        initAuth({commit , dispatch}){
            // alert("alert")
            let token = localStorage.getItem("token");
            if(token){
                let expirationDate = localStorage.getItem("expirationDate")
                let time = new Date().getTime()
                let last = time+ expirationDate;
                
                if(time >= last){
                    console.log("token has expired");
                    dispatch("logout")
                }else{
                    commit("setToken", token);
                    router.push("/")
                }                
            }else{
                router.push("/auth");
                return false;
            }

        },

        login({commit , dispatch , state} , authData ){ // vuexContext ıncludes
            let authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
            if(authData.isUser){
              authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
            }
         
            return  axios.post( authLink +"AIzaSyAy_VteDk13LdzmRRmsVDS0_DONUxhFWuQ" ,
          { email : authData.email , password : authData.password , returnSecureToken	: true  })
          .then( response =>{
            console.log(response.data);
            commit("setToken" , response.data.idToken);
            localStorage.setItem("token" , response.data.idToken);

// localStorage.setItem("expirationDate" , new Date().getTime() + response.data.expiresIn * 1000)
            localStorage.setItem("expirationDate" , new Date().getTime() + 5000)

            // dispatch("setTimeoutTimer" , +response.data.expiresIn * 1000)
            dispatch("setTimeoutTimer" ,  5000);

          }).catch(err =>{
            console.log(err);
          })
      
        },
        logout({commit ,dispatch , state}){
            commit("clearToken");
            localStorage.removeItem("token");
            localStorage.removeItem("expirationDate");

            router.replace("/auth")

        },
        setTimeoutTimer({dispatch} , expiresIn){
            setTimeout(() => {
                dispatch("logout");
            }, expiresIn);
        }
    } ,

    getters : { 
        isAuthenticated(state){
            return state.token !== ""
        }
    }
})

export default store;