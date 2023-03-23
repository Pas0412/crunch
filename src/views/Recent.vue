<template>
    <div class="card-list">
        <Card_List :cards="cards" />
     </div>
</template>

<script>
import Card_List from '../components/Card_List.vue';
import Card_Menu from '../components/Card_Menu.vue';
export default {
  components: {
    Card_List,
    Card_Menu
},
  data() {
    return {
      cards: [
        {
          imageSrc: 'https://picsum.photos/400/300',
          title: 'Card Title 1',
        },
        {
          imageSrc: 'https://picsum.photos/400/300',
          title: 'Card Title 2',
        },
        {
          imageSrc: 'https://picsum.photos/400/300',
          title: 'Card Title 3',
        },
        {
          imageSrc: 'https://picsum.photos/400/300',
          title: 'Card Title 4',
        },
        {
          imageSrc: 'https://picsum.photos/400/300',
          title: 'Card Title 5',
        },
        {
          imageSrc: 'https://picsum.photos/400/300',
          title: 'Card Title 6',
        },
        {
          imageSrc: 'https://picsum.photos/400/300',
          title: 'Card Title 6',
        },
        {
          imageSrc: 'https://picsum.photos/400/300',
          title: 'Card Title 6',
        },
        {
          imageSrc: 'https://picsum.photos/400/300',
          title: 'Card Title 6',
        },
        {
          imageSrc: 'https://picsum.photos/400/300',
          title: 'Card Title 6',
        },
      ],
    };
  },
}
</script>

<style scoped>
.card-list {
}
</style>