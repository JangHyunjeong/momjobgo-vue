<template>
  <div id="app">
    <LayoutView v-if="hasToken"></LayoutView>
    <LoginView v-else></LoginView>
  </div>
</template>

<script>
import("./assets/css/style.css");
import LayoutView from "./views/layoutView/LayoutView.vue";
import LoginView from "./views/LoginView.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    LayoutView,
    LoginView,
  },

  computed: {
    ...mapGetters("user", ["hasToken"]),
  },
};
</script>
