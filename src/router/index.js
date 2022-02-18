import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '../store';

const Home = () => import('../views/home.vue');
const Login = () => import('../views/login.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.IS_LOGGED_IN) {
      next();
      return;
    }
    next('/login');
  } else {
    next();
  }
});

export default router;
