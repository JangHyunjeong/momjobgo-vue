<template>
  <div>
    <ul>
        <li 
            v-for="item in boardList" 
            :key="item.key"
            class="clickable"
            @click="goToDetail(item.key, item.title)"
        >
            <p>
                {{item.title}}
            </p>
        </li>
    </ul>
  </div>
</template>

<script>

export default {
    data() {
        return {
            boardList: [
                { key : 1 ,title: "안녕하세요",},
                { key : 2 ,title: "반갑네요",},
                { key : 3 ,title: "안녕히가세요",}
            ]
        }
    },
    methods: {
        goToDetail(key, title) {
            this.$router.push(
                {
                    path: `/board/${key}`,
                    // title을 detail에 넣어주기 위해 저장
                    query: {
                        title,
                    }
                }
            );
        }
    }
}
</script>

<style scoped>
    .clickable {
        cursor: pointer;
    }
</style>