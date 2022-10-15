<template>
  <div>
    <h2>자식 컴포넌트 입니다. </h2>
    <!-- 1-5. 여기서 사용! -->
    <!-- 2-1. default를 정해야하는 이유 : 부모 컴포넌트에서 값을 바인딩 해주지 않으면 오류가 생길 여지가 있음 -->
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
    // 1-4. 여기 props 에서 불러온 후 type과 default를 지정하면 컴포넌트에서 사용할 수 있다.
    props : {
        message : {
            type: String,
            default: "안녕하세요",
            require: true,  // 필수로 들어가야하는값(경고만 내지만 오류는 아님)
            // validator(value) {
            //     return value === 1;
            // }
        }
    }
}
</script>

<style>

</style>