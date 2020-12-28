import axios from "axios";

const state = () => ({
  repositories: [],
});

const mutations = {
  SET_REPOSITORIES(state, data) {
    state.repositories = data;
  },
};

const actions = {
  loadRepositories({ commit }) {
    axios
      .get("/api/repositories/")
      .then(function(response) {
        commit("SET_REPOSITORIES", response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
};

const getters = {
  getRepositories: (state) => {
    return state.repositories;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
