<template>
  <div class="login-content">
    <h1>{{ title }}</h1>
    <van-cell-group>
      <van-field v-model="username" clearable label="用户名" placeholder='请输入用户名'></van-field>
      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码"/>
    </van-cell-group>
    <van-cell-group class="login-btn">
      <van-button type="info" size="normal" text="登  录" @click="login()"></van-button>
    </van-cell-group>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        title: '登 录',
        username: null,
        password: null
      }
    },
    methods: {
      login() {
        console.log("username:", this.username, ",password:", this.password)
      }
    }
  }
</script>

<style lang="less" scoped>
  .login-content {
    background: #fff;
    text-align: center;
    border-radius: 10px;
    padding-top: 20px;
    padding-bottom: 20px
  }

  .login-btn {
    margin: 10px 0;

    button {
      width: 60%;
      border-radius: 10px;
    }
  }
</style>
