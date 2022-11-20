<template>
  <div id="app">
    <LayoutView v-if="hasToken"></LayoutView>
    <JoinView v-if="!hasToken && this.$route.path === '/join'"></JoinView>
    <LoginView v-if="!hasToken && this.$route.path === '/login'"></LoginView>
  </div>
</template>

<script>
import("./assets/css/style.css");
import LayoutView from "./views/layoutView/LayoutView.vue";
import LoginView from "./views/LoginView.vue";
import JoinView from "./views/JoinView.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    LayoutView,
    LoginView,
    JoinView,
  },

  computed: {
    ...mapGetters("user", ["hasToken"]),
  },
};
</script>
