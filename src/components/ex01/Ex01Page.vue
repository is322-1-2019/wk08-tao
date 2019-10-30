<template>
  <div class="card-content">
    <nav-bar></nav-bar>
    <name-section
      class="card"
      v-model="fullName">
    </name-section>
    <p> {{ fullName }} </p>
  </div>
</template>
<script>
import NameSection from './NameSection.vue';
import NavBar from "../NavBar.vue";

export default {
  components: {
    NameSection,
    NavBar
  },
  data() {
    return {
      fullName: {
        title: '',
        firstName: '',
        lastName: '',
      }
    };
  }
}
</script>
