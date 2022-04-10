<template>
  <div class="study">
    <el-breadcrumb  separator="/">
      <el-breadcrumb-item :to="{path:'/About'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item>笔记</el-breadcrumb-item>
    </el-breadcrumb>
    <CardOne v-for="item in content" :key="item.index" :message="item"></CardOne>

  </div>
</template>

<script>
import Card from '@/view/other/Card'
import CardOne from '@/view/other/CardOne'
export default {
  components: {Card,CardOne},
  data() {
    return {
      content: [
        {
          index: '01',
          title: "Vue基础",
          about: "主要包括vue的初始化、指令、生命周期等知识点。",
          path: "vuebasic",
        },
        {
          index: '02',
          title: 'Git基本使用',
          about: '主要包含git的初始化、git常用命令、分支操作、远程仓库操作等。',
          path: 'gitbasic'
        },
        {
          index: '03',
          title: 'jQuery基本用法',
          about: '主要包含jQuery选择器、样式操作、元素操作等。',
          path: 'jquery'
        },
        {
          index: '04',
          title: 'CSS',
          about: '主要包括css常用样式，如字体、选择器、css三大特性。',
          path: 'css'
        }
      ]
    }
  }
  
};
</script>

<style lang="less" scoped>
.study {
  max-height: 740px;
  overflow-y: scroll;
}
</style>