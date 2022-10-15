<template>
  <div id="app">
    <!-- 값이 변경되는것을 감자하는 것이 watch 다. -->
    <input type="text" v-model="message" />
    <hr />
    <br />
    categoryList1 : 
    <select v-model="category1">
      <option 
        v-for="item in categoryList1" 
        :key="item.value"
        :value="item.value"
      >
      {{item.label}}
    </option>
    </select>
    <br />

    categoryList2 : 
    <select name="" id="">
      <option 
        v-for="item in categoryList2" 
        :key="item.value"
        :value="item.value"
      >
      {{item.label}}
    </option>
    </select>



    <hr />
    <div>
      오브젝트의 변화를 감지해보자<br/>
      lastName : 
      <input type="text" v-model="name.lastName"><br/>
      firstName : 
      <input type="text" v-model="name.firstName">
    </div>


    <hr />
    <!-- <div>
      배열의 변화를 감지해보자 -보류중...<br/>
      {{array}}
      <br />
      <button></button>
    </div> -->

    <hr />
  

  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      message: "",

      categoryList1 : [
        {value: "IT", label: "IT직군"},
        {value: "건설", label: "건설"},
      ],
      // categoryList1에서 선택한 value 가 category1에 들어감.
      category1 : "IT",

      // category1 의 value에 따라 다른 값을 넣고싶다.
      categoryList2 : [],


      // categoryList2 의 후보
      ITList : [
        {value: "vue", label: "vue"},
        {value: "react", label: "react"},
      ],
      ITListSelect : "",
      
      ConstructorList : [
        {value: "1", label: "1"},
        {value: "2", label: "2"},
      ],
      ConstructorSelect : "",
      

      name : {
        lastName: "",
        firstName: "",
      }
    };
  },
  watch : {
    // oldvalue사용해서 이전 값도 가져 올 수 있다. 
    message : function(value, oldvalue){
      console.log(value, oldvalue);
    },

    // value 는 select의 (value)값이 들어감.
    category1: {
      // 10. 초기값에 따라 이벤트를 실행햐고 싶을때.. 
      // immediate: true,
      // function 을 handler안에 써주기
      immediate: true,
      handler: function(value) {
        if(value === "IT"){
          this.categoryList2 = this.ITList;
        } else if (value === "건설") {
          this.categoryList2 = this.ConstructorList;
        } else {
          this.categoryList2 = [];
        }
      },
    },

    // 5-1. 이런 식으로 오브젝트 전체로 잡으면 하나하나의 변화를 감지하지 못한다.
    // name: function(value){
    //   console.log(value);
    // },

    // 5-2. 그래서 따옴표 "" 안에 객체 이름을 넣어서 직접 찍어줘야 감지할 수 있다. 
    // "name.lastName": function(value){
    //   console.log(value);
    // },
    // "name.firstName": function(value){
    //   console.log(value);
    // },

    // 5-3. hander와 deep 속성을 이용하면  object의 변화도 감지 할 수 있다
    name: {
      deep: true,
      handler: function(value){
        console.log(value);
      },
    }

    // array - 보류
    // array: function(value) {
    //   console.log(value);
    // },
  },

  // array - 보류
  // methods : {
  // push() 는 watch에서 감지할 수 있다 .
  // 배열 변경 감지 함수들 몇개들... 있음.. push pop shift등.. 
  //   pushArray() {
  //   }
  // }

  /*
  다음과 같이 computed 로도 쓸 수 있다. 
  computed : {
    category2() {
      if(this.category1 === 'IT') {
        return this.ITList;
      } else if(this.category1 === '건설') {
        return this.ConstructorList;
      } else {
        return [];
      }
    }
  }*/
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
