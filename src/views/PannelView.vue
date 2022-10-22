<template>
  <div>
    <p>name : {{ form.name }}</p>
    <p>age : {{ form.age }}</p>
    <p>email : {{ form.email }}</p>
  </div>
</template>

<script>
export default {
    // 부모 컴포넌트에서 provide로 정의한 값을 inject를 사용해서 가져온다..> 그런데 자식에서 값을 바꾸는게 좋지는 않은거 같다..
    inject: ["form"],    
}
</script>

<style>

</style>