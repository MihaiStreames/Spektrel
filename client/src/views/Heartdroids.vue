<template>
  <div>
    <div class="heartdroids">
    <div class="rarityButtons">
      <button v-on:click="this.getData()">All</button>
      <div class="rarityButtonLine"></div>
      <button v-on:click="this.getDataRarity('SSR')">SSR</button>
      <button v-on:click="this.getDataRarity('SR')">SR</button>
      <button v-on:click="this.getDataRarity('R')">R</button>
      <button v-on:click="this.getDataRarity('N')">N</button>
    </div>
      <div class="heartdroidsGrid">
        <div class="heartdroid" v-for="heartdroid in heartdroids.data" :key="heartdroid">
          <router-link :to="'/heartdroid/' + heartdroid.name.toLowerCase()" class="heartdroid">
            <div class="heartdroidTitle">
              <p class="heartdroidName">{{heartdroid.name}}</p>
              <p class="heartdroidSerial">{{heartdroid.serial}}</p>
            </div>
            <img :src="heartdroid.headshotURL">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
/* eslint-disable */

export default {
  name: 'heartdroids',
  data: () => {
    return {
      heartdroids: '',
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let data;
      axios.get('http://localhost:5000/heartdroids/', { headers: { 'Access-Control-Allow-Origin': '*' } })
        .then((result) => {
          this.heartdroids = result;
          console.log(Object.assign({}, result).data);
        });
    },
    getDataRarity(rarity) {
      let data;
      axios.get('http://localhost:5000/search/rarity/' + rarity, { headers: { 'Access-Control-Allow-Origin': '*' } })
        .then((result) => {
          this.heartdroids = result;
          console.log(Object.assign({}, result).data);
        });
    },    
    getDataSerial(serial) {
      let data;
      axios.get('http://localhost:5000/search/serial/' + serial, { headers: { 'Access-Control-Allow-Origin': '*' } })
        .then((result) => {
          this.heartdroids = result;
          console.log(Object.assign({}, result).data);
        });
    },
  },
};
</script>
