<template>
  <div class="card-content">
    <name-section
      class="card"
      v-model="fullName">
    </name-section>
    <p> {{ fullName }} </p>
  </div>
</template>
<script>
import NameSection from './NameSection.vue';

export default {
  components: {
    NameSection,
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
