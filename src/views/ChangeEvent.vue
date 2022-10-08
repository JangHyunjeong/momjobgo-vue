<template>
    <div>
        <!-- 원래는 v-model이 쉽게 쓸수 있는 법이기는 함. -->
        <!-- 만약 다른 파라미터를 넣고싶다면???? 
        :: changeSelect($event, 'param') 으로 -->
        <select 
            :value="selectedValue" 
            @change="changeSelect($event, 'param')"
        >
            <option value="apple">사과</option>
            <option value="orange">오렌지</option>
            <option value="peach">복숭아</option>
            <option value="grape">포도</option>
        </select>
        <p>{{selectedValue}}</p>

        <!-- 한글을 바로 나오게하기 위해 v-model 사용하지 않고 @input 사용하는것이 좋아 -->
        <input 
        type="text" 
        :value="text" 
        @input="(e) => (text = e.target.value)"
        >
        {{text}}

        <br />
        <input 
        type="text" 
        v-model="text2"
        >
        {{text2}}
    </div>
</template>

<script>
  export default {
    data() {
        return{
           selectedValue:"",
           text:"",
           text2: "",
        }
    },

    methods: {
        // e를 넣으면 event가 자동으로 돌아간다..
        changeSelect(e) {
            console.log(e.target.value);
            this.selectedValue = e.target.value;
        }
    }
  }
  </script>
  
  <style scoped>
  </style>