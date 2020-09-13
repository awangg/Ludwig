import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from '../Landing.vue';
import Upload from '../Upload.vue';
import Description from '../Description.vue';
import Preview from '../Preview.vue';
import AboutUs from '../AboutUs.vue';
import Success from '../Success.vue';
import Login from '../Login.vue';
import Signup from '../Signup.vue';

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
    path: '/preview',
    name: 'preview',
    component: Preview
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component:  AboutUs
  },
  {
    path: '/success',
    name: 'success',
    component: Success
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
  path: '/signup',
  name: 'signup',
  component: Signup
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
