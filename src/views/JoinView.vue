<template>
  <div class="login-wrap">
    <h1 class="sub-title">회원가입</h1>
    <div class="login-box c-card">
      <p class="desc">
        <span class="color-red">*</span> 항목은 필수항목입니다.
      </p>
      <dl class="required">
        <dt><strong>아이디</strong></dt>
        <dd>
          <input type="text" v-model="user.id" />
        </dd>
      </dl>
      <dl class="required">
        <dt><strong>비밀번호</strong></dt>
        <dd><input type="password" v-model="user.pwd" /></dd>
        <p
          class="validation-txt no"
          v-if="
            /^[A-Za-z0-9]{6,12}$/.test(this.user.pwd) !== true &&
            this.user.pwd !== ''
          "
        >
          비밀번호는 영어나 숫자 6~12자리 이내로 입력해주세요.
        </p>
      </dl>
      <dl class="required">
        <dt><strong>비밀번호 확인</strong></dt>
        <dd>
          <input type="password" v-model="checkPwd" />
          <p
            class="validation-txt no"
            v-if="this.checkPwd !== '' && this.user.pwd !== this.checkPwd"
          >
            비밀번호 확인이 일치하지 않습니다.
          </p>
        </dd>
      </dl>
      <dl class="required">
        <dt><strong>이름</strong></dt>
        <dd><input type="text" v-model="user.name" /></dd>
      </dl>
      <div class="join-bottom-btn">
        <button class="btn btn-ok" @click="signUp">가입하기</button>
        <router-link to="login" class="btn btn-normal">이전으로</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { callSignUp } from "@/services/auth";

export default {
  data() {
    return {
      user: {
        id: "",
        pwd: "",
        name: "",
      },
      checkPwd: "",
    };
  },
  methods: {
    async signUp() {
      const response = await callSignUp({
        id: this.user.id,
        pwd: this.user.pwd,
        name: this.user.name,
      });

      if (response.status === 201) {
        alert("회원가입 완료");
        this.$router.push({ name: "home" });
      } else if (response.status === 422) {
        console.log(response.status);
      } else {
        alert("네트워크 장애");
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
