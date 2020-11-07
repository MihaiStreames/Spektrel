import { createRouter, createWebHistory } from 'vue-router';
import home from '../views/Home.vue';
import about from '../views/About.vue';
import login from '../views/Login.vue';
import instagram from '../views/Instagram.vue';
import youtube from '../views/YouTube.vue';
import soundcloud from '../views/SoundCloud.vue';
import twitter from '../views/Twitter.vue';
import deviantart from '../views/DeviantArt.vue';
import twitch from '../views/Twitch.vue';
import tiktok from '../views/TikTok.vue';
import spotify from '../views/Spotify.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home,
  },
  {
    path: '/about',
    name: 'About',
    component: about,
  },
  {
    path: '/login',
    name: 'Login',
    component: login,
  },
  {
    path: '/instagram',
    name: 'Instagram',
    component: instagram,
  },
  {
    path: '/youtube',
    name: 'YouTube',
    component: youtube,
  },
  {
    path: '/soundcloud',
    name: 'SoundCloud',
    component: soundcloud,
  },
  {
    path: '/twitter',
    name: 'Twitter',
    component: twitter,
  },
  {
    path: '/deviantart',
    name: 'DeviantArt',
    component: deviantart,
  },
  {
    path: '/twitch',
    name: 'Twitch',
    component: twitch,
  },
  {
    path: '/tiktok',
    name: 'TikTok',
    component: tiktok,
  },
  {
    path: '/spotify',
    name: 'spotify',
    component: spotify,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
