<template>
  <div class="headerbar">
    <img class="header-img" src="../assets/faurinfo.jpeg" alt="f" />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
const router = useRouter();
export default {
  data() {
    return {};
  },
};
</script>

<style>
.headerbar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: blue;
  border-top: 1px solid #ccc;
  padding: 0 10px;
  flex-direction: row;
}
.header-img {
  height: 50px;
  width: 150px;
}
</style>
