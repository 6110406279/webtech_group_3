<template>
  <div>
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" width="60px" />
      </a>

      <div class="navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Donate</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/Donate">Donate Page #1</a>
              <a class="dropdown-item" href="/Donate2">Donate Page #2</a>
              <a class="dropdown-item" href="/Donate3">Donate Page #3</a>
              <a class="dropdown-item" href="/Donate4">Donate Page #4</a>
            </div>
          </li>

          <li class="nav-item" v-if="!user">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>

          <li class="nav-item" v-if="user">
            <router-link to="/logout" class="nav-link">Logout</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("account", ["user"]),
  },
};
</script>

<style>
.navbar-collapse {
  font-family: "Mitr";
}
</style>