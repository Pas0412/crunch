<template>
    <div class="card-list">
      <div class="card-row" v-for="(cards, index) in cardRows" :key="index">
        <Card_Menu v-for="(card, cardIndex) in cards" :key="cardIndex" :image-src="card.imageSrc" :title="card.title" />
      </div>
    </div>
  </template>
  
  <script>
import Card_Menu from './Card_Menu.vue';
  
  export default {
    components: {
        Card_Menu
    },
    props: {
      cards: {
        type: Array,
        required: true,
      },
      cardsPerRow: {
        type: Number,
        default: 2,
      },
    },
    computed: {
      cardRows() {
        const rows = [];
        for (let i = 0; i < this.cards.length; i += this.cardsPerRow) {
          const row = [];
          for (let j = 0; j < this.cardsPerRow; j++) {
            if (this.cards[i + j]) {
              row.push(this.cards[i + j]);
            }
          }
          rows.push(row);
        }
        return rows;
      },
    },
  };
  </script>
  
  <style>
  .card-list {
    overflow-y: scroll;
  }
  
  .card-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  </style>
  