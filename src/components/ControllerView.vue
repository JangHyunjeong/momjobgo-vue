<template>
  <div>
    <h2>컨트롤러 뷰</h2>
    <button @click="increase">증가</button>
    <button @click="decrease">감소</button>

    <br>
    <br>    
    <input type="text" @input="(e) => changeMsg(e.target.value)">
  </div>
</template>

<script>
//import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';


export default {
    methods: {
        // 방법 1 . 아래와 같은 방법으로 $store를 사용해서 사용할 수 있지만, 좋은 방법은 아님
        // increase() {
        //     this.$store.state.count++;
        // },

        // decrease() {
        //     this.$store.state.count--;
        // },


        // mutations를 불러올때 commit 사용
        // increase() {
        //     this.$store.commit("increase");
        // },

        // decrease() {
        //     this.$store.commit("dscrease");
        // },

        // increase() {
        //     this.$store.dispatch('increase');
        // },
        // decrease() {
        //     this.$store.dispatch('decrease');
        // },
        
        //...mapMutations(['increase','decrease','changeMsg']),
        ...mapActions(['increase','decrease','changeMsg']),
    }
}
</script>

<style>

</style>