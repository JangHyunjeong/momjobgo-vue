<template>
  <div>
    <h1>동영상 검색</h1>

    <div class="search-box">
        <input type="text" class="input-search" v-model="query" @keyup.enter="callVideo">
        <button type="button" class="btn-submit" @click="callVideo">검색</button>
    </div>

    <ul class="search-list">
        <li v-for="(item, index) in list" :key="index">
          <a :href="item.url" target="_blank">
            <div class="left">
              <img :src="item.thumbnail" :alt="item.title">
            </div>
            <div class="right">
              <p class="title">{{item.title}}</p>
              <p class="author">item.author</p>
            </div>
          </a>
          <p class="datetime">{{item.datetime}}</p>
        </li>
    </ul>
  </div>
</template>

<script>
import {callKakaoApi} from "@/plugins/axios";

export default {
  data() {
    return{
      query: '',
      list: [],
    }
  },
  methods:{
    async callVideo(){
      const response = await callKakaoApi("/v2/search/vclip", {
        method: 'GET',
        params:{
          query: this.query,
        }
      });
      console.log(response.data.documents);
      this.list = response.data.documents;
    }
  }
}
</script>

<style>

</style>