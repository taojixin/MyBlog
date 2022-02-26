<template>
  <div id="app">
    <Main>
      <template v-slot:center="value">
        {{value.value}}
        <Content></Content>
      </template>
    </Main>
  </div>
</template>

<script>
import Main from "./components/main/Main.vue";
import Content from "./components/Content.vue";
export default {
  components: { Main, Content },
  name: "app",
  created() {

  },
  methods: {
    
  }
};
</script>

<style>
</style>
