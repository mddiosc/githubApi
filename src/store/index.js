import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import github from "./modules/github";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { github },
});
