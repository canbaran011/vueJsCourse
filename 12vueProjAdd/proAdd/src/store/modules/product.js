import Vue from "vue"
import {router} from '../../router'


const state = {
    products: []

}

const getters = {
    getProducts(state) {
        return state.products
    },
    getProduct(state) {
       return key => state.products.filter(element => {
            return element.key == key;
        })
    }
}

const mutations = {
    updateProductList(state, product) {
        state.products.push(product);
    },
}

const actions = { // dis service lere baglanmak icin async
    initApp({ commit }) {
        // vue resouce islemleri
       Vue.http.get("https://urun-islemleri-prod-c405c.firebaseio.com/products.json")
       .then(response => {
          console.log(response.body);
          let data = response.body;
          for(let key in data){
              data[key].key =key;
              commit("updateProductList", data[key]);
          }

       })
    },
    saveProduct({dispatch , commit ,state }, product) {
        // vue resource
        Vue.http.post("https://urun-islemleri-prod-c405c.firebaseio.com/products.json" , product)
        .then((response) => {
            /****************Urun Listesinin Guncellenmesi*********** */
            product.key = response.body.name;
            // console.log(product.key);
            commit("updateProductList" , product); //console.log(state.products);
            // console.log(response); 
            /****************Alis Satis Bakiye bilgilerinin guncellenmesi  */
            let tradeResult= {
                 purchase : product.price,
                 sale : 0,
                 count : product.count,
                }
            dispatch("setTradeResult" , tradeResult);
            router.replace("/");
        })

    },
    sellProduct({ state ,commit ,dispatch}, payload) {
        //pass by ref // call by ref 
       let product = state.products.filter( element => {
            return element.key == payload.key;
        })

        if(product){
            // z  = x - y;
            let totalCount = product[0].count - payload.count;

            Vue.http.patch("https://urun-islemleri-prod-c405c.firebaseio.com/products/"+ payload.key + ".json",{ count : totalCount } )
            .then(response => {
                console.log(response);
                product[0].count = totalCount;
                let tradeResult= {
                    purchase :0,
                    sale : product[0].price,
                    count : payload.count,
                   }
               dispatch("setTradeResult" , tradeResult);
               router.replace("/");
            })   
        
        }else{

        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}