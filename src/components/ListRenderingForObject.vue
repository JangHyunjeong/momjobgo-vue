<template>
    <div>
      <ul>
        <li v-for="(item, key, index) in fruits" :key="key">
          {{item}} , {{key}} , {{index}}
          <!-- object 형태틸때는 다음과 같은 형태로 사용한다. 
          v-model="fruits[key]"
          -->
          <input type="text" v-model="fruits[key]"/>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
      data() {
        return {
          fruits: {
            apple: "사과",
            orange: "오렌지",
            peach: "복숭아",
            grape: "포도",
          }
        }
      },

      created() {
        console.log(this.fruits["apple"]);
      }
  }
  </script>
  
  <style>
  </style>
  