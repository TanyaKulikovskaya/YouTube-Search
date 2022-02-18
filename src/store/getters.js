export default {
  IS_LOGGED_IN(state) {
    return !!state.token;
  },
};
