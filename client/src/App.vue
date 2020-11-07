<template>
  <div id="nav">
    <div class="navBackground">
      <router-link to="/" class="navLogo"></router-link>
      <div class="navCategory">Navigation</div>
      <div class="navPlaces">
        <router-link class="navPlace" to="/">
          <div class="navicon homeicon"></div>
          <p>Home</p>
          <div class="appNotification">{{notifications * 8}}</div>
        </router-link>
        <router-link class="navPlace main" to="/about">
          <div class="navicon arrowDown"></div>
          <p>About</p>
        </router-link>
        <router-link class="navPlace main" to="/login">
          <div class="navicon arrowDown"></div>
          <p>Login</p>
        </router-link>
      </div>
      <div class="navCategory">Platforms</div>
      <div class="navPlaces">
        <router-link class="navPlace" to="/instagram">
          <div class="navicon instagram"></div>
          <p>Instagram</p>
          <div class="appNotification">{{notifications}}</div>
        </router-link>
        <router-link class="navPlace" to="/soundcloud">
          <div class="navicon soundcloud"></div>
          <p>SoundCloud</p>
          <div class="appNotification">{{notifications}}</div>
        </router-link>
        <router-link class="navPlace" to="/twitter">
          <div class="navicon twitter"></div>
          <p>Twitter</p>
          <div class="appNotification">{{notifications}}</div>
        </router-link>
        <router-link class="navPlace" to="/youtube">
          <div class="navicon youtube"></div>
          <p>YouTube</p>
          <div class="appNotification">{{notifications}}</div>
        </router-link>
        <router-link class="navPlace" to="/deviantart">
          <div class="navicon deviantart"></div>
          <p>DeviantArt</p>
          <div class="appNotification">{{notifications}}</div>
        </router-link>
        <router-link class="navPlace" to="/twitch">
          <div class="navicon twitch"></div>
          <p>Twitch</p>
          <div class="appNotification">{{notifications}}</div>
        </router-link>
        <router-link class="navPlace" to="/tiktok">
          <div class="navicon tiktok"></div>
          <p>TikTok</p>
          <div class="appNotification">{{notifications}}</div>
        </router-link>
        <router-link class="navPlace" to="/spotify">
          <div class="navicon spotify"></div>
          <p>Spotify</p>
          <div class="appNotification">{{notifications}}</div>
        </router-link>
      </div>
      <div class="navCategory">Developers</div>
      <div class="navPlaces">
        <a href="https://github.com/MihaiStreames/Spektrel" class="navPlace" target="_blank">
          <div class="navicon api"></div>
          <p>API</p>
        </a>
        <a href="https://github.com/MihaiStreames/Spektrel" class="navPlace" target="_blank">
          <div class="navicon github"></div>
          <p>Repository</p>
        </a>
      </div>
    </div>
  </div>
  <router-view/>
</template>

<style>
  @import './assets/style.css';
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>

<script> // trying to understand how realtime data would be written
export default {
  // create the data variable
  data() {
    return {
      notifications: 0,
    };
  },
  // create the functions this file contains (they are called methods)
  methods: {
    getRandomNum() {
      // we set the notifications above to a random number
      this.notifications += 1;
      if (this.notifications > 1000) this.notifications = 0;
    },
  },
  // once the DOM is created we start the loop
  created() {
    this.getRandomNum();
    setInterval(() => this.getRandomNum(), 10);
  },
};
</script>
