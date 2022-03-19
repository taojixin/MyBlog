<template>
  <div class="gitbasic">
    <div class="content markdown-body" v-html="vueMarkdown"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vueMarkdown: `
    <h2>Git基本使用</h2>
<h3>一、git常用命令</h3>
<h4>1.设置用户签名</h4>
<blockquote>
<p>Git 首次安装必须设置一下用户签名，否则无法提交代码。</p>
<p>这里设置用户签名和将来登录 github（或其他代码托管中心）的账号没有任 何关系。</p>
</blockquote>
<ul>
<li><strong>git config --global user.name 用户名</strong></li>
<li><strong>git config --global user.email 邮箱</strong></li>
</ul>
<h4>2.初始化本地库</h4>
<ul>
<li><strong>git init</strong></li>
</ul>
<h4>3.查看本地库状态</h4>
<ul>
<li><strong>git status</strong></li>
</ul>
<h4>4.添加暂存区</h4>
<ul>
<li><strong>git add 文件名</strong></li>
</ul>
<h4>5.提交本地库</h4>
<ul>
<li><strong>git commit -m &quot;日志信息&quot; 文件名</strong></li>
</ul>
<h4>6.查看历史版本</h4>
<ul>
<li><strong>git reflog</strong></li>
<li><strong>git log</strong></li>
</ul>
<h4>7.版本穿梭</h4>
<p><strong>git reset --hard 版本号</strong></p>
<h3>二、分支操作</h3>
<h4>1.查看分支</h4>
<ul>
<li><strong>git branch -v</strong></li>
</ul>
<h5>2.创建分支</h5>
<ul>
<li><strong>git branch 分支名</strong></li>
</ul>
<h4>3.切换分支</h4>
<ul>
<li><strong>git checkout 分支名</strong></li>
</ul>
<h4>4.合并分支</h4>
<ul>
<li><strong>git merge 分支名</strong></li>
</ul>
<p>注：可能产生冲突</p>
<h3>三、远程仓库操作</h3>
<h4>1.查看当前所有远程库地址别名</h4>
<ul>
<li><strong>git remote -v</strong></li>
</ul>
<h4>2.创建远程仓库别名</h4>
<ul>
<li><strong>git remote add 别名 远程地址</strong></li>
</ul>
<p><code>git remote add ori https://github.com/atguiguyueyue/git-shTest.git</code></p>
<h4>3.推送本地分支到远程仓库</h4>
<ul>
<li><strong>git push 别名 分支</strong></li>
</ul>
<h4>4.克隆远程仓库到本地</h4>
<ul>
<li><strong>git clone 远程地址</strong></li>
</ul>
`
    }
  }
}
</script>

<style lang="less" scoped>
.gitbasic {
  display: flex;
  width: 70%;
  margin: 0 auto;
}
.content {
  ul {
    list-style: disc !important;
  }
  flex: 1;
  // 半透明背景
  // background-color: rgba(0, 0, 0, 0.55);
  // // 背景模糊（毛玻璃）
  // backdrop-filter: blur(30px);
  background-color: #fff;
  color: black;
  font-size: 14px;
  height: 720px;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 10px 10px;
}
</style>