export default {
  IS_LOGGED_IN(state) {
    return !!state.token;
  },
  SEARCH_STRING(state) {
    return state.searchString;
  },
  FAVOURITES(state) {
    return state.favourites;
  },
};
