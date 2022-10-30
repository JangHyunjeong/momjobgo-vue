<template>
  <div id="app" class="container">
    <nav>
      <router-link to="/promise">promise</router-link> |
      <router-link to="/">웹문서 검색</router-link> |
      <router-link to="/video">동영상 검색</router-link> |
      <router-link to="/login">로그인</router-link> |
      <router-link to="/map">지도</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default{
  created() {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.VUE_APP_KAKAO_JAVASCRIPT_KEY);
    }
    
  },
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
}
body {
    text-align: left;
    font-size: 14px;
    color: #000;
}
ul, li{
    list-style: none;
}
a {
    text-decoration: none;
    color: inherit;
}
a:hover{
text-decoration: underline;
}
.container {
    width: calc(100% - 40px);
    max-width: 1200px;
    margin: 60px auto;
}
h1 {
    margin-bottom: 50px;
}
nav {
    margin-bottom: 50px;
}

.search-box {
    margin-bottom: 50px;
}
.search-list > li {
    margin-bottom: 30px;
}
.search-list > li:last-child {
    margin-bottom: 0;
}
</style>
