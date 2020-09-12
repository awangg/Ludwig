import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from '../Landing.vue';
import Upload from '../Upload.vue';
import Description from '../Description.vue';
import Success from '../Success.vue';
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
    path: '/description',
    name: 'description',
    component: Description
  },
  {
    path: '/success',
    name: 'success',
    component: Success
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
