<template>
  <div class="login-wrap">
    <h1 class="sub-title">로그인</h1>
    <div class="login-box c-card">
      <dl>
        <dt>아이디</dt>
        <dd><input type="text" v-model="id" /></dd>
      </dl>
      <dl>
        <dt>비밀번호</dt>
        <dd>
          <input type="password" v-model="password" />
        </dd>
      </dl>
      <button class="btn-ok" @click="login">로그인</button>
    </div>
  </div>
</template>

<script>
import { callApi } from "@/plugins/axios";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      id: "",
      password: "",
    };
  },

  methods: {
    ...mapActions("user", ["setToken", "setName", "setId"]),

    async login() {
      const response = await callApi({
        url: "/auth/user",
        method: "post",
        data: {
          id: this.id,
          pwd: this.password,
        },
      });

      console.log(response.data);
      this.setToken(response.data.token);

      const userInfo = await callApi({
        url: "/api/auth/user",
        method: "GET",
      });

      console.log(userInfo.data);
      this.setId(userInfo.data.id);
      this.setName(userInfo.data.name);
    },
  },
};
</script>

<style></style>
