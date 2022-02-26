<template>
  <div class="blog_home">
    <!-- 顶部 -->
    <header class="header">tjx的博客</header>
    <!-- 内容区域 -->
    <div class="container">
      <!-- 左侧侧边栏 -->
      <nav class="blog_nav">
        <ul class="directory">
          <h2>目录</h2>
          <li
            v-for="(item, index) in directory"
            :key="index"
            :class="icon[index]"
            @click="jump"
          >
            {{ item }}
          </li>
        </ul>
      </nav>
      <!-- 中间内容区域 -->
      <div class="contenta">
        <!-- 路由占位符 -->
        <slot name="center" :value="value"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Content from "../Content.vue";
export default {
  components: { Content },
  data() {
    return {
      value: '123',
      // 目录项
      directory: [
        "自我介绍",
        "简历",
        "练习项目",
        "学习过程",
        "博客介绍",
        "联系",
      ],
      // 目录字体图标
      icon: [
        "iconfont icon-user",
        "iconfont icon-namecard",
        "iconfont icon-form-fill",
        "iconfont icon-suggest",
        "iconfont icon-3column",
        "iconfont icon-lianjie",
      ],
    };
  },
  methods: {
    // 跳转的函数
    jump() {
      this.$router.push("/introduce");
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 80%;
  height: 100px;
  margin: 0 auto;
  background-color: #aabaea;
  font-size: 14px;
  text-align: center;
  line-height: 100px;
}

.container {
  display: flex;
  width: 80%;
  height: 1000px;
  margin: 0 auto;
  background-color: pink;
}
.blog_nav {
  display: inline-block;
  position: relative;
  width: 200px;
  height: 350px;
  background-color: #c1cae6;
}
.directory {
  li {
    margin: 20px auto;
    font-size: 16px;
  }
}

.contenta {
  flex: 1;
  height: 500px;
  background-color: blue;
}
</style>