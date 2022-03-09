<template>
  <div id="app">
    <router-view></router-view>
    <!-- <Sidenav></Sidenav> -->
    <!-- <Home></Home> -->
    <!-- <Login></Login> -->

  </div>
</template>

<script>
import Home from '@/components/Home'
import Login from '@/components/Login'
import Sidenav from '@/view/other/Sidenav.vue'
export default {
  name: "app",
  components: { Home, Login, Sidenav},
};
</script>

<style lang="less" scoped>

</style>
