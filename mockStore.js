import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        loginFlow: 'signin', // can be 'sigin', 'create', 'type,
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})

export default store;