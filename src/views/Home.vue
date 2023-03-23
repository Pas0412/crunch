<template>
  <div class="card-list">
    <Card_switch :items="item" />
  </div>
</template>

<script>
import Card_switch from "../components/Card_switch.vue";
export default {
  components: {
    Card_switch,
  },
  data() {
    return {
      item: [
        {
          imageUrl: 'https://picsum.photos/400/300',
          title: "Card 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          imageUrl: 'https://picsum.photos/400/300',
          title: "Card 2",
          description:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          imageUrl: 'https://picsum.photos/400/300',
          title: "Card 3",
          description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card-list {
  width: 100%;
}
</style>
