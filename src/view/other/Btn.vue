<template>
  <div class="btn" :style="styleAll">
    <a href="#">{{ content }}</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // content: "按钮",
      // // 上下层颜色
      // topbottomColor: "#12c2e9",
      // width: 200,
      // height: 60,
      // topbottomWidth: 40
      // 通过父级传递过来的数据更改组件样式
      content: this.msg.content,
      topbottomColor: this.msg.topbottomColor,
      width: this.msg.width,
      height: this.msg.height,
      topbottomWidth: this.msg.topbottomWidth,
    };
  },
  props: {
    // 接受父组件传递过来的数据
    msg: {},
  },
  computed: {
    styleAll() {
      return {
        // 按钮宽度
        "--width": this.width + "px",
        "--height": this.height + "px",
        // 上下层颜色
        "--topbottomColor": this.topbottomColor,
      };
    },
  },
};
</script>

<style lang="less" scoped>
.btn {
  position: relative;
  width: var(--width);
  height: var(--height);

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* 透明度为0.05的白色背景 */
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    color: #fff;
    z-index: 1;
    font-weight: 400;
    letter-spacing: 1px;
    text-decoration: none;
    transition: 0.5s;
    overflow: hidden;
    backdrop-filter: blur(15px);
  }

  a::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to right,
      transparent,
      rgba(255, 255, 255, 0.15)
    );
    transform: skewX(45deg) translateX(0);
    transition: 0.5s;
  }

  &:hover a {
    letter-spacing: 5px;
  }

  &:hover a::before {
    transform: skewX(45deg) translateX(200%);
  }

  // 制作按钮上下两个发光层
  &::before,
  &::after {
    content: "";
    // 居中
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 20%;
    height: 20%;
    // height: 10px;
    /* 自定义颜色属性--c, 可通过var函数调用 */
    // --c: #12c2e9;
    background: var(--topbottomColor);
    box-shadow: 0 0 5px var(--topbottomColor), 0 0 15px var(--topbottomColor),
      0 0 30px var(--topbottomColor), 0 0 60px var(--topbottomColor);
    transition: 0.5s;
  }
  // 用于控制上下层的大小
  &::before {
    bottom: -5px;
  }
  &::after {
    top: -5px;
  }

  &:hover::before,
  &:hover::after {
    height: 50%;
    width: 80%;
    border-radius: 15px;
    transition-delay: 0.3px;
  }
  &:hover::before {
    bottom: 0;
  }
  &:hover::after {
    top: 0;
  }
}
</style>