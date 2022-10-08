<template>
    <div>
      <ul>
        <!--v-for 사용시, key 동적으로 생성 필수 -->
        <!-- index 함께 쳐주면 index를 파라미터로 가져오면 바로 가져올 수 있다. -->
        <li v-for="(item, index) in fruits" :key="item.key">
          {{index + 1}}. {{item.text}}
          <!-- 보통 object를 뿌리는 형태라  v-model 안에 오브젝트로..   
            v-model 사용시, 데이터 자체가 바뀐다. 
          -->
          <input type="text" v-model="item.text" />
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
      data() {
        return {
          fruits: [
            {key: 1, text: "사과"},
            {key: 2, text: "오렌지"},
            {key: 3, text: "복숭아"},
            {key: 4, text: "포도"}
          ]
        }
      }
  }
  </script>
  
  <style>
  </style>
  