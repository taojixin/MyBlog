<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <Main></Main>
    <!-- <Login></Login> -->
  </div>
</template>

<script>
import Main from "./components/Main.vue";
import Login from "./view/animation/Login.vue"
export default {
  name: "app",
  components: { Main, Login},
};
</script>

<style lang="less" scoped>

</style>
