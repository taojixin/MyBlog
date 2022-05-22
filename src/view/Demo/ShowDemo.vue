<template>
  <div class="show-demo">
    <div class="left-demo">
      <slot></slot>
    </div>
    <div class="right-demo">
      <div class="code-demo markdown-body" v-html="code"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: ''
    };
  },
};
</script>

<style lang="less">
.show-demo {
  display: flex;
  justify-content: center;
  height: 100vh;

  .left-demo {
    flex: 1;
    border: 1px solid pink;
  }
  .right-demo {
    flex: 1;
    border: 1px solid blue;
  }
}
</style>