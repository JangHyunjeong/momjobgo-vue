<template>
  <div>
    <div class="c-card profile">
      <div class="avatar">
        <img src="http://placeimg.com/100/100/people" />
      </div>
      <div class="info">
        <p class="name">장현정</p>
        <p class="mention">
          하늘보는 것을 좋아하는 현정입니다. 일상의 생각들을 적습니다.
        </p>
      </div>
    </div>

    <div class="diary-list">
      <ul>
        <li
          class="diary-item c-card"
          v-for="(item, i) in boards.filter((c) => c.writer !== id)"
          :key="i"
        >
          <div style="display: none">
            {{ item }}
          </div>
          <div class="top">
            <p class="date">{{ toWriteTime(new Date(item.createdAt)) }}</p>
            <p class="status" v-if="isSecret">비공개</p>

            <button type="button" class="btn-edit" v-if="item.writer === id">
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
          <div class="like">
            <span class="material-icons"> favorite_border </span>
            <!--<span class="material-icons"> favorite </span>-->
            <span class="cnt">{{ item.likeCnt }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import date from "@/mixins/date";
import { getBoards } from "@/services/board";
import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  mixins: [date],
  data() {
    return {
      editPopShow: false,
      isSecret: true,
      boards: [],
    };
  },

  methods: {
    async callBoards() {
      try {
        const response = await getBoards();
        this.boards = response.data;
        console.log(response.data);
      } catch (error) {
        console.error(error);
        alert("네트워크 에러");
      }
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
