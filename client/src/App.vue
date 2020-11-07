<template>
  <div id="nav">
    <div class="navBackground">
      <a href="/" class="navLogo"></a>
      <div class="navCategory">Navigation</div>
      <div class="navPlaces" >
        <router-link class="navPlace main" to="/">Home</router-link>
        <router-link class="navPlace main" to="/about">About</router-link>
        <router-link class="navPlace main" to="/login">Login</router-link>
      </div>
      <div class="navCategory">Platforms</div>
      <div class="navPlaces" >
        <router-link class="navPlace" to="/instagram">
          <div class="appicon instagram"></div>
          <p>Instagram</p>
          <div class="appNotification">106</div>
        </router-link>
        <router-link class="navPlace" to="/soundcloud">
          <div class="appicon soundcloud"></div>
          <p>SoundCloud</p>
          <div class="appNotification">36</div>
        </router-link>
        <router-link class="navPlace" to="/twitter">
          <div class="appicon twitter"></div>
          <p>Twitter</p>
          <div class="appNotification">20</div>
        </router-link>
        <router-link class="navPlace" to="/youtube">
          <div class="appicon youtube"></div>
          <p>YouTube</p>
          <div class="appNotification">23</div>
        </router-link>
      </div>
    </div>
  </div>
  <router-view/>
</template>

<style>
  @import './assets/style.css';
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>
