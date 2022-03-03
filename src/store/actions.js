import AuthUser from '../services/AuthUser';
import FavouritesUser from '../services/FavouritesUser';

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
    FavouritesUser.clearFavourites();
    commit('CLEAR_FAVOURITES');
  },
  SET_SEARCH_STRING({ commit }, payload) {
    commit('CHANGE_SEARCH_STRING', payload);
  },
  ADD_REQUEST_TO_FAVOURITES({ commit }, request) {
    FavouritesUser.addRequestToFavourites(request);
    commit('SET_REQUEST_TO_FAVOURITES', request);
  },
  DELETE_REQUEST_FROM_FAVOURITES({ commit }, index) {
    FavouritesUser.deleteRequestFromFavourites(index);
    commit('REMOVE_REQUEST_FROM_FAVOURITES', index);
  },
};
