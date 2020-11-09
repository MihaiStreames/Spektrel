<template>
  <div id="nav">
    <div class="navBackground">
      <router-link to="/" class="navLogo"></router-link>
      <div class="navContainer">
        <div class="navCategory">Navigation</div>
        <div class="navPlaces">
          <router-link class="navPlace" to="/dashboard">
            <div class="navicon homeicon"></div>
            <p>Dashboard</p>
            <!-- <div class="appNotification" v-if="totalNotifs > 0">{{totalNotifs}}</div> -->
          </router-link>
        </div>
        <div class="navCategory">Platforms</div>
        <div class="navPlaces">
          <router-link class="navPlace" to="/dashboard/instagram">
            <div class="navicon instagram"></div>
            <p>Instagram</p>
            <!-- <div class="appNotification" v-if="notifs.ig > 0">{{notifs.ig}}</div> -->
          </router-link>
          <router-link class="navPlace" to="/dashboard/soundcloud">
            <div class="navicon soundcloud"></div>
            <p>SoundCloud</p>
            <!-- <div class="appNotification" v-if="notifs.sc > 0">{{notifs.sc}}</div> -->
          </router-link>
          <router-link class="navPlace" to="/dashboard/twitter">
            <div class="navicon twitter"></div>
            <p>Twitter</p>
            <!-- <div class="appNotification" v-if="notifs.tw > 0">{{notifs.tw}}</div> -->
          </router-link>
          <router-link class="navPlace" to="/dashboard/youtube">
            <div class="navicon youtube"></div>
            <p>YouTube</p>
          </router-link>
          <router-link class="navPlace" to="/dashboard/deviantart">
            <div class="navicon deviantart"></div>
            <p>DeviantArt</p>
          </router-link>
          <router-link class="navPlace" to="/dashboard/twitch">
            <div class="navicon twitch"></div>
            <p>Twitch</p>
          </router-link>
          <router-link class="navPlace" to="/dashboard/tiktok">
            <div class="navicon tiktok"></div>
            <p>TikTok</p>
          </router-link>
          <router-link class="navPlace" to="/dashboard/spotify">
            <div class="navicon spotify"></div>
            <p>Spotify</p>
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
  </div>
  <router-view/>
</template>

<style>
  @import '../assets/app.css';
</style>

<script> // trying to understand how realtime data would be written
export default {
  name: 'Dashboard',
  // create the data variable, basically initializing it
  data() {
    return {
      totalNotifs: 0,
      notifs: {
        ig: 0,
        sc: 0,
        tw: 0,
      },
    };
  },
  // create the functions (that this file contains, they are called methods)
  methods: {
    updateData() {
      // we set the notifs above to a random number
      this.notifs.ig += 1;
      this.notifs.sc += 1;
      this.notifs.tw += 1;
      this.totalNotifs = parseInt(this.notifs.ig, 10)
        + parseInt(this.notifs.sc, 10)
        + parseInt(this.notifs.tw, 10);
    },
  },
  // once the DOM is created we start the loop
  created() {
    this.updateData();
    setInterval(() => this.updateData(), 10);
  },
};
</script>
