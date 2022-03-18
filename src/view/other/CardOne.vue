<template>
  <div class="card-one">
    <div class="content">
      <h2>01</h2>
      <h3>Card One</h3>
      <p>
        Realistic glass card hover effect, realistic glass card hover effect,
        realistic glass card hover effect.
      </p>
      <a href="#">Read More</a>
    </div>
    <div class="show">
      <h1>Vue基础</h1>
    </div>
  </div>
</template>

<script>
// // vanilla-tilt.js是一个平滑的3D倾斜JS库，具体参数配置查文档
import VanillaTilt from 'vanilla-tilt';
export default {
  mounted() {
    this.threeD()
  },
  methods: {
    // 3D效果
    threeD() {
      VanillaTilt.init(document.querySelectorAll(".card-one"),{
            max: 8,  //最大倾斜度数
            speed: 400,  //倾斜转换的速度
            glare: true,  //是否开启眩光效果
            "max-glare": .2 //最大眩光的不透明度
        })
    }
  }
};
</script>

<style lang="less" scoped>
h3,
h2,
p,
h1 {
  margin: 0;
}
.card-one {
  position: relative;
  width: 800px;
  height: 200px;
  // 半透明背景
  background-color: rgba(10, 23, 77, 0.35);
  // 背景模糊（毛玻璃）
  backdrop-filter: blur(50px);
  margin: 0 auto;
  border-radius: 10px;
  /* 阴影 */
  box-shadow: 10px 10px 15px rgba(30, 57, 208, 0.5);
  overflow: hidden;
  flex: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  margin-top: 40px;

  .content {
    padding: 20px;
    text-align: center;
    transform: translateY(100px);
    opacity: 0;
    transition: .5s;

    h2 {
      position: absolute;
      top: -20px;
      right: 25px;
      font-size: 108px;
      color: rgba(255, 255, 255, 0.4);
    }

    h3 {
      font-size: 28px;
      color: rgba(255, 255, 255, 0.6);
    }

    p {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.4);
      font-weight: 300;
      margin: 30px 0 15px 0;
    }

    a {
      position: relative;
      display: inline-block;
      padding: 8px 20px;
      margin-top: 15px;
      background-color: rgba(26, 52, 128, .4);
      color: rgba(255, 255, 255, 0.6);
      text-decoration: none;
      border-radius: 20px;
      font-weight: 500;
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }
  }

  .show {
    position: absolute;
    top: 41%;
    left: 35%;

    transform: translateX(50%);
    // transform: translateY(50%);
    opacity: 1;
    color: rgba(255, 255, 255, 0.4);
    transition: .3s;

    h1 {
      text-align: center;
    }
  }

  &:hover .content {
    transform: translateY(0);
    opacity: 1;
  }

  &:hover .show {
    opacity: 0;
      transform: translateY(110px);
  }
}
</style>