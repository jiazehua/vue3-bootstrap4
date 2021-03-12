<template>
  <Top />
  <Left />
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script setup>
import Top from './components/Top.vue';
import Left from './components/Left.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const go = function (page) {
  router.push({
    name: page
  });
};
</script>

<style>
html,
body {
  height: 100%;
}
.cursor-pointer {
  cursor: pointer;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
<style lang="scss" scoped>
.main {
  float: left;
  width: calc(100% - 220px);
  overflow-y: auto;
  height: calc(100% - 80px);
  padding: 20px;
}
</style>