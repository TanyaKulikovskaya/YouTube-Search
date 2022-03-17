import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
    videos: [],
    maxResults: 12,
    searchString: '',
    favourites: JSON.parse(localStorage.getItem('favourites') || '[]'),
  },
  mutations,
  actions,
  getters,
});

export default store;
