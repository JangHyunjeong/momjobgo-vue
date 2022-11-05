import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';

Vue.use(Vuex)

export default new Vuex.Store({
  // 유저정보, 목록 등 전역적으로 많이 쓰일것 같은 데이터를 넣는다.


  state: {
    // 필요한 데이터변수는 여기에 넣어둔다.
    count: 1,
    message: '',
  },
  getters: {
    // wrapping해주는 애
    // state파라미티로 붙이기 필수
    formCnt(state){
      return String(state.count).padStart(2,'0');
    }
  },
  mutations: {
    // 함수, state를 가지고 조작하는 함수
    // state 파라미터로 붙이기 필수
    // value를 받아오고 싶다면 2번째 파라미터로 받아오기
    increase(state){
      state.count++;
    },
    decrease(state){
      state.count--;
    },
    changeMsg(state, value){
      state.message = value;
    }
  },
  actions: {
    // mutations 에 비해 추적이 용이함
    increase(context){
      context.commit('increase')
      // setTimeout(() => {
      // }, 2000);
    },
    //context : mutaition 을 실행시켜주는 도구
    decrease(context){
      context.commit('decrease')
    },
    changeMsg(context, value){
      context.commit('changeMsg', value);
    }
  },
  modules: {
    user,
  }
})
