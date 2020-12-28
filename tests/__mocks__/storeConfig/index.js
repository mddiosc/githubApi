import Vue from "vue";
import Vuex from "vuex";
import repositories from "../storeConfig/modules/repositories";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    repositories,
  },
});
