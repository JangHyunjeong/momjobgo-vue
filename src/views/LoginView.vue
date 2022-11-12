<template>
  <div>
    <h2>로그인</h2>
    아이디 : <input type="text" v-model="id">
    <br>
    비밀번호 : <input type="text" v-model="password">
    <br>
    <button @click="login">로그인</button>
  </div>
</template>

<script>
// import axios from "axios";
import { callApi } from "@/plugins/axios";

export default {
    data() {
        return {
            id: '',
            password: '',
            token:'',
        }
    },
    methods: {
      async login() {
        const response = await callApi({
          url: '/auth/user',
          method: 'post',
          data: {
            id: this.id,
            pwd: this.password,
          },
        });
        console.log(response);
        this.token = response.data.token;
        console.log(this.token);

        // const response2 = await callApi({
        //   url: "/api/auth/user",
        //   method: "GET",
        // });
        // console.log(response2);
        //   const token = response.data.token;
      }
    }


}
</script>

<style>

</style>