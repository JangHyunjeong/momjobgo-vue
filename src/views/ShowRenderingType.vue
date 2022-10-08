<template>
    <div>
        <!-- v-show 는 show hide 방식 
        탭같은 애들은 show hide 로 하는게 훨 낫지. 데이터가 없어지지 않도록! 
         -->
        <p v-show="renderType2 === 1" id="1">
            현재 renderType2은 1입니다.
        </p>
        <p v-show="renderType2 === 2" id="2">
            현재 renderType2은 2입니다.
        </p>

        <!-- v-model.number 자료형을 number로 설정해준다.  -->
        <p> 
            <input type="text" v-model.number="renderType2" />
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            renderType2: 1,
        };
    },
}   
</script>