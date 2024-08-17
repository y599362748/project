<script setup>
import { ref } from 'vue'
import { signRequest } from '@/api/api'
import { useRouter } from 'vue-router'
const router = useRouter()

import { getCurrentInstance } from 'vue'
import { ElMessageBox } from 'element-plus'

// 在你的 setup 方法中
const { appContext } = getCurrentInstance() || null
const username = ref(null)
const password = ref(null)
const repassword = ref(null)

const sign = async () => {
  const res = await signRequest({
    username: username.value,
    password: password.value,
    repassword: repassword.value
  })
  if (res.code === 0) {
    ElMessageBox.alert('注册成功！', {}, appContext)
    router.push('/login')
  }
}
</script>

<template>
  <div class="sign">
    <h1>注册</h1>

    <div class="inp-div">
      <div class="icon">
        <el-icon><User /></el-icon>
      </div>
      <input type="text" v-model="username" placeholder="请输入用户名" />
    </div>
    <div class="inp-div">
      <div class="icon">
        <el-icon><Lock /></el-icon>
      </div>
      <input type="password" v-model="password" placeholder="请设置密码" />
    </div>
    <div class="inp-div">
      <div class="icon">
        <el-icon><Lock /></el-icon>
      </div>
      <input
        type="password"
        v-model="repassword"
        placeholder="请再次输入密码"
      />
    </div>

    <el-button type="primary" @click="sign">注册</el-button>
    <p>
      <RouterLink to="/login" style="color: rgb(177, 179, 184)"
        >←返回</RouterLink
      >
    </p>
  </div>
</template>

<style scoped>
.sign {
  margin: 28vh auto;
}
.inp-div {
  border: 1px solid rgb(220, 223, 230);
  display: flex;
  height: 36px;
  width: 20vw;
  margin-top: 30px;
}
h1 {
  margin-bottom: 30px;
}
.icon {
  padding: 10px;
  line-height: 15px;
}
input {
  border: none;
  outline: none;
  height: 34px;
  flex: 0.95;
  background-color: rgb(232, 240, 254);
}

input:placeholder-shown {
  background-color: #fff;
}

button {
  width: 20vw;
  margin-bottom: 20px;
  margin-top: 30px;
}
</style>
