<template>
  <div id="app">
    <menu-bar></menu-bar>

    <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>

    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import MenuBar from "./components/MenuBar.vue";
export default {
  name: "app",
  computed: {
    ...mapState({
      alert: (state) => state.alert,
    }),
  },
  methods: {
    ...mapActions({
      clearAlert: "alert/clear",
    }),
  },
  data() {
    return {
      msg: "หน้าบริจาค",
    };
  },
  watch: {
    $route(to, from) {
      this.clearAlert();
    },
  },
  components: {
    MenuBar,
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1,
h3 {
  color: white;
  font-family: "Mitr";
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
