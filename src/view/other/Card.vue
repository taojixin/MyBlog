<template>
  <div class="card" @click="jump()">
    <!-- 正面那一层 -->
    <div class="front">
      <div class="icon">
        <img src="@/assets/logo.png" alt="" />
      </div>
      <span>点击查看笔记</span>
    </div>
    <!-- 翻面那一层 -->
    <div class="back">
      <span>Vue</span>
      <p>Vue的基础部分</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // 跳转的函数
    jump() {
      this.$router.push("/vuebasic");
    },
  },
};
</script>

<style lang="less" scoped>
.card {
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 10px auto;
  text-align: center;
  position: relative;
  transform-style: preserve-3d;
  perspective: 3000px;

  .front {
    background-image: linear-gradient(
      to right,
      rgba(31, 14, 89, 0.9),
      rgba(40, 69, 123, 0.5)
    );
    // background: rgba(40, 69, 123, .9);
    width: 100%;
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 5px 20px rgba(221, 213, 213, 0.1);
    transition: 0.5s ease;

    .icon {
      height: 80px;

      img {
        width: 50px;
        height: 60px;
      }
    }

    span {
      font-size: 22px;
      font-weight: 600;
      text-transform: uppercase;
    }
  }

  .back {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    // 防止padding撑大盒子
    box-sizing: border-box;
    width: 100%;
    height: 220px;
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.15) 0%,
        rgba(0, 0, 0, 0.15) 100%
      ),
      radial-gradient(
          at top center,
          rgba(255, 255, 255, 0.4) 0%,
          rgba(0, 0, 0, 0.4) 120%
        )
        #989898;
    background-blend-mode: multiply, multiply;
    padding: 30px;
    color: #fff;
    opacity: 0;
    transform: translateY(110px) rotateX(-90deg);
    transition: 0.5s ease;

    p {
      margin-top: 12px;
      text-align: justify;
      line-height: 23px;
    }
  }

  &:hover .front {
    opacity: 0;
    transform: translateY(-110px) rotateX(90deg);
  }
  &:hover .back {
    opacity: 1;
    transform: translateY(0) rotateX(0);
  }
  &:hover {
    cursor: pointer;
  }
}
</style>