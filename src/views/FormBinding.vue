<template>
    <div>
      <!-- 1. v-model 양방향 바인딩 -->
      <!-- 일반적인 경우는 v-model을 사용하는것이 맞음 -->
      <p>
          <input type="text" name="" id="" v-model="message">
      </p>
      <p>
          <span>{{message}}</span>
      </p>
  
      <!-- 1-1. 영어는 바로 받아오지만, 한글은 좀 딜레이된다. 
      바로 필요할때는
      한글일때는 아래와 같은 방식으로 (이건 단방향이다.) -->
      <!-- <input type="text" name="" id="" 
      @input="(e) => (this.message = e.target.value)"> -->
      <!-- <p>
          <span>{{message}}</span>
      </p> -->
  
      <!-- 2. 숫자타입으로 인식시키기 위해 input type을 number로 붙여준다. -->
      <p>
          <input type="number" name="" id="" v-model="number">
      </p>
      <p>
          <span>{{number}}</span>
      </p>
  
      <p>
          <textarea 
          name="" 
          id="" 
          cols="30" 
          rows="10"
          v-model="textarea"
          ></textarea>
      </p>
      <p>
          {{textarea}}
      </p>
  
      
    </div>
  </template>
  
  <script>
  export default {
      data() {
          return {
              message: '',
              number: 0,
              textarea: '',
          }
      },
  }
  </script>
  
  <style>
  
  </style>