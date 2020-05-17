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
    },
    saveProduct({dispatch , commit ,state }, product) {
        // vue resource
        Vue.http.post("https://urun-islemleri-prod-c405c.firebaseio.com/products.json" , product)
        .then((response) => {
            /****************Urun Listesinin Guncellenmesi*********** */
            product.key = response.body.name;
            // console.log(product.key);
            commit("updateProductList" , product); console.log(state.products);
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
    sellProduct({ commit }, payload) {

    }



}

export default {
    state,
    getters,
    mutations,
    actions
}