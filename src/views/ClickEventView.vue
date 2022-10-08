<template>
    <div>
        <p>{{message}}</p>
        <!-- v-on: = @  임 -->
        <button v-on:click="message = 'Hi'">클릭하세요</button>
        <!--<button @click="message = 'Hello'">클릭하세요</button>-->
        <button @click="click('Hello World')">클릭하세요</button>

        <p>{{counter}}</p>
        <button @click="counter++">증가</button>

        <!-- vue는 독특하게 decrease() 쓰지 않아도 됌 -->
        <button @click="decrease">감소</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
        return{
            message: "Hello",
            counter: 0,
        }
    },

    methods: {
        click(value) {
            this.message = value;
        },

        decrease() {
            this.counter--;
        }
    }
  }
  </script>
  
  <style scoped>
  </style>
  