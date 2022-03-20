<template>
  <div class="jquery">
    <div class="content markdown-body" v-html="jqueryMarkdown"></div>
  </div>
</template>

<script>
import { reqJqueryBasic } from "@/api/index";
export default {
  created() {
    this.getNotes();
  },
  data() {
    return {
      jqueryMarkdown: ''
    };
  },
  methods: {
    async getNotes() {
      const data = await reqJqueryBasic();
      this.jqueryMarkdown = data;
    },
  },
};
</script>

<style lang="less" scoped>
.jquery {
  display: flex;
  width: 70%;
  margin: 0 auto;
}
.content {
  ul {
    list-style: disc !important;
  }
  flex: 1;
  // 半透明背景
  // background-color: rgba(0, 0, 0, 0.55);
  // // 背景模糊（毛玻璃）
  // backdrop-filter: blur(30px);
  background-color: #fff;
  color: black;
  font-size: 14px;
  height: 720px;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 10px 10px;
}
</style>