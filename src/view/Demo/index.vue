<template>
  <div class="demo">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/About' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>练习项目</el-breadcrumb-item>
    </el-breadcrumb>
    <Tags v-for="item in tagsMessage" :key="item.sequence" :toSon="item"></Tags>
  </div>
</template>

<script>
import Tags from "@/view/Demo/Tags.vue";
export default {
  components: { Tags },
  data() {
    return {
      tagsMessage: [
        {
          sequence: "1",
          describe: "简约CSS特效标签",
          knowkedge: "文字阴影text-shadow",
          imgSrc: require("@/assets/demo-img/tag.png"),
        },
        {
          sequence: "2",
          describe: "简约CSS特效标签",
          knowkedge: "文字阴影text-shadow",
          imgSrc: require("@/assets/demo-img/card.png"),
        },
        {
          sequence: "3",
          describe: "简约CSS特效标签",
          knowkedge: "文字阴影text-shadow",
          imgSrc: require("@/assets/demo-img/login.png"),
        }
      ],
    };
  },
};
</script>

<style lang="less">
.demo {
  height: 700px;
  overflow-y: scroll;
}
</style>