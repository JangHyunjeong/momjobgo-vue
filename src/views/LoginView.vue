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
      <div class="login-join-btns">
        아직 회원이 아니세요?
        <router-link to="/join" class="btn-join">회원가입</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { callLogin, callUserInfo } from "@/services/auth";

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
      const response = await callLogin({
        id: this.id,
        pwd: thi

        s.password,
      });
      try {
        this.setToken(response.data.token);
      } catch (error) {
        alert("네트워크 에러");
      }

      try {
        const userInfo = await callUserInfo();
        this.setId(userInfo.data.id);
        this.setName(userInfo.data.name);
        this.$router.push({ name: "home" });
      } catch (error) {
        alert("네트워크 에러");
      }
    },
  },

  computed: {
    ...mapGetters("user", ["hasToken"]),
  },

  created() {
    // 로그인 상태에서 해당페이지 접근 금지
    if (this.hasToken) {
      this.$router.push({ name: "home" });
    }
  },
};
</script>

<style></style>
