const state = {
    counter: 0,
}

const getters ={
    getDoubleCounter(state) {
        return state.counter * 2;

    },
    stringCounter(state) {
        return state.counter + " kez tiklandi";
    }, 
}

const mutations = {
    increaseCounter(state , payload) {
        state.counter += payload;
    },
    decreaseCounter(state) {
        state.counter--;
    },
}

const actions ={
    increment({ commit }, payload) {
        commit("increaseCounter" , payload);
    },
    decrement({ commit }) {
        commit("decreaseCounter");
    },
    incAsync({ commit } ,payload ) {
        setTimeout(() => {
            commit("increaseCounter" , 10);
        }, payload.time);
    },
    decAsync({ commit }) {
        setTimeout(() => {
            commit("decreaseCounter");
        }, 1500);
    },
}

export default {
    state,
    getters,
    mutations,
    actions 

}


