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
  CHANGE_SEARCH_STRING(state, payload) {
    state.searchString = payload;
  },
};
