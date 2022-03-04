import AuthUser from '../services/AuthUser';
import VideosAPI from '../services/VideosAPI';
import FavouritesUser from '../services/FavouritesUser';

export default {
  async LOGIN({ commit }, credentials) {
    try {
      const response = await AuthUser.login(credentials);
      commit('AUTH_SUCCESS', response.accessToken);
    } catch {
      commit('AUTH_ERROR');
    }
  },
  LOGOUT({ commit }) {
    AuthUser.logout();
    commit('SET_LOGOUT');
    FavouritesUser.clearFavourites();
    commit('CLEAR_FAVOURITES');
  },
  async GET_VIDEOS_FROM_API({ commit, getters }) {
    const maxResults = getters.MAX_RESULTS;
    const query = getters.SEARCH_STRING;
    try {
      const response = await VideosAPI.getVideosFromApi(maxResults, query);
      commit('SET_VIDEOS_TO_STATE', response.items);
    } catch (error) {
      console.log(error);
    }
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
