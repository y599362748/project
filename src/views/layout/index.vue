<script setup>
import { ArrowDown } from '@element-plus/icons-vue'

const handleCommand = (command) => {
  switch (command) {
    case 'a':
      break
    case 'b':
      break
    case 'c':
      break
    case 'd':
      break
  }
}
</script>

<template>
  <main>
    <div class="left">
      <div class="title-img">
        <img src="../../assets/logo.png" alt="" />
      </div>
      <div class="router-link">
        <router-link to="/layout/classify"
          ><el-icon class="icon" :size="20"><Management /></el-icon
          >文章分类</router-link
        >
      </div>
      <div class="router-link">
        <router-link to="/layout/manager"
          ><el-icon class="icon" :size="20"><Promotion /></el-icon
          >文章管理</router-link
        >
      </div>
      <div class="router-link personal">
        <el-icon class="icon" :size="20"><Avatar /></el-icon>个人中心
        <div class="hidden">
          <div class="router-link-second">
            <RouterLink to="/">基本资料</RouterLink>
          </div>
          <div class="router-link-second">
            <RouterLink to="/">更换头像</RouterLink>
          </div>
          <div class="router-link-second">
            <RouterLink to="/">重置密码</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="top">
        <span class="span-left">用户名：<b>sariel</b></span>
        <span class="span-right">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <div><img src="../../assets/default.png" alt="" /></div>
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="a"
                  ><el-icon><User /></el-icon>基本资料</el-dropdown-item
                >
                <el-dropdown-item command="b"
                  ><el-icon><Crop /></el-icon>更换头像</el-dropdown-item
                >
                <el-dropdown-item command="c"
                  ><el-icon><EditPen /></el-icon>重置密码</el-dropdown-item
                >
                <el-dropdown-item command="d"
                  ><el-icon><SwitchButton /></el-icon>退出登录</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </span>
      </div>
      <div class="bottom">
        <RouterView></RouterView>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  width: 100vw;
  height: 100vh;
}
.left {
  width: 10vw;
  height: 100vh;
  background-color: rgb(35, 35, 35);
}
.title-img {
  margin-top: 50px;
  margin-left: 1.8vw;
  margin-right: 1.8vw;
  margin-bottom: 1.8vw;
}
.title-img img {
  width: 120px;
}
.right {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.top {
  width: 100%;
  height: 50px;
  background-color: #fff;
}
.bottom {
  background-color: rgb(245, 245, 245);
  padding: 20px;
  flex: 1;
}

.router-link {
  margin-top: 20px;
  margin-left: 20px;
  height: 30px;
  line-height: 30px;
  color: #fff;
}
.router-link a {
  text-decoration: none;
  color: #fff;
}
.icon {
  margin-right: 5px;
  display: inline-block;
  vertical-align: text-bottom;
}
a.router-link-exact-active {
  color: rgb(255, 208, 75);
}

.router-link-second {
  margin-left: 30px;
  margin-top: 10px;
}

img {
  width: 35px;
  height: 35px;
}
.span-left {
  margin-left: 20px;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-dropdown-link {
  display: flex;
  align-items: center;
  margin-right: 30px;
}
.el-dropdown-link div {
  width: 35px;
  height: 35px;
}
</style>
