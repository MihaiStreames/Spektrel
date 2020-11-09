<template>
  <div class="home">
    <div class="home-header">
      <a href="/"><div class="home-logo"></div></a>
      <ul class="home-headerButtons">
        <li><a href="/about">About</a></li>
        <li><a href="https://github.com/MihaiStreames/Spektrel" target="_blank">Repository</a></li>
        <li><a href="/platforms">Platforms</a></li>
        <li><a href="/dashboard" class="home-dashboardButton">Dashboard</a></li>
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
          <a href="/login" class="home-loginButton">Login</a>
          <a href="/signup" class="home-signupButton">Signup</a>
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
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>
