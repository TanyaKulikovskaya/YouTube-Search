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
};
