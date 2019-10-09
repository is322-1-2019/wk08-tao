<template>
  <div class="card-content">
    <b-field label="แสดงรายชื่อทั้งหมด" v-if="people.length">
      <b-table :data="people" :columns="columns"></b-table>
    </b-field>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      columns: [
        { field: "title", label: "คำนำหน้า" },
        { field: "firstName", label: "ชื่อ" },
        { field: "lastName", label: "นามสกุล" },
        { field: "isActive", label: "Active" }
      ]
    };
  },
  computed: {
    ...mapState("people", ["people"])
  }
};
</script>