<template>
  <div class="card-content">
    <nav-bar></nav-bar>
    <b-field label="Username" expanded>
      <b-input v-model="form.username" maxlength="30" expanded></b-input>
    </b-field>
    <b-field label="Password" expanded>
      <b-input type="password" v-model="form.password" maxlength="16" password-reveal></b-input>
    </b-field>
    <b-field v-if="$v.form.$dirty && $v.form.$invalid">
      <b-message type="is-danger" has-icon v-if="!$v.form.username.required">กรุณาใส่ชื่อผู้ใช้</b-message>
      <b-message
        type="is-danger"
        has-icon
        v-if="!$v.form.username.between"
      >ชื่อผู้ใช้ต้องเป็น email</b-message>
      <b-message type="is-danger" has-icon v-if="!$v.form.password.required">กรุณาใส่รหัสผ่าน</b-message>
      <b-message
        type="is-danger"
        has-icon
        v-if="!$v.form.password.between"
      >รหัสผ่านต้องอยู่ระหว่าง 4-16 ตัวอักษร</b-message>
    </b-field>
    <b-field class="buttons" grouped>
      <b-button type="is-primary" @click="touch">Login</b-button>
      <b-button type="is-primary" @click="reset">Reset</b-button>
    </b-field>
    <p>Dirty : {{ $v.form.$dirty }}</p>
    <p>Invalid : {{ $v.form.$invalid }}</p>
    <p>Require username: {{ $v.form.username.required }}</p>
    <p>User name between 8-30: {{ $v.form.username.between }}</p>
    <p>Require password: {{ $v.form.password.required }}</p>
    <p>Password between 4-16: {{ $v.form.password.between }}</p>
  </div>
</template>
<script>
import NavBar from "./NavBar.vue";

import { required, between , email} from "vuelidate/lib/validators";

export default {
  components: {
    NavBar
  },
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  validations: {
    form: {
      username: {
        required,
        between: email
      },
      password: {
        required,
        between: between(4, 16)
      }
    }
  },
  methods: {
    touch() {
      this.$v.form.$touch();
    },
    reset() {
      this.$v.form.$reset();
    }
  }
};
</script>