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
        <dt>공개범위</dt>
        <dd>
          <div class="c-chk-group">
            <div class="c-chk">
              <label>
                <input type="radio" name="isScret" value="n" />
                <span class="chk-box"></span>
                <span class="chk">전체공개</span>
              </label>
            </div>
            <div class="c-chk">
              <label>
                <input type="radio" name="isScret" value="y" />
                <span class="chk-box"></span>
                <span class="chk">비밀</span>
              </label>
            </div>
          </div>
        </dd>
      </dl>
      <dl>
        <dt></dt>
        <dd>
          <Editor
            ref="c"
            initialEditType="wysiwyg"
            :style="{ width: '100%' }"
            height="500px"
            previewStyle="vertical"
          ></Editor>
        </dd>
      </dl>
    </div>
    <div class="board-write-bottom-btns">
      <button class="btn btn-normal">취소</button>
      <button class="btn btn-ok">작성완료</button>
    </div>
  </div>
</template>

<script>
// import { postBoard, getBoard, updateBoard } from "@/services/board";
import { postBoard } from "@/services/board";
import { Editor } from "@toast-ui/vue-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

export default {
  components: {
    Editor,
  },

  data() {
    return {
      title: "",
    };
  },

  methods: {
    getContent() {
      return this.$refs.toastEditor.invoke("getMarkdown");
    },
    setContent(content) {
      this.$refs.toastEditor.invoke("setMarkdown", content);
    },

    getData() {
      const data = {
        title: this.title,
        contents: this.getContent(),
      };
      const { title, contents } = data;
      if (!title) {
        alert("제목은 필수입니다.");
        return;
      }
      if (!contents) {
        alert("내용은 필수입니다.");
        return;
      }
      return data;
    },

    async callPostBoard() {
      const data = this.getData();

      if (!data) {
        return;
      }

      try {
        const response = await postBoard(data);
        console.log(response);
        this.$router.push({ name: "home" });
      } catch (error) {
        console.log(error);
        alert("네트워크 에러");
      }
    },
  },
};
</script>

<style></style>
