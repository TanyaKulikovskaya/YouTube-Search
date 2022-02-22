import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import unescape from './filters/unescape';

Vue.config.productionTip = false;

Vue.filter('unescape', unescape);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
