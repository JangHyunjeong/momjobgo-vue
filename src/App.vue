<template>
  <div id="app">
    <!-- <ClickEventView></ClickEventView> -->
    <!-- <ChangeEvent></ChangeEvent> -->
    <KeyEvent></KeyEvent>
  </div>
</template>

<script>
//import ClickEventView from './views/ClickEventView.vue';
// import ChangeEvent from './views/ChangeEvent.vue';
import KeyEvent from './views/KeyEvent.vue';

export default {
  data() {
    return{

    }
  },
  components: {
    //ClickEventView,
    //ChangeEvent,
    KeyEvent
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
