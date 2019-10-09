<template>
  <div class="card-content">
    <display-section class="card"></display-section>
    <number-input-section class="card"></number-input-section>
  </div>
</template>
<script>
import DisplaySection from './DisplaySection.vue';
import NumberInputSection from './NumberInputSection.vue';

export default {
  components: {
    DisplaySection,
    NumberInputSection,
  }
}
</script>
