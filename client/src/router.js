import { createRouter, createWebHistory } from 'vue-router';

// main pages
import home from './views/Home.vue';
import about from './views/About.vue';
import heartdroids from './views/Heartdroids.vue';

// Lore
import guide from './views/lore views/Guide.vue';
import soul from './views/lore views/Soul.vue';
import packaging from './views/lore views/Packaging.vue';

// Traits
import corruption from './views/traits views/Corruption.vue';
import earRarity from './views/traits views/Ear Rarity.vue';
import eyeRarity from './views/traits views/Eye Rarity.vue';
import tailRarity from './views/traits views/Tail Rarity.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home,
    meta: {
      title: 'Heartdroid',
    },
  },
  {
    path: '/lore/guide',
    name: 'Guide',
    component: guide,
    meta: {
      title: 'Heartdroid | Guide',
    },
  },
  {
    path: '/lore/Soul',
    name: 'soul',
    component: soul,
    meta: {
      title: 'Heartdroid | Soul',
    },
  },
  {
    path: '/lore/packaging',
    name: 'Packaging',
    component: packaging,
    meta: {
      title: 'Heartdroid | Packaging',
    },
  },
  {
    path: '/traits/corruption',
    name: 'Corruption',
    component: corruption,
    meta: {
      title: 'Heartdroid | Corruption',
    },
  },
  {
    path: '/traits/rarity/ears',
    name: 'Ear Rarity',
    component: earRarity,
    meta: {
      title: 'Heartdroid | Ear Rarity',
    },
  },
  {
    path: '/traits/rarity/eyes',
    name: 'Eye Rarity',
    component: eyeRarity,
    meta: {
      title: 'Heartdroid | Eye Rarity',
    },
  },
  {
    path: '/traits/rarity/tail',
    name: 'Tail Rarity',
    component: tailRarity,
    meta: {
      title: 'Heartdroid | Tail Rarity',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: about,
    meta: {
      title: 'Heartdroid | About',
    },
  },
  {
    path: '/heartdroids',
    name: 'Heartdroids',
    component: heartdroids,
    meta: {
      title: 'Heartdroids | All',
    },
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
