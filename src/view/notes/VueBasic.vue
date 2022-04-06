<template>
  <div class="vuebasic">
    <div class="content markdown-body" v-html="vueMarkdown"></div>
  </div>
</template>

<script>
import { reqVueBasic } from "@/api/index";
export default {
  created() {
    this.getNotes();
  },
  data() {
    return {
      vueMarkdown: "",
    };
  },
  methods: {
    async getNotes() {
      const data = await reqVueBasic();
      this.vueMarkdown = data;
    },
  },
};
</script>

<style lang="less" scoped>
.vuebasic {
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