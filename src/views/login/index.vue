<script setup></script>

<template>
  <div class="box">
    <div class="left">
      <img src="../../assets/logo2.png" alt="" />
    </div>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.box {
  display: flex;
}
div.left {
  width: 50%;
  height: 100vh;
  background-image: url('../../assets/login_bg.jpg');
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  width: 250px;
}
</style>
