<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <br />
    <button @click="goToHiddenPage">
      숨겨진 페이지로
    </button>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  },
  methods : {
    // 함수로 라우터 변경
    goToHiddenPage(){
      //this.$router.push("/hidden");
      this.$router.push({name : "hidden"});
    },

    // 5초 후 hidden페이지로 링크 전환 (넷플릭스 같이.. )
    created() {
      setTimeout(() => {
          this.goToHiddenPage();
      }, 5000);
    }
  }
}
</script>
