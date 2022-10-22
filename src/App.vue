<template>
  <div id="app">
    <PannelView></PannelView>
    <FormView></FormView>
  </div>
</template>

<script>
import PannelView from './views/PannelView.vue';
import FormView from './views/FormView.vue';

export default {
  name: 'App',
  components: {
    PannelView,
    FormView
  },

  data() {
    return {
      form: {
        name:'홍길동',
        age:0,
        email:'hong@nnn.com',
      }
    };
  },

  // provide - inject 구조를 method로 바꿔볼라고.. 넣은것.. 
  // changeInput 함수를 만들어서 사용한 방법 ... 부모가 수정의 주체가 되고, 수정의 추적을 높이기 위해서 이렇게 작성하는 것이 더 좋다!!
  methods: {
    changeForm(name, value) {
      this.form[name] = value;
    }
  },

  // 자식 컴포턴트에서 inject로 해당 값을 가져올수 있다.
  // 자식에게 보내고싶은 애들을 여기에다가 선언
  provide() {
    return {
      form: this.form,
      changeForm: this.changeForm,
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
