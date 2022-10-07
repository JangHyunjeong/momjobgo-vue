<template>
    <div>
      <p>
          <!-- 1. 일반 텍스트는 이렇게 걍 쓰면됨 -->
          <span>{{firstMessage}}</span>
      </p>
      <p>
          <!-- 2. 그런데 html의 경우, v-html 으로 써야한다.
          그런데 이렇게 사용하는거는 위험해 -->
          <!-- 3. onClick을 봐 이게 바로 문제야. 
          악의적인 목적의 스크립트를 막을 수 없다.
          악의적인 목적으로 들어간 스크립트를 막을 수 없어. XSS 스크립트 -->
          <span v-html="html"></span>
      </p>
      <p>
          <!-- 4. {{}} 와 같지 -->
          <span v-text="html"></span>
      </p>
  
      <p>
          <!-- 5. 코드가 먹히지 않는다. 굳이,, vue가 필요 없는 부분에 사용 -->
          <span v-pre>{{firstMessage}}</span>
      </p>
  
      <p>
          <!-- 6. v-once -->
          <span v-once>{{text}}</span>
      </p>
  
      <p>
          <!-- 6. v-once 와 비교하기 -->
          <span>{{text}}</span>
      </p>
  
    </div>
  </template>
  
  <script>
  export default {
      data() {
          return {
              firstMessage: 'Hello World',
              html: '<span style="color:red" onClick="console.log(`test`)">HTML : </span><span>HTML</span>',
              text: '텍스트',
          }
      },
  
  
      created() {
          setTimeout(() => {
              this.text = '1234';
              // this -> 자기 자신
              console.log(this);
          }, 3000);
  
          // this를 잡기 애매함. 그래서 화살표 함수를 쓴다.
          // setTimeout(function () {
          //     this.text = '1234'
          //     // this -> 최상위 클래스 (windows 가 된다.)
          //     console.log(this);
          // }, 1000)
      }
  }
  </script>
  
  <style>
  
  </style>