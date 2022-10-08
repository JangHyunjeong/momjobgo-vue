<template>
    <div>
        <!-- === 자료형까지 비교  -->
        <!-- v-if
            1. 태그 자체가 사라진다.
            2. 그릴 때 시간이 조금 더 오래 걸린다.  -->
        <p v-if="renderType === 1" id="1">
            현재 renderType은 1입니다.
        </p>
        <p v-else-if="renderType === 2" id="2">
            현재 renderType은 2입니다.
        </p>
        <p v-else id="3">
            renderType: {{renderType}}
        </p>

        <!-- v-model.number 자료형을 number로 설정해준다.  -->
        <p> 
            <input type="text" v-model.number="renderType" />
        </p>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            renderType: 1,
        };
    },
}   
</script>