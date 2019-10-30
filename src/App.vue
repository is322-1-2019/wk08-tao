<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Ex01Page from "./components/ex01/Ex01Page.vue";
import Ex02Page from "./components/ex02/Ex02Page.vue";
import Ex03Page from "./components/ex03/Ex03Page.vue";

export default {
  name: "app",
  components: {
    Ex01Page,
    Ex02Page,
    Ex03Page
  }
};
</script>

<style>
</style>
