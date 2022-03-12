<template>
  <div class="container">
    <div class="box">
      <!-- 10个span -->
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
  height: 100vh;
  overflow: hidden;
}
.box {
  /* 绝对定位 */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(../../assets/xinkong.jpg);
  // 背景图铺满整个区域，多出的隐藏
  background-size: cover;
  // 定位背景图像为正中间
  background-position-x: center;
  // linear:动画从头到尾速度相同 infinite:动画无限次播放
  // animation: animateBg 5s linear infinite;
}

span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  background-color: #fff;
  border-radius: 50%;
  // 发光特效
  box-shadow: 0 0 0px 4px rgba(255, 255, 255, 0.1),
    0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 1);
  // 执行动画
  animation: animate 3s linear infinite;
  

  // 拖尾效果
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 300px;
    height: 3px;
    background: linear-gradient(90deg, #fff, transparent);
  }
}
// 接下来分别为每一个流星设置位置、动画延迟时间、动画时长
span:nth-child(1) {
  top: 0;
  right: 0;
  left: initial;
  // 延迟时间
  animation-delay: 0s;
  // 动画时长
  animation-duration: 1s;
}
span:nth-child(2) {
  top: 0;
  right: 80px;
  left: initial;
  animation-delay: 0.2s;
  animation-duration: 3s;
}
span:nth-child(3){
  top: 80px;
  right: 0;
  left: initial;
  animation-delay: 0.4s;
  animation-duration: 2s;
}
span:nth-child(4){
  top: 0;
  right: 180px;
  left: initial;
  animation-delay: 0.6s;
  animation-duration: 1.5s;
}
span:nth-child(5){
  top: 0;
  right: 400px;
  left: initial;
  animation-delay: 0.8s;
  animation-duration: 2.5s;
}
span:nth-child(6){
  top: 0;
  right: 600px;
  left: initial;
  animation-delay: 1s;
  animation-duration: 3s;
}
span:nth-child(7){
  top: 300px;
  right: 0;
  left: initial;
  animation-delay: 1.2s;
  animation-duration: 1.75s;
}
span:nth-child(8){
  top: 0;
  right: 700px;
  left: initial;
  animation-delay: 1.4s;
  animation-duration: 1.25s;
}
span:nth-child(9){
  top: 0;
  right: 1000px;
  left: initial;
  animation-delay: 0.75s;
  animation-duration: 2.25s;
}
span:nth-child(10){
  top: 0;
  right: 450px;
  left: initial;
  animation-delay: 2.75s;
  animation-duration: 2.25s;
}

// 背景缩放动画
@keyframes animateBg {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
// 流星划过动画
@keyframes animate {
  0% {
    transform: rotate(315deg) translateX(0);
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: rotate(315deg) translateX(-1000px);
    opacity: 0;
  }
}
</style>