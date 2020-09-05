<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col_info col-lg-4" style="background-color:#4e89ae;">
          <h1 style="padding-top:20px">Login</h1>
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
              <button style="background-color:#ffa372" class="btn">Login</button>
              <router-link
                style="color:#ffa372"
                :to="{name: 'Register'}"
                class="btn btn-link"
              >Register</router-link>
            </div>
          </form>
        </div>
        <div class="col_pic col-lg-8" style="background-color:#43658b ;padding: 0px;">
          <img class="tri" src="src\assets\Tri.png" alt />
        </div>
      </div>
    </div>

    <!--<h1 style="color: red">Login</h1>

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
        <button class="btn btn-primary">Login</button>
        <router-link :to="{name: 'Register'}" class="btn btn-link">Register</router-link>
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
      },
    };
  },
  methods: {
    ...mapActions("alert", ["error"]),
    ...mapActions("account", ["login"]),
    handleSubmit(e) {
      if (this.form.email && this.form.password) {
        this.login(this.form);
      }
    },
  },
};
</script>

<style>
.tri {
  width: 850px;
}
</style>