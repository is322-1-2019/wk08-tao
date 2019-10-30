<template>
  <div class="card-content">
    <nav-bar></nav-bar>
    <display-section class="card"></display-section>
    <number-input-section class="card"></number-input-section>
  </div>
</template>
<script>
import DisplaySection from './DisplaySection.vue';
import NumberInputSection from './NumberInputSection.vue';
import NavBar from "../NavBar.vue";

export default {
  components: {
    DisplaySection,
    NumberInputSection,
    NavBar
  }
}
</script>
