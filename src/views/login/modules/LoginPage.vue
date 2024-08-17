<script setup>
import { ref } from 'vue'
import { useTokenStore } from '@/stores'
import { loginRequest } from '@/api/api'
import { useRouter } from 'vue-router'
const router = useRouter()
const tokenStore = useTokenStore()
const { setToken, setUserInfo, setIsTrue } = tokenStore
const username = ref(null)
const password = ref(null)
tokenStore.isTrue
  ? (username.value = tokenStore.saveName) &&
    (password.value = tokenStore.savePassword)
  : 1

const check = ref(null)
check.value = tokenStore.isTrue
const login = async () => {
  const res = await loginRequest({
    username: username.value,
    password: password.value
  })
  if (res.code === 0) {
    setToken(res.token)
    router.push('/layout')
  }
}
const change = () => {
  setIsTrue(check.value)
  setUserInfo(username.value, password.value)
}
</script>

<template>
  <div class="login">
    <h1>登录</h1>

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
      <input type="password" v-model="password" placeholder="请输入密码" />
    </div>

    <div class="check">
      <el-checkbox
        label="记住我"
        value="Value 1"
        v-model="check"
        @change="change"
      /><span><a href="#">忘记密码？</a></span>
    </div>
    <el-button type="primary" @click="login">登录</el-button>
    <p>
      <RouterLink to="/sign" style="color: rgb(177, 179, 184)"
        >注册→</RouterLink
      >
    </p>
  </div>
</template>

<style scoped>
.login {
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

.check {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
}
a {
  text-decoration: none;
  color: rgb(163, 170, 255);
  font-size: 14px;
}
span {
  line-height: 200%;
}

button {
  width: 20vw;
  margin-bottom: 20px;
}
</style>
