<template>
    <div>
        <h2>모니터 뷰</h2>
        <span>state -> count -> {{ count }}</span>
        <br>
        <span>getters -> formCnt : {{ formCnt }}</span>
        <br>
        <br>
        <span>{{ message }}</span>
        <br/>
        <span>{{ name }}  {{ id }}</span>
    </div>
  </template>
  
  <script>
  // 방법2  : mapState불러오기
  import { mapGetters, mapState } from 'vuex';

  export default {
    computed : {
        // 방법1  : $store생성
        // count() {
        //     return this.$store.state.count;
        // }

        // formCnt(){
        //     return this.$store.getters.formCnt;
        // }

        // 방법2
        ...mapState(['count', 'message']),
        ...mapGetters(['formCnt']),
        // 방법 1 . namespaced로 구분된 형태는 name을 지정하여 구분해야한다.
        ...mapGetters('user', ['name','id']),  
        // 방법 2
        ...mapGetters({userName: 'user/name'}),
    },
  }
  </script>
  
  <style>
  
  </style>