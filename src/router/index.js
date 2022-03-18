import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '../store';

const Home = () => import('../views/Home.vue');
const Login = () => import('../views/Login.vue');
const Favourites = () => import('../views/Favourites.vue');

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
  {
    path: '/favourites',
    name: 'favourites',
    component: Favourites,
    meta: {
      requiresAuth: true,
    },
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
  } else if (!store.getters.IS_LOGGED_IN) {
    next();
  } else {
    next({ name: 'home' });
  }
});

export default router;
