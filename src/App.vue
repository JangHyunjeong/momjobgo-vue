<template>
  <div id="app">
    <!-- <DataBinding></DataBinding> -->
    <!-- <FormBinding1></FormBinding3> -->
    <!-- <FormBinding3></FormBinding3> -->
    <!-- <FormBinding4></FormBinding4> -->
    <ListRenderingForObject></ListRenderingForObject>
  </div>
</template>

<script>
import ListRenderingForObject from "@/components/ListRenderingForObject.vue";

export default {
  components: {
    ListRenderingForObject,
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>