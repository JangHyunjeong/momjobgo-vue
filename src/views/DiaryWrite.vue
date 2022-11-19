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
      <button class="btn btn-normal" @click="$router.push('/')">취소</button>
      <button class="btn btn-ok" v-if="this.bno" @click="editCustomList(bno)">
        수정완료
      </button>
      <button class="btn btn-ok" @click="apply" v-else>작성완료</button>
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
      bno: Number(1),
    };
  },

  methods: {
    async apply() {
      const customList = [...this.customList];

      // 글번호 생성하기
      if (customList.length === 0) {
        this.bno = Number(1);
      } else {
        const copyList = customList.sort(function (a, b) {
          return b.bno - a.bno;
        });
        this.bno = copyList[0].bno + 1;
      }

      // custom api에 데이터 전달
      customList.push({
        title: this.title,
        contents: this.contents,
        date: new Date(),
        bno: this.bno,
        editable: false,
      });

      const response = await callPostCustom(KEY, {
        customList,
      });

      if (response.status === 200) {
        this.customList = customList;
        this.title = "";
        this.contents = "";
        this.$router.push({ name: "home" });
      } else {
        alert("네트워크 에러");
      }
    },
    async getCustomList() {
      const response = await callGetCustom(KEY);

      if (response.status === 200) {
        this.customList = response?.data?.customList ?? [];
      } else {
        alert("네트워크 에러");
      }
    },

    // 수정 데이터 가져오기
    async callGetCustom(bno) {
      const response = await callGetCustom(KEY);
      if (response.status === 200) {
        this.customList = response.data.customList;
      } else {
        alert("네트워크 에러");
      }

      const customList = this.customList;
      const findItem = function findItem(item) {
        if (item.bno === bno) {
          return true;
        }
      };
      const target = customList.find(findItem);
      const findIdx = customList.indexOf(target);
      console.log("findIdx :", findIdx);
      this.title = customList[findIdx].title;
      this.contents = customList[findIdx].contents;
    },

    async editCustomList(bno) {
      // 배열에서 bno 찾아서 슬라이스
      const customList = this.customList;
      const findItem = function findItem(item) {
        if (item.bno === bno) {
          return true;
        }
      };
      const target = customList.find(findItem);
      const findIdx = customList.indexOf(target);
      customList[findIdx].title = this.title;
      customList[findIdx].contents = this.contents;

      const response = await callPostCustom(KEY, {
        customList: this.customList,
      });
      this.$router.push({ name: "home" });
      if (!response.status === 200) {
        alert("네트워크 에러");
      }
    },
  },

  created() {
    this.getCustomList();

    this.bno = Number(this.$route.params.bno);
    if (this.bno) {
      this.callGetCustom(this.bno);
    }
  },
};
</script>

<style></style>
