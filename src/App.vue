<template>
  <div id="app">
    <!-- vue 설치시, use history 사용 꼭해주세요. 안하면 주소 끝에 #같은게 붙음 -->
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/example">Example</router-link> |
      <router-link to="/board">Board</router-link>
    </nav> 

    <h2>====헤더인척==</h2>
    <!-- router로 연결된 component는 하단 router-view 컴포넌트에서 보이는 거다. -->
    <router-view/>
    <h2>==푸터인척==</h2>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
