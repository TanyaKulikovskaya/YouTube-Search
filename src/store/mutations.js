export default {
  AUTH_SUCCESS(state, token) {
    state.token = token;
  },
  AUTH_ERROR(state) {
    state.token = '';
  },
  SET_LOGOUT(state) {
    state.token = '';
  },
  CHANGE_SEARCH_STRING(state, query) {
    state.searchString = query;
  },
  SET_REQUEST_TO_FAVOURITES(state, request) {
    state.favourites.push(request);
  },
  CLEAR_FAVOURITES(state) {
    state.favourites = JSON.parse('[]');
  },
};
