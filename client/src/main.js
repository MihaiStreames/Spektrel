import { createApp } from 'vue';
import VueParticles from 'vue-particles';
import App from './App.vue';
/* eslint-disable-next-line */
import router from './router.js';
import store from './store';

createApp(App)
  .use(store)
  .use(router)
  .use(VueParticles)
  .mount('#app');
