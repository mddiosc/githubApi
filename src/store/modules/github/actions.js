import axios from "axios";

const getSearchRepos = async (context, data) => {
  if (data.filters.search) {
    context.commit("SET_LOADER", true);

    let options = Object.assign({
      q: data.filters.search.trim(),
      page: data.options.page,
      per_page: data.options.itemsPerPage,
      sort: data.filters.sort,
      order: data.filters.order,
    });

    return await axios
      .get(`https://api.github.com/search/repositories`, {
        params: options,
        data: null,
      })
      .then((res) => {
        context.commit("SET_SEARCH_REPOS", res.data);
        context.commit("SET_LOADER", false);
      });
  }
};

const cleanRepos = async (context) => {
  context.commit("RESET_DATA");
};

export default { getSearchRepos, cleanRepos };
