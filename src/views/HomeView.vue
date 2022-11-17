<template>
  <div>
    <div class="c-card profile">
      <div class="avatar">
        <img src="http://placeimg.com/100/100/people" />
      </div>
      <div class="info">
        <p class="name">{{ name }}</p>
        <p class="mention">일상의 생각들을 적습니다. 오늘은 하늘이 파라네여</p>
      </div>
    </div>

    <div class="diary-list">
      <router-link to="/write" class="btn-ok">작성하기</router-link>
      <ul>
        <li
          class="diary-item c-card"
          v-for="(item, i) in customList.slice().reverse()"
          :key="i"
        >
          <div style="display: none">
            {{ item }}
          </div>
          <div class="top">
            <p class="date">{{ toWriteTime(new Date(item.date)) }}</p>

            <button type="button" class="btn-edit">
              <span class="material-icons"> more_vert </span>
            </button>

            <div class="board-edit-pop" v-show="editPopShow">
              <div class="dimmed"></div>
              <div class="pop-box">
                <button class="btn-close">
                  <span class="material-icons"> close </span>
                </button>
                <ul class="edit-list">
                  <li>
                    <button>수정하기</button>
                  </li>
                  <li>
                    <button>삭제하기</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="cont">
            <p class="title">{{ item.title }}</p>
            <p class="txt">{{ item.contents }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import date from "@/mixins/date";
import { callGetCustom } from "@/services/custom";
import { mapGetters } from "vuex";

const KEY = "customList";

export default {
  name: "HomeView",
  mixins: [date],
  data() {
    return {
      editPopShow: false,
      customList: [],
    };
  },

  methods: {
    async callBoards() {
      const response = await callGetCustom(KEY);
      console.log("33", response);
      this.customList = response?.data?.customList ?? [];
    },
  },

  computed: {
    ...mapGetters("user", ["id", "name"]),
  },

  created() {
    this.callBoards();
  },
};
</script>

<style></style>
