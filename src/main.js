import Vue from 'vue';
import Vuelidate from 'vuelidate';
import VBodyScrollLock from 'v-body-scroll-lock';
import App from './App.vue';
import router from './router';
import store from './store';
import unescape from './filters/unescape';

Vue.config.productionTip = false;

Vue.filter('unescape', unescape);
Vue.use(Vuelidate);
Vue.use(VBodyScrollLock);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
