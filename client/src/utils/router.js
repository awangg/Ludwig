import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from '../Landing.vue';
import Upload from '../Upload.vue';
import Description from '../Description.vue';
import AboutUs from '../AboutUs.vue';
import Success from '../Success.vue';
import Signup from '../Signup.vue';
import StudentAssignments from '../student/StudentAssignments.vue';
import EducatorHome from '../teacher/EduHomepage.vue';

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
  path: '/signup',
  name: 'signup',
  component: Signup
  },
  {
  path: '/studentassignments',
  name: 'studentAssignments',
  component: StudentAssignments
  },
  {
    path: '/educatorHome',
    name: 'educatorHome',
    component: EducatorHome
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
