import AuthUser from '../services/AuthUser';

export default {
  LOGIN({ commit }, credentials) {
    return AuthUser.login(credentials)
      .then((response) => {
        commit('AUTH_SUCCESS', response.accessToken);
        return Promise.resolve(response.accessToken);
      },
      (error) => {
        commit('AUTH_ERROR');
        return Promise.reject(error);
      });
  },
  LOGOUT({ commit }) {
    AuthUser.logout();
    commit('SET_LOGOUT');
  },
};
