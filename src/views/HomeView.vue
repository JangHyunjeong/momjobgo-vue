<template>
  <div>
    <div class="c-card profile">
      <div class="avatar">
        <img src="http://placeimg.com/100/100/people" />
      </div>
      <div class="info">
        <p class="name">{{ name }}</p>
        <p class="mention">일상의 생각들을 적습니다.</p>
      </div>
    </div>

    <div class="diary-list">
      <router-link to="/write" class="btn-ok">작성하기</router-link>
      <ul v-if="customList.length > 0">
        <li class="diary-item c-card" v-for="(item, i) in customList" :key="i">
          <!-- .slice().reverse() -->
          <div class="top">
            <p class="date">
              {{ toWriteTime(new Date(item.date)) }}
            </p>

            <button
              type="button"
              class="btn-edit"
              @click="item.editable = true"
            >
              <span class="material-icons"> more_vert </span>
            </button>

            <div class="board-edit-pop" v-show="item.editable">
              <div class="dimmed" @click="item.editable = false"></div>
              <div class="pop-box">
                <button class="btn-close">
                  <span class="material-icons" @click="item.editable = false">
                    close
                  </span>
                </button>
                <ul class="edit-list">
                  <li>
                    <button @click="$router.push(`/write/${item.bno}`)">
                      수정하기
                    </button>
                  </li>
                  <li>
                    <button @click="deleteItem(item.bno)">삭제하기</button>
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
      <ul class="empty-list" v-else>
        <li class="c-card">
          작성된 일기가 없습니다.<br />
          첫번째 일기를 작성해보세요.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import date from "@/mixins/date";
import { callGetCustom, callPostCustom } from "@/services/custom";
import { mapGetters } from "vuex";

const KEY = "customList";

export default {
  name: "HomeView",
  mixins: [date],
  data() {
    return {
      customList: [],
    };
  },

  methods: {
    async callBoards() {
      const response = await callGetCustom(KEY);
      this.customList = response?.data?.customList ?? [];
      console.log(this.customList);
    },

    async deleteItem(bno) {
      console.log(`bno ${bno}`);
      if (confirm("정말 삭제하시겠습니까?")) {
        // 배열에서 bno 찾아서 슬라이스
        const customList = this.customList;
        const findItem = function findItem(item) {
          if (item.bno === bno) {
            return true;
          }
        };
        const target = customList.find(findItem);
        const findIdx = customList.indexOf(target);
        customList.splice(findIdx, 1);

        const response = await callPostCustom(KEY, {
          customList,
        });

        if (response.status === 200) {
          this.customList = customList;
        } else {
          alert("네트워크 에러");
        }
      } else {
        return;
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
