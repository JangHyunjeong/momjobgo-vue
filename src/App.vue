<template>
  <div>
    <LayoutView v-if="isLogin"></LayoutView>
    <LoginView v-else></LoginView>
    {{ $store.getters.name }}
    {{ $store.getters.id }}
    {{ $store.getters.token }}
  </div>
</template>

<script>
//import { mapGetters } from "vuex";
import LayoutView from './views/layoutView/LayoutView.vue';
import LoginView from './views/LoginView.vue';

export default {
  name: 'App',
  
  data(){
    return{
      isLogin: false,
    }
  },
  components: {
    LayoutView,
    LoginView,
  },

  methods:{
    //...mapGetters(['name', 'id', 'token']),
  }

};
</script>
