<template>
  <div id="app">
    <IfRendering></IfRendering>
    <ShowRenderingType></ShowRenderingType>
  </div>
</template>

<script>
import IfRendering from './views/IfRendering.vue'
import ShowRenderingType from './views/ShowRenderingType.vue'

export default {
  name: 'App',
  components: {
    IfRendering,
    ShowRenderingType
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
