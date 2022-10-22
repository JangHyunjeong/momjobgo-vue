<template>
  <div id="app">
    <!-- 
      solt - 부모의 영역에서 자식 컴포넌트를 정의 
      1) v-slot 은 # 으로 생략 가능
    -->
    <div><button @click="firstModal=true">첫번째 모달</button></div>
    <hr />
    <div><button @click="secondModal=true">두번째 모달</button></div>
    <ModalView :on="firstModal">
      <template v-slot:title>제목입니다.</template>
      <template #sub-title>부제목입니다.</template>
      <template>
        <div>
          <p>시작입니다.</p>
          <input type="text" name="" id="" value="안녕하세요">
          <p>끝</p>
          <!-- <button @click="firstModal=false">닫기</button> -->
          <button @click="firstModal=false">닫기</button>
        </div>
      </template>
    </ModalView>


    <ModalView :on="secondModal">
      <template v-slot:title>제목 하이이이.</template>
      <template #sub-title>부제목 하이.</template>
      <template>
        <div>
          <p>시작 하이</p>
          <input type="text" name="" id="" value="안녕하세요">
          <p>끝 바이</p>
          <button @click="secondModal=false">닫기</button>
        </div>
      </template>
    </ModalView>
  </div>
</template>

<script>
import ModalView from './components/ModalView.vue'

export default {
  data(){
    return{
      firstModal: false,
      secondModal: false
    }
  },
  name: 'App',
  components: {
    ModalView
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
