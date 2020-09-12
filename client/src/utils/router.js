import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from '../components/Landing.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
