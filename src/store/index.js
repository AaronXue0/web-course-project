import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
  },
  mutations: {
    setDrawerState(state, payload) {
      state.drawer = payload;
    },
  },
  actions: {},
  modules: {},
});
