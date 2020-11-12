<template>
  <div class="header-header">
    <router-link to="/"><div class="header-logo"></div></router-link>
    <ul class="header-headerButtons">
      <div class="header-dropdown">
        <button class="header-dropbtn">Lore</button>
        <div class="header-dropdown-content">
          <router-link
            to="/lore/guide">
            Guide
          </router-link>
          <router-link
            to="/lore/soul">
            Soul
          </router-link>
          <router-link
            to="/lore/packaging">
            Packaging
          </router-link>
        </div>
      </div>
      <div class="header-dropdown">
        <button class="header-dropbtn">Traits</button>
        <div class="header-dropdown-content">
          <router-link
            class="header-traitsDropdownButton"
            to="/traits/corruption">
            Corruption
          </router-link>
          <router-link
            class="header-traitsDropdownButton"
            to="/traits/rarity/ears">
            Ear Rarity
          </router-link>
          <router-link
            class="header-traitsDropdownButton"
            to="/traits/rarity/eyes">
            Eye Rarity
          </router-link>
          <router-link
            class="header-traitsDropdownButton"
            to="/traits/rarity/tail">
            Tail Rarity
          </router-link>
        </div>
      </div>
      <li><router-link to="/about">About</router-link></li>
      <li>
        <router-link to="/heartdroids" class="header-heartdroidsButton">
          View Heartdroids
        </router-link>
      </li>
    </ul>
  </div>
  <router-view/>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  @import url('./assets/app.css');
</style>

<script>
export default {
};
</script>
