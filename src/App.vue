<template>
  <div id="app">
    {{fullName}}<br />
    fullName <input type="text" v-model="fullName" /><br />
    lastName <input type="text" v-model="lastName" /><br />
    firstName <input type="text" v-model="firstName" /><br />

    <hr />
    검색하기
    <input type="text" v-model="searchKeyword">
    <ul>
      <li v-for="item in filteredList" :key="item.value">
        {{item.label}}
      </li>
    </ul>

    <!-- 
      1. computed는 lastName firstName 이 바뀔때마다 실행이 되는구나! 
      2. 배열을 검색할때 많이 사용
    -->
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      lastName: "홍",
      firstName: "길동",
      searchKeyword: "",

      fruits : [
        {value: "apple", label: "사과"},
        {value: "orange", label: "오렌지"},
        {value: "banana", label: "바나나"},
        {value: "grape", label: "포도"}
      ]
    }
  },
  computed : {
    // 필터링하기
    filteredList() {
      return this.fruits.filter((fruit) =>
        fruit.label.includes(this.searchKeyword)
      );
    },
    // fullName() {
    //   //console.log('computed 실행');
    //   return this.lastName + this.firstName;
    // }
    fullName : {
      // 1. 셋팅
      set(value) {
        const fullNameSplit = value.split(" ");
        this.lastName - fullNameSplit[0];
        this.lastName = fullNameSplit[1] + fullNameSplit[2];
      },
      // 2. 출력되어야 할 값
      get() {
        return `${this.lastName} ${this.firstName}`;
      }
    }
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
