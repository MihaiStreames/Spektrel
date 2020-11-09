import { createApp } from 'vue';
import VueParticles from 'vue-particles';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App)
  .use(store)
  .use(router)
  .use(VueParticles)
  .mount('#app');
