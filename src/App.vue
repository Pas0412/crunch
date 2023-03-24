<template>
  <HeaderBar></HeaderBar>
  <div id="app">
    <RouterView />
  </div>
  <NavBar></NavBar>
</template>

<script>
import NavBar from './components/NavBar.vue';
import HeaderBar from './components/HeaderBar.vue';
export default {
  components: {
    NavBar,
    HeaderBar
},
}
</script>

<style scoped>
</style>
