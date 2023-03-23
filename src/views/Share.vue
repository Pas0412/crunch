<template>
    <div>
        <div class="btn-list" v-for="item in items" key="item">
            <Share_button :img="item" />
        </div>
    </div>
  </template>
  
  <script>
  import Share_button from "../components/Share_button.vue";
  export default {
    components: {
    Share_button
},
    data() {
      return {
        items: [
          {
            url: "../src/assets/share.svg"
          },
          {
            url: "../src/assets/nfc.svg"
          }
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .btn-list {
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: space-between;
  }
  </style>
  