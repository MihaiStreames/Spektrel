import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Login from '../views/Login.vue';
import Instagram from '../views/Instagram.vue';
import YouTube from '../views/YouTube.vue';
import SoundCloud from '../views/SoundCloud.vue';
import Twitter from '../views/Twitter.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/instagram',
    name: 'Instagram',
    component: Instagram,
  },
  {
    path: '/youtube',
    name: 'YouTube',
    component: YouTube,
  },
  {
    path: '/soundcloud',
    name: 'SoundCloud',
    component: SoundCloud,
  },
  {
    path: '/twitter',
    name: 'Twitter',
    component: Twitter,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
