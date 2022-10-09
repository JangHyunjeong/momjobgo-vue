<template>
  <div id="app">
    <ToDoList></ToDoList>
  </div>
</template>

<script>
import ToDoList from './views/ToDoList.vue'

export default {
  name: 'App',
  components: {
    ToDoList
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-size: 16px;
  box-sizing: border-box;
}
ul, li{
  list-style: none;
}
button {
  cursor: pointer;
}
</style>
