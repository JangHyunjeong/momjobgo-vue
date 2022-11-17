<template>
  <div>
    <h1 class="sub-title">오늘 일기</h1>
    <div class="board-write">
      <dl>
        <dt>제목</dt>
        <dd>
          <input type="text" v-model="title" />
        </dd>
      </dl>
      <dl>
        <dt></dt>
        <dd>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            v-model="contents"
          ></textarea>
        </dd>
      </dl>
    </div>
    <div class="board-write-bottom-btns">
      <button class="btn btn-normal">취소</button>
      <button class="btn btn-ok" @click="apply">작성완료</button>
    </div>
  </div>
</template>

<script>
import { callPostCustom, callGetCustom } from "@/services/custom";
const KEY = "customList";

export default {
  data() {
    return {
      title: "",
      contents: "",
      customList: [],
    };
  },

  methods: {
    async apply() {
      const customList = [...this.customList];
      customList.push({
        title: this.title,
        contents: this.contents,
        date: toLocaleString(new Date()),
      });
      const response = await callPostCustom(KEY, {
        customList,
      });

      this.customList = customList;
      this.title = "";
      this.contents = "";

      /*if (response.status === this.HTTP_OK) {
      } else {
        alert("네트워크 에러");
      }*/
    },
  },

  async created() {
    const response = await callGetCustom(KEY);
    this.customList = response?.data?.customList ?? [];

    /*if (response.status === this.HTTP_OK) {
      } else {
        alert("네트워크 에러");
      }*/
  },
};
</script>

<style></style>
