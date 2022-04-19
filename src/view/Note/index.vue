<template>
  <div class="note">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/About' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>留言</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 留言区域 -->
    <!-- <form class="panel" id="form_note" name="myForm" method="post" action="http://localhost:8881/api/comment/create"> -->
    <div class="panel" >
      <h2><span>欢迎留言</span></h2>
      <label for="name" class="label_name">请输入昵称：</label>
      <input
        type="text"
        placeholder="请输入昵称"
        id="name"
        autocomplete="off"
        v-model="name"
      />
      <label for="note" class="label_note">留言：</label>
      <textarea class="textarea" id="note" placeholder="你的留言" v-model="note"></textarea>
      <button  id="submit" @click="submit">提   交</button>
      <!-- <input type="submit" id="submit" value="提   交" /> -->
    </div>
    <!-- 留言展示区域 -->
    <div class="message" v-for="item in comments" :key="item.id">
      <h5>{{ item.name }}：</h5>
      <i class="date iconfont icon-24gl-calendar"> {{ item.time }}</i>
      <p>{{ item.message }}</p>
      <i class="good iconfont icon-icon1" @click="giveALike(item.id)"></i>
      <span class="count">({{ item.good }})</span>
    </div>
  </div>
</template>

<script>
import requests from "@/api/request";
import {formatTime} from '@/utils'
export default {
  data() {
    return {
      comments: [
        {
          id: 0,
          name: "徐干",
          time: "2022.4.12",
          good: 5,
          message: "高殿郁崇崇，广厦凄泠泠。微风起闺闼，落日照阶庭。踟躇云屋下，啸歌倚华楹。君行殊不返，我饰为谁容。炉薰阖不用，镜匣上尘生。绮罗失常色，金翠暗无精。嘉肴既忘御，旨酒亦常停。顾瞻空寂寂，唯闻燕雀声。忧思连相属，中心如宿醒。",
        },
        {
          id: 1,
          name: "欧阳修",
          time: "2022.4.12",
          good: 6,
          message:
            "月波清霁，烟容明淡，灵汉旧期还至。鹊迎桥路据天津，映夹岸、星榆点缀。云屏未卷，仙鸡催晓，肠断去年情味。多应天意不教长，恐恁把、欢娱容易。",
        },
        {
          id: 2,
          name: "庚肩吾",
          time: "2022.4.12",
          good: 6,
          message:
            "古人谩歌西飞燕，十年不见狂夫面。三更风作切梦刀，万转愁成系肠线。所嗟不及牛女星，一年一度得相见。",
        },
        {
          id: 3,
          name: "白居易",
          time: "2022.4.12",
          good: 5,
          message: "烟霄微月澹长空，银汉秋期万古同。七月七日长生殿，夜半无人私语时，天长地久有时尽，此恨绵绵无绝期",
        },
        {
          id: 4,
          name: "朱淑真",
          time: "2022.4.12",
          good: 5,
          message: "连理枝头花正开，妒花风雨便相催。愿教青帝常为主，莫遣纷纷点翠苔。",
        },
      ],
      name: '',
      note: '',

    };
  },
  methods: {
    // 点赞
    giveALike(id) {
      this.comments[id].good++;
      const good = document.getElementsByClassName("good")[id];
      good.style.color = "#2387f2";
    },
    // 提交评论信息
    submit() {
      // 获取系统当前时间
      const nowTime = formatTime()
      requests.post('/comment/create', {
        name: this.name,
        createTime: nowTime,
        note: this.note,
      }).then(res => {
        console.log("发表成功:", res);
      }).catch(err => {
        console.log("发表失败：", err);
      })
      // 清空输入框
      this.name = ''
      this.note = ''
    }
  },
};
</script>

<style lang="less">
.note {
  // 超出部分 滚动
  overflow-y: scroll;
  max-height: 700px;
}
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
  button,
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
  #name,
  #note {
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
    transition: all 0.5s;
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
  transition: border 0.5s;
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
    top: 10px;
    right: 40px;
    font-size: 30px;
    transition: all 0.4;
    &:hover {
      font-size: 40px;
      font-weight: bold;
      color: #2387f2;
    }
  }
  .count {
    position: absolute;
    top: 15px;
    right: 8px;
    font-size: 18px;
    color: gray;
  }
}
</style>