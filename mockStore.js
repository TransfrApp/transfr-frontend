import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        loginFlow: 'signin', // can be 'sigin', 'create', 'type,
        coinType: {},
    },
    mutations: {
        increment (state) {
            state.count++
        },
        adjustLoginFlow(state, type){state.loginFlow = type},
    }
})

export default store;