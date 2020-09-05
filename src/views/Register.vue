<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col_info col-lg-4" style="background-color:#43658b;">
          <h1 style="padding-top:20px">Register</h1>
          <form @submit.prevent="handleSubmit()">
            <div class="form-group">
              <label for>Email Address *</label>
              <input
                type="text"
                class="form-control"
                placeholder="Your Email *"
                v-model="form.email"
              />
            </div>
            <div class="form-group">
              <label for>Password *</label>
              <input
                type="password"
                class="form-control"
                placeholder="Your Password *"
                v-model="form.password"
              />
            </div>
            <div class="form-group">
              <label for>Display Name *</label>
              <input
                type="text"
                class="form-control"
                placeholder="Your name *"
                v-model="form.displayName"
              />
            </div>
            <div class="form-group">
              <button style="background-color:#ffa372" class="btn">Register</button>
            </div>
          </form>
        </div>
        <div class="col_pic col-lg-8" style="background-color:#ed6663 ;padding: 0px;">
          <img class="reg" src="src\assets\regnew.png" alt />
        </div>
      </div>
    </div>
    <!--
    <form @submit.prevent="handleSubmit()">
      <div class="form-group">
        <label for>Email Address *</label>
        <input type="text" class="form-control" placeholder="Your Email *" v-model="form.email" />
      </div>
      <div class="form-group">
        <label for>Password *</label>
        <input
          type="password"
          class="form-control"
          placeholder="Your Password *"
          v-model="form.password"
        />
      </div>
      <div class="form-group">
        <label for>Display Name *</label>
        <input
          type="text"
          class="form-control"
          placeholder="Your name *"
          v-model="form.displayName"
        />
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Register</button>
      </div>
    </form>-->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        displayName: "",
      },
    };
  },
  methods: {
    ...mapActions("account", ["register"]),
    ...mapActions("alert", ["error"]),
    handleSubmit() {
      if (this.form.email && this.form.password && this.form.displayName) {
        this.register(this.form);
      } else {
        this.error("All fields are reqiured");
      }
    },
  },
};
</script>

<style>
.reg {
  width: 850px;
}
label {
  color: white;
}
</style>