<template>
  <div class="tags">
    <div class="sequence-tags">{{ toSon.sequence }}</div>
    <div class="describe-tags">{{ toSon.describe }}</div>
    <p class="knowledge-tags">
      <i class="iconfont icon-zhishidian"></i>{{ toSon.knowkedge }}
    </p>
    <img class="img-tags" :src="toSon.imgSrc" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    toSon: {
      type: Object,
      default: {
        sequence: "1",
        describe: "简约CSS特效标签",
        knowkedge: "文字阴影text-shadow",
        imgSrc: require("@/assets/demo-img/card.png"),
      },
    },
  },
};
</script>

<style lang="less">
.tags {
  position: relative;
  width: 700px;
  height: 100px;
  margin: 30px auto;
  background-color: white;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    box-shadow: 0 5px 5px 5px #c1d0e3;
    .describe-tags {
      border-bottom: 1px solid blue;
      color: #2376dc;
    }
    .knowledge-tags {
      color: #4a5564;
    }
  }
  // 序号
  .sequence-tags {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: #8b99ab;
    font-size: 50px;
    text-shadow: 3px 3px 3px #c1d0e3;
  }
  // 描述
  .describe-tags {
    position: absolute;
    top: 30px;
    left: 70px;
    color: #6e86a4;
  }
  // 知识点
  .knowledge-tags {
    position: absolute;
    top: 50px;
    left: 65px;
    font-size: 12px;
    color: #a6b2c1;
    i {
      vertical-align: middle;
      padding-right: 4px;
    }
  }
  // 图片
  .img-tags {
    position: absolute;
    top: 10px;
    right: 100px;
    width: 120px;
    height: 80px;
  }
}
</style>