export default {
  IS_LOGGED_IN(state) {
    return !!state.token;
  },
  VIDEOS(state) {
    return state.videos;
  },
  MAX_RESULTS(state) {
    return state.maxResults;
  },
  SEARCH_STRING(state) {
    return state.searchString;
  },
  FAVOURITES(state) {
    return state.favourites;
  },
};
