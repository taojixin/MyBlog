<template>
  <div class="introduce">
    <el-menu default-active="2" class="el-menu-vertical-demo" :router="true">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="/content">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>

    
    <el-main class="contenta">
      <router-view></router-view>
    </el-main>
  </div>
</template>

<script>
export default {};
</script>

<style>
.introduce {
  display: inline-block;
  position: relative;
  width: 200px;
  height: 350px;
  background-color: #c1cae6;
}
.el-main {
  flex: 1;
  height: 500px;
  background-color: blue;
}
</style>