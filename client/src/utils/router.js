import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from '../Landing.vue';
import Upload from '../Upload.vue';
import AboutUs from '../AboutUs.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing
  },
  {
    path: '/upload',
    name: 'upload',
    component: Upload
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component:  AboutUs
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
