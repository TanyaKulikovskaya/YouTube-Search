export default {
  AUTH_SUCCESS(state, token) {
    state.token = token;
  },
  AUTH_ERROR(state) {
    state.token = '';
  },
};
