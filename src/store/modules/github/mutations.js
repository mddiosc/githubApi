const SET_LOADER = (state, data) => {
  state.loading = data;
};

const SET_SEARCH_REPOS = (state, data) => {
  state.totalRepositories = data.total_count;
  state.repositories = data.items;
};

const RESET_DATA = (state) => {
  state.loading = false;
  state.repositories = [];
  state.totalRepositories = null;
};

export default { SET_LOADER, SET_SEARCH_REPOS, RESET_DATA };
