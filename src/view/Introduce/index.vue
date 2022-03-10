<template>
  <div class="introduce">
    <!-- 顶部 -->
    <header>
      <h1 class="me">关于我</h1>
      <hr />
      <p class="my_sentence">
        如果debugging是一种消灭bug的过程，那编程就一定是把bug放进去的过程。
      </p>
    </header>
    <!-- 中间 -->
    <article>
      <div class="box_left">
        <img src="@/assets/Headportrait.jpg" alt="" />
      </div>
      <div class="box_right">
        <table>
          <tr v-for="(item, index) in message" :key="index">
            <td>{{ item.left }}</td>
            <td>{{ item.right }}</td>
          </tr>
        </table>
      </div>
    </article>
    <!-- 底部 -->
    <footer>
      <h3>兴趣爱好：</h3>
      <p>吃饭睡觉打豆豆！</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: [
        { left: "姓名 | 陶继鑫", right: "手机 | 18581766104" },
        { left: "性别 | 男", right: "邮箱 | 491675919@qq.com" },
        { left: "出生 | 2001.07.24", right: "qq号 | 491675919" },
        { left: "居住 | 四川省资阳市", right: "户籍 | 四川省资阳市" },
        { left: "学历 | 本科", right: "学校 | 四川工商学院" },
        { left: "专业 | 软件工程", right: "状态 | 学生就读" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.introduce {
  width: 100%;
  height: 100%;
  // 半透明背景
  background-color: rgba(0, 0, 0, 0.55);
  // 背景模糊（毛玻璃）
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
}
header {
  flex: 1;

  .me {
    color: #0f3d93;
    margin: 0;
    text-align: center;
  }
  hr {
    width: 90%;
    margin: 20px auto;
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
  .my_sentence {
    color: #093b99;
    text-align: center;
    margin: 5px auto;
  }
}
article {
  flex: 5;
  display: flex;
  // border: 1px solid red;

  .box_left {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    flex: 1;
    // border: 1px solid blue;

    img {
      width: 200px;
      height: 200px;
      border-radius: 100px;
      margin: 10 auto;
    }
  }

  .box_right {
    flex: 2;
    // border: 1px solid blue;
    color: #0b9ade;

    table {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      padding: 50px 50px;

      tr {
        flex: 1;
        display: flex;
        margin: 20px 0;

        td {
          display: block;

          flex: 1;
        }
      }
    }
  }
}

footer {
  flex: 1;
  color: #093b99;
  padding: 0 150px;

  h3 {
    margin: 0;
  }
  p {
    margin: 5px 0;
    font-size: 15px;
    text-indent: 3em;
  }
}
</style>