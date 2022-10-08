<template>
    <div>
        <p>
            <!-- 값을 쓸때 : 이걸 제일 많이 사용함 -->
            <input type="text" @keyup="handleEvent('keyup', $event)">
        </p>
        <p>
            <input type="text" @keydown="handleEvent('keydown', $event)">
        </p>
        <p>
            <!-- enter 눌렀을때 같이.. 최종의 값을 받아오고 싶을떄.  -->
            <input type="text" @keypress="handleEvent('keypress', $event)">
        </p>

        <hr />

        <!-- @keyup.enter : 엔터 감지 -->
        <!-- @keyup.버튼이름 : 해당 버튼을 감지한다. -->
        <p>
            <input 
                type="text" 
                @keyup.enter="handleEventForKeyUp('엔터입력')"
                @keyup.up="handleEventForKeyUp('방향키 up')"
                @keyup.down="handleEventForKeyUp('방향키 down')"
                @keyup.left="handleEventForKeyUp('방향키 left')"
                @keyup.right="handleEventForKeyUp('방향키 right')"
                @keyup.delete="handleEventForKeyUp('delete, backspace')"
                @keyup.esc="handleEventForKeyUp('esc')"
                @keyup.space="handleEventForKeyUp('space')"
                >
            <input 
                type="text"
                @keyup.ctrl.enter="handleEventForKeyUp('crtl + enter 복합키 입력')"
                @keyup.ctrl.esc="handleEventForKeyUp('crtl + esc 복합키 입력')"
            >
        </p>

    </div>
</template>

<script>
  export default {
    data() {
        return{
          
        }
    },

    methods: {
        handleEvent(eventName, e) {
            console.log(eventName, e.target.value);
        },
        handleEventForKeyUp(message) {
            console.log(message);
        }
    }
  }
  </script>
  
  <style scoped>
  </style>