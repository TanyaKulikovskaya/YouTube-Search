import AuthUser from '../services/AuthUser';

export default {
  LOGIN({ commit }, credentials) {
    return AuthUser.login(credentials)
      .then((response) => {
        commit('AUTH_SUCCESS', response.token);
        return Promise.resolve(response.token);
      },
      (error) => {
        commit('AUTH_ERROR');
        return Promise.reject(error);
      });
  },
};
