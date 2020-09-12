import Vue from 'vue'
import VueRouter from 'vue-router'

<<<<<<< HEAD
import Landing from '../components/Landing.vue';
import Upload from '../components/Upload.vue';
=======
import Landing from '../Landing.vue';
import Upload from '../Upload.vue';
>>>>>>> ef7a45b5cee0f68b8aa2c7de85628a708b0a1462

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
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
