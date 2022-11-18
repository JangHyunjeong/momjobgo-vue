<template>
  <div>
    <div class="app-header">
      <button class="btn-logout" @click="logout">로그아웃</button>
    </div>

    <div class="router-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions({ setToken: "user/setToken" }),
    logout() {
      if (confirm("로그아웃 하시겠습니까?")) {
        this.setToken("");
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding: calc(56px + 30px) 20px;
}
</style>
