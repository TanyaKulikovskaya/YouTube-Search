import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
    searchString: '',
    favourites: JSON.parse(localStorage.getItem('favourites') || '[]'),
  },
  mutations,
  actions,
  getters,
});

export default store;
