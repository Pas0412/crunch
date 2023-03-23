<template>
    <div class="card-switch">
      <div class="cards" ref="cards">
        <card v-for="(item, index) in items" :key="index" :image-url="item.imageUrl" :title="item.title" :description="item.description" />
      </div>
      <div>
        <card image-url="src/assets/empty.svg" title="empty" description="empty"></card>
      </div>
    </div>
  </template>
  
  <script>
  import Card from './Card.vue'
  
  export default {
    components: {
      Card
    },
    props: {
      items: Array
    },
    methods: {
      scrollLeft() {
        this.$refs.cards.scrollLeft -= 350
      },
      scrollRight() {
        this.$refs.cards.scrollLeft += 350
      }
    }
  }
  </script>
  
  <style>
  .card-switch {
    width: 100%;
    display: flex;
    align-items: center;
    overflow-x: scroll;
    margin-bottom: 20px;
  }
  
  .cards {
    display: flex;
    flex-wrap: nowrap;
    overflow: scroll;
    margin-right: 10px;
  }
  
  ::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
  </style>
  