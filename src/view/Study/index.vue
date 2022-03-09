<template>
  <div>
    <textarea type="text" v-model="htmlMD"></textarea>
    <p v-html="markdown"></p>
  </div>
</template>

<script>
import MarkdownIt from "markdown-it";
export default {
  data() {
    return {
      htmlMD: "",
    };
  },
  created() {
  },
  methods: {
  },
  computed: {
    markdown() {
      const md = new MarkdownIt();
      const result = md.render(this.htmlMD);
      return result;
    },
  },
};
</script>

<style lang="less" scoped>
textarea {
  float: left;
}
p {
  float: right;
}
</style>