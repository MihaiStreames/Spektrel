import { createRouter, createWebHistory } from 'vue-router';

// main pages
import home from '../views/Home.vue';
import about from '../views/About.vue';
import platforms from '../views/Platforms.vue';
import signup from '../views/Signup.vue';
import login from '../views/Login.vue';
import dashboard from '../views/Dashboard.vue';

// dashboard views
import dash from '../views/dashboard views/Dash.vue';
import instagram from '../views/dashboard views/Instagram.vue';
import youtube from '../views/dashboard views/YouTube.vue';
import soundcloud from '../views/dashboard views/SoundCloud.vue';
import twitter from '../views/dashboard views/Twitter.vue';
import deviantart from '../views/dashboard views/DeviantArt.vue';
import twitch from '../views/dashboard views/Twitch.vue';
import tiktok from '../views/dashboard views/TikTok.vue';
import spotify from '../views/dashboard views/Spotify.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home,
    meta: {
      auth: false,
      title: 'Spektrel',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: about,
    meta: {
      auth: false,
      title: 'Spektrel | About',
    },
  },
  {
    path: '/platforms',
    name: 'Platforms',
    component: platforms,
    meta: {
      auth: false,
      title: 'Spektrel | Platforms',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: login,
    meta: {
      auth: false,
      title: 'Spektrel | Login',
    },
  },
  {
    path: '/signup',
    name: 'Signup',
    component: signup,
    meta: {
      auth: false,
      title: 'Spektrel | Signup',
    },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: dashboard,
    meta: {
      auth: true,
      title: 'Spektrel | Dashboard',
    },
    children: [
      {
        path: '',
        name: 'Dash',
        component: dash,
        meta: {
          title: 'Spektrel | Dashboard',
        },
      },
      {
        path: 'instagram',
        name: 'Instagram',
        component: instagram,
        meta: {
          title: 'Spektrel | Instagram',
        },
      },
      {
        path: 'youtube',
        name: 'YouTube',
        component: youtube,
        meta: {
          title: 'Spektrel | YouTube',
        },
      },
      {
        path: 'soundcloud',
        name: 'SoundCloud',
        component: soundcloud,
        meta: {
          title: 'Spektrel | SoundCloud',
        },
      },
      {
        path: 'twitter',
        name: 'Twitter',
        component: twitter,
        meta: {
          title: 'Spektrel | Twitter',
        },
      },
      {
        path: 'deviantart',
        name: 'DeviantArt',
        component: deviantart,
        meta: {
          title: 'Spektrel | DevianArt',
        },
      },
      {
        path: 'twitch',
        name: 'Twitch',
        component: twitch,
        meta: {
          title: 'Spektrel | Twitch',
        },
      },
      {
        path: 'tiktok',
        name: 'TikTok',
        component: tiktok,
        meta: {
          title: 'Spektrel | TikTok',
        },
      },
      {
        path: 'spotify',
        name: 'spotify',
        component: spotify,
        meta: {
          title: 'Spektrel | Spotify',
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// this sets the tab title to the current page dynamically
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
