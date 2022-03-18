<template>
  <div class="study">
    <!-- <router-link to="VueBasic">VueBasic</router-link> -->
    <!-- <router-view></router-view> -->
    <!-- <Card></Card> -->
    <CardOne v-for="item in content" :key="item.index" :message="item"></CardOne>
    <!-- <CardOne></CardOne>
    <CardOne></CardOne>
    <CardOne></CardOne>
    <CardOne></CardOne> -->

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