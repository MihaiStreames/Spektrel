<template>
  <div class="home">
    <div class="home-header">
      <router-link to="/"><div class="home-logo"></div></router-link>
      <ul class="home-headerButtons">
        <li><router-link to="/about">About</router-link></li>
        <li><a href="https://github.com/MihaiStreames/Spektrel" target="_blank">Repository</a></li>
        <li><router-link to="/platforms">Platforms</router-link></li>
        <li>
          <router-link to="/dashboard" class="home-dashboardButton">
            Open Dashboard
          </router-link>
        </li>
      </ul>
    </div>
    <section class="home-firstBackground">
      <div class="home-firstSlideTitle">
        <h1>Social Media Dashboard</h1>
        <p>
          Spektrel is an open source dashboard inspired by Discord that lets you monitor all the
          statistics on your platforms easily, it gives you the ability to track individual
          posts and download csv statistics for you to use
        </p>
        <div class="home-Buttons">
          <router-link to="/login" class="home-loginButton">Login</router-link>
          <router-link to="/signup" class="home-signupButton">Signup</router-link>
        </div>
      </div>
      <vue-particles
        class="home-particles"
        color="#313563"
        linesColor="#2c2f53"
        :moveSpeed="2"
        :particlesNumber="200">
      </vue-particles>
      <div class="home-firstSlideBackground"></div>
    </section>
    <section class="home-secondBackground">
      <div class="home-secondSlideContent">
        <div class="home-dashboardScreenshot"></div>
        <div class="home-secondSlideTitle">
          <h1>Spektrel lets you quickly check your statistics</h1>
          <p>
            All your platforms show up on the main navigation letting you quickly
            switch to them letting you check your latest statistics in
            real time while also having notifications for each app to quickly
            show you your growth before even having to click
          </p>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>
