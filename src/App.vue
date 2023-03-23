<template>
  <div id="app">
    <RouterView />
  </div>
  <NavBar></NavBar>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  components: {
    NavBar
},
}
</script>

<style scoped>
</style>
