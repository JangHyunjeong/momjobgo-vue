<template>
  <div>
    <h1>Promise</h1>
    <p>api를 가져와서 쓸때는 설명서를 잘.. 읽으며,, 잘,, 따라하자!</p>
    <p>보안이 필요한 key들은 .env.local에 넣어두어, 필요할때마다 꺼내쓰기 - 커밋 x</p>
    <br>
    <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">
      Promise 설명 읽어보기
    </a>
    <br>  
    <a href="https://axios-http.com/kr/docs/intro" target="_blank">
      Axios 설명 읽어보기
    </a>
    <br>
    <a href="https://developers.kakao.com/" target="_blank">
      카카오 API
    </a>
  </div>
</template>

<script>
export default {

    created() {
      // promise는 비동기적인 순서를 강제시켜준다.
      // 통신은 순서를 보장하지 않는다.
      // 순선를 보장하기 위해 promise, then, await를 사용할 수 있다.. 

      // this.getData();
      // this.getPromiseAll();
    },

    methods: {
    getPromiseAll() {
      const a = new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            resolve(1);
          } catch (error) {
            reject(error);
          }
        }, 1000);
      });

      const b = new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            resolve(2);
          } catch (error) {
            reject(error);
          }
        }, 2000);
      });

      Promise.all([a, b]).then((values) => {
        console.log(values);
      });
    },

    async getData() {
      const a = await this.getAData();
      console.log(a);
      const b = await this.getBData();
      console.log(b);
    },

    getAData() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            resolve(1);
          } catch (error) {
            reject(error);
          }
        }, 1000);
      });
    },

    getBData() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            resolve(2);
          } catch (error) {
            reject(error);
          }
        }, 2000);
      });
    },
  },
}
</script>

<style>

</style>