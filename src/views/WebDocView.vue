<template>
  <div class="search-wrap">
    <h1>웹문서 검색</h1>

    <div class="search-box">
        <input type="text" class="input-search" v-model="query" @keyup.enter="callWebDoc">
        <button type="button" class="btn-submit" @click="callWebDoc">검색</button>
    </div>


    <ul class="search-list">
        <li v-for="(item, index) in list" :key="index">
            <a :href="item.url" target="_blank">
                <p class="title">{{item.title}}</p>
                <p class="contents">item.contents</p>
            </a>
            <p class="datetime">{{item.datetime}}</p>
        </li>
    </ul>
  </div>
</template>

<script>
import {callKakaoApi} from "@/plugins/axios";

export default {
    data(){
        return {
            query: '',
            list: [],
        }
    },
    methods: {
        async callWebDoc() {
            const response = await callKakaoApi("/v2/search/web", {
                methods: "GET",
                params:{
                    query: this.query
                }
            });
            this.list = response.data.documents;
        }
    },
}
</script>

