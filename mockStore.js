import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        loginFlow: 'create', // can be 'sigin', 'create', 'type,
        coinType: '',
    },
    mutations: {
        increment (state) {state.count++},
        adjustLoginFlow (state, type) {state.loginFlow = type},
        setCoinType (state, payload) {state.coinType = payload},
    }
})

export default store;