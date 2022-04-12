<template>
  <div class="note">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/About' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>留言</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 留言区域 -->
    <form class="panel">
      <h2><span>欢迎留言</span></h2>
      <label for="name" class="label_name">请输入昵称：</label>
      <input type="text" placeholder="请输入昵称" id="name" autocomplete="off" />
      <label for="note" class="label_note">留言：</label>
      <textarea class="textarea" id="note" placeholder="你的留言"></textarea>
      <input type="submit" id="submit" value="提   交" />
    </form>
    <!-- 留言展示区域 -->
    <div class="message">
      <h5>是否</h5>
      <i class="date iconfont icon-24gl-calendar"> 2022.4.12</i>
      <p>发射点发吉林省地方对双fdas的说法发吉林省地方对双fdas的说法的撒反对发吉林省地方对双fdas的说法的撒反对发吉林省地方对双fdas的说法的撒反对发吉林省地方对双fdas的说法的撒反对发吉林省地方对双fdas的说法的撒反对发吉林省地方对双fdas的说法的撒反对发吉林省地方对双fdas的说法的撒反对发吉林省地方对双fdas的说法的撒反对发吉林省地方对双fdas的说法的撒反对发吉林省地方对双fdas的说法的撒反对的撒反对的说法的萨芬的萨芬的萨芬犯得上广泛的离开过几个老师地方各级领导凡是看过附近的苏格兰积分多少方来说绝对法律上</p>
      <i class="good iconfont icon-icon1"></i>
    </div>
    <div class="message">
      <h5>是否</h5>
      <i class="date iconfont icon-24gl-calendar"> 2022.4.12</i>
      <p>发射点发吉林省地方对双方来说绝对法律上</p>
      <i class="good iconfont icon-icon1"></i>
    </div>
    
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.panel {
  // border: 1px solid black;
  position: relative;
  height: 420px;
  padding: 20px 50px 0 50px;
  margin-top: 20px;
  box-sizing: border-box;
  border-top: 1px solid rgb(184, 184, 237);
  border-left: 1px solid rgb(184, 184, 237);

  h2 {
    margin: 0;
    padding-left: 30px;
    color: #2387f2;
    text-shadow: 2px 2px 4px rgb(150, 150, 165);
    letter-spacing: 6px;
  }

  label,
  input,
  textarea {
    position: absolute;
  }
  .label_name,
  .label_note,
  #submit {
    font-weight: 700;
    font-size: 20px;
    text-shadow: 3px 3px 3px #a3bcd5;
    color: #6b9bce;
  }
  .label_name {
    top: 70px;
  }
  .label_note {
    top: 170px;
  }
  #name, #note {
    border-radius: 10px;
    border: 3px solid rgb(128, 128, 189);
    box-shadow: 2px 3px 4px rgb(144, 144, 183);

    &:focus {
      // 取消聚焦时的默认效果
      outline: none;
    }
  }
  #name {
    top: 110px;
    left: 80px;
    width: 180px;
    height: 40px;
    padding-left: 10px;
    color: rgb(75, 161, 195);
    font-weight: 700;
    font-size: 16px;
    text-align: center;
  }
  #note {
    top: 200px;
    left: 80px;
    width: 500px;
    height: 150px;
    padding: 10px;
    font-size: 18px;
    color: rgb(26, 90, 115);
    font-weight: 700;
    // 禁止textarea文本框拖拽改变大小
    resize: none;
  }
  #submit {
    top: 275px;
    left: 700px;
    width: 100px;
    height: 50px;
    font-size: 18px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: all .5s;
    color: #6b9bce;
    font-weight: 700;
    &:hover {
      background-color: #c2d0e2;
    }

  }
}

.message {
  margin-top: 10px;
  // height: 100px;
  // border-left: 1px solid #2387f2;
  // border-right: 1px solid #2387f2;
  border: 2px solid transparent;
  position: relative;
  padding: 10px;
  box-sizing: border-box;
  transition: border .5s;
  &:hover {
    border: 2px dashed #2387f2;
    cursor: pointer;
  }
  h5 {
    margin: 0;
  }
  .date {
    font-size: 10px;
    color: grey;
  }
  p {
    margin: 10px 0 0 0;
    text-indent: 2em;
    font-size: 14px;
    color: grey;
  }
  .good {
    position: absolute;
    top: 60px;
    right: 30px;
    font-size: 18px;
    transition: all .4;
    &:hover {
      font-size: 20px;
      font-weight: bold;
      color: #2387f2;
    }
  }
}
</style>