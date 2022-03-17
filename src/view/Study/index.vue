<template>
  <div class="study">
    <!-- <router-link to="VueBasic">VueBasic</router-link> -->
    <!-- <router-view></router-view> -->
    <!-- <Card></Card> -->
    <CardOne></CardOne>
    <CardOne></CardOne>
    <CardOne></CardOne>

  </div>
</template>

<script>

import Card from '@/view/other/Card'
import CardOne from '@/view/other/CardOne'
export default {
  components: {Card,CardOne},
  
};
</script>

<style lang="less" scoped>

</style>