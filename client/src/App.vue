<template>
  <div id="nav">
    <div class="navBackground">
      <router-link to="/" class="navLogo"></router-link>
      <div class="navCategory">Navigation</div>
      <div class="navPlaces">
        <router-link class="navPlace" to="/">
          <div class="navicon homeicon"></div>
          <p>Home</p>
        </router-link>
        <router-link class="navPlace main" to="/about">About</router-link>
        <router-link class="navPlace main" to="/login">Login</router-link>
      </div>
      <div class="navCategory">Platforms</div>
      <div class="navPlaces">
        <router-link class="navPlace" to="/instagram">
          <div class="navicon instagram"></div>
          <p>Instagram</p>
          <div class="appNotification">106</div>
        </router-link>
        <router-link class="navPlace" to="/soundcloud">
          <div class="navicon soundcloud"></div>
          <p>SoundCloud</p>
          <div class="appNotification">36</div>
        </router-link>
        <router-link class="navPlace" to="/twitter">
          <div class="navicon twitter"></div>
          <p>Twitter</p>
          <div class="appNotification">20</div>
        </router-link>
        <router-link class="navPlace" to="/youtube">
          <div class="navicon youtube"></div>
          <p>YouTube</p>
          <div class="appNotification">23</div>
        </router-link>
        <router-link class="navPlace" to="/deviantart">
          <div class="navicon deviantart"></div>
          <p>DeviantArt</p>
        </router-link>
        <router-link class="navPlace" to="/twitch">
          <div class="navicon twitch"></div>
          <p>Twitch</p>
        </router-link>
        <router-link class="navPlace" to="/tiktok">
          <div class="navicon tiktok"></div>
          <p>TikTok</p>
        </router-link>
        <router-link class="navPlace" to="/spotify">
          <div class="navicon spotify"></div>
          <p>Spotify</p>
        </router-link>
      </div>
      <div class="navCategory">Developers</div>
      <div class="navPlaces">
        <router-link class="navPlace" to="/api">
          <div class="navicon api"></div>
          <p>API</p>
        </router-link>
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
