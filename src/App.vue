<template>
  <div id="app">
     <!-- 1-1. props : 부모 컴포넌트가 가지고 있는 데이터를 자식에게 넘겨주는것. -->
      <!-- 1-3. 여기서 v-bind 형태로 넣어주고..  -->
      <!-- 3-1. 바인딩 해주지 않으면 특히 숫자 형을 제대로 읽어오지 못하는거같아 :message="message" -->
     <ChildView
        :message="message"
     ></ChildView>
     <input type="text" v-model="message">
  </div>
</template>

<script>
import ChildView from './views/ChildView.vue'

export default {
  name: 'App',
  components: {
    ChildView
  },
  data(){
    return {
      // 1-2. 부모가 가진 message
      message: "Hello World",
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
