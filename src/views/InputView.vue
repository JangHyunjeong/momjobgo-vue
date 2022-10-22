<template>
  <div>
    <!-- v-model을 사용한 방법    ...> InputView가 수정한다.. 안좋아,,,
    <p>name : <input type="text" v-model="form.name"></p>
    <p>age : <input type="text" v-model="form.age"></p>
    <p>email : <input type="text" v-model="form.email"></p> -->

    <!-- changeInput 함수를 만들어서 사용한 방법 ...> App 이 수정 주체가 되도록 method를 추가한 것임
    -->
    <p>
        name : 
        <input type="text" name="name" :value="form.name" @input="changeInput">
    </p>
    <p>
        age : <input type="text" name="age" :value="form.age" @input="changeInput">
    </p>
    <p>
        email : <input type="text" name="email" :value="form.email" @input="changeInput">
    </p>
  </div>
</template>

<script>
export default {
    inject: ["form", "changeForm"],

    methods : {
        changeInput(e){
            const name = e.target.name;
            const value = e.target.value;
            this.changeForm(name, value);
        }
    }
}
</script>

<style>

</style>