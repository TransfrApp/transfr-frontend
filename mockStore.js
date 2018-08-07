import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        loginFlow: 'signin', // can be 'sigin', 'create', 'type,
        coinType: '',
        addingProduct: '', // can be 'adding', or 'new-category'
    },
    mutations: {
        increment (state) {state.count++},
        adjustLoginFlow (state, type) {state.loginFlow = type},
        setCoinType (state, payload) {state.coinType = payload},
        addProduct (state, payload) {state.addingProduct = payload},
    }
})

export default store;