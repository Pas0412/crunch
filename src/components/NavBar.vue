<template>
    <div class="navbar">
            <button v-for="(button, index) in buttons"
              :key="index"
              :class="{ active: activeIndex === index }"
              @click="setActive(index)">
            <router-link class="router-link" :to=button.path>
                <img class="nav-img" :src=button.url>
                {{ button.name }}
            </router-link>
            </button>
    </div>
</template>
  
  <script>
  import { useRouter } from 'vue-router';
  const router = useRouter();
  export default {
    data() {
      return {
        buttons: [{
            name: 'Home',
            url: '../src/assets/home.svg',
            path: '/home'
        },{
            name: 'Recent',
            url: '../src/assets/recent.svg',
            path: '/recent'
        },{
            name: 'Share',
            url: '../src/assets/share.svg',
            path: '/share'
        },{
            name: 'Search',
            url: '../src/assets/search.svg',
            path: '/'
        },{
            name: 'Mine',
            url: '../src/assets/mine.svg',
            path: '/'
        }],
        activeIndex: 0,
      }
    },
    methods: {
      setActive(index) {
        this.activeIndex = index
      },
    },
  }
  </script>
  
  <style>
  .router-link {
    color: black;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #f5f5f5;
    border-top: 1px solid #ccc;
    padding: 0 10px;
    flex-direction: row;
  }
  .nav-img {
    height: 30px;
    width: 30px;
  }
  
  button {
    border: none;
    background-color: transparent;
    font-size: 16px;
    font-weight: bold;
    color: #555;
    padding: 10px;
    cursor: pointer;
    flex-direction: column;
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
  }
  
  button.active {
    color: #000;
    border-bottom: 2px solid #000;
  }
  </style>
  