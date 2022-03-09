<template>
  <div class="blog_home">
    <!-- 顶部 -->
    <header class="header">
      <h2>
        <img src="@/assets/Headportrait.jpg" alt="" />
        <span>Liberty's blog</span>
      </h2>
      <!-- <Btn class="abc" :msg="msg"></Btn> -->
    </header>
    <!-- 内容区域 -->
    <div class="container">
      <!-- 左侧侧边栏 -->
      <nav class="blog_nav">
        <ul class="directory">
          <h2>目录</h2>
          <li
            v-for="item in directory"
            :key="item.path"
            :class="item.class"
            @click="jump(item.path)"
          >
            {{ item.text }}
          </li>
        </ul>
      </nav>
      <!-- 中间内容区域 -->
      <div class="content">
        <!-- 路由占位符 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// import Btn from "@/view/other/Btn";
export default {
  data() {
    return {
      // 目录项
      directory: [
        { path: "introduce", class: "iconfont icon-user", text: "自我介绍" },
        { path: "resume", class: "iconfont icon-namecard", text: "简历" },
        { path: "demo", class: "iconfont icon-form-fill", text: "练习项目" },
        { path: "study", class: "iconfont icon-suggest", text: "学习过程" },
        { path: "blog", class: "iconfont icon-3column", text: "博客介绍" },
        { path: "contact", class: "iconfont icon-lianjie", text: "联系" },
      ],
      // 给子组件传递的值
      msg: {
        content: "按钮",
        // 上下层颜色
        topbottomColor: "#12c2e9",
        width: 200,
        height: 60,
        topbottomWidth: 40,
      },
    };
  },
  components: {
  },
  methods: {
    // 跳转的函数
    jump(path) {
      this.$router.push(`/${path}`);
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 80%;
  height: 100px;
  margin: 0 auto;
  h2 {
    width: 300px;
    margin: 0 auto;
    text-align: center;
    line-height: 100px;
  }

  img {
    width: 50px;
    height: 50px;
    margin: 0 10px;
    vertical-align: middle;
    border-radius: 20px;
  }
  span {
    color: blue;
    text-shadow: 3px 3px 1px pink;
  }
}

.container {
  display: flex;
  width: 80%;
  margin: 0 auto;
}
.blog_nav {
  display: inline-block;
  position: relative;
  width: 200px;
  height: 350px;
  background-color: 102, 203, 231;
  opacity: 0.8;

  ul {
    padding: 0;
  }
}
.directory {
  margin-right: 10px;
  // border: 1px solid black;
  h2 {
    padding-left: 50px;
  }
  li {
    padding: 15px 30px;
    font-size: 16px;
    border-radius: 6px;

    &:hover {
      background-color: #65bed0;
      cursor: pointer;
      transition: all 0.4s;
    }
  }
}

.content {
  border: 1px solid black;
  flex: 1;
  margin: 20px 0;
  padding: 10px 50px;
  height: 550px;
  opacity: 0.5;
}

</style>