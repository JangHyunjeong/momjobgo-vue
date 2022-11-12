import Vue from 'vue';
import Vuex from 'vuex';
//import user from './modules/user';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '**유저명',
    id: '**아이디',
    token: '**토큰',
  },
  getters: {
    name(state){
      return state.name;
    },
    id(state){
      return state.id;
    },
    token(state){
      return state.token;
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
