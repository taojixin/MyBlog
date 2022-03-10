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
export default {
  name: "app",
  components: { Home, Login},
};
</script>

<style lang="less" scoped>

</style>
