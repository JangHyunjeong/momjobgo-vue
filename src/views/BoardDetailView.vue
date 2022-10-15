<template>
    <div>
        <!-- 1. 키는 url의 key는 다음과 같은 방식으로 가져올수 있습니다. 
        저 key는 index.js에서 정의 해 두었습니다.  -->
        {{$route.params.key}}

        <!-- 2. title값도 query에 넣으면 가져올 수 있습니다. 
        BoardView.vue 참고 -->
        {{$route.query.title}}
        <h5> 게시물 상세 페이지 입니다.</h5>

        <button @click="$router.push({name: 'board'})">이전으로</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>