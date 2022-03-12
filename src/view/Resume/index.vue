<template>
  <div class="resume">
    <!-- 左侧 -->
    <div class="left">
      <div class="left_top">
        <img src="@/assets/Headportrait.jpg" alt="" />
      </div>
      <div class="left_bottom">
        <!-- 标题 -->
        <div class="title">

        </div>
        <!-- 个人信息 -->
        <div class="information">

        </div>
        <!-- 求职意向 -->
        <div class="jobs">

        </div>
        <!-- 教育背景 -->
        <div class="education">
          
        </div>
      </div>
    </div>
    <!-- 右侧 -->
    <div class="right"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.resume {
  margin: 5px auto;
  width: 750px;
  height: 740px;
  background: #e6e6e6;
  border: 1px solid red;

  .left {
    margin: 20px 0;
    width: 250px;
    height: 700px;
    float: left;
    box-sizing: border-box;
    border-right: 1px solid #a1a1a1;

    .left_top {
      border: 1px solid red;
      width: 100%;
      height: 150px;
      text-align: center;


      img {
      width: 150px;
      height: 150px;
      border-radius: 150px;
    }
    }
  }

  .right {
    float: right;
    margin: 20px 0;
    width: 500px;
    height: 700px;
  }
}
</style>