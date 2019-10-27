<template>
  <div class="register-content">
    <h1>注&nbsp;&nbsp;&nbsp;&nbsp;册</h1>
    <van-cell-group>
      <van-field v-model="nickName" required clearable label="用户名" placeholder='请输入用户名'></van-field>
      <van-field v-model="phone" required label="手机号" placeholder="请输入手机号">
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
      <van-field v-model="vCode" required label="验证码" placeholder="请输入验证码"/>
      <van-field v-model="password" required type="password" label="密码" placeholder="请输入密码"/>
    </van-cell-group>
    <van-row style="margin: 20px 0">
      <van-col span="12"></van-col>
      <van-col span="12">
        <router-link to="/user/login" class="to-login">
          <span>已有账号,去登陆</span>
        </router-link>
      </van-col>
    </van-row>
    <van-cell-group class="register-btn">
      <van-button type="info" size="normal" text="注   册" @click="toRegister()"></van-button>
    </van-cell-group>
  </div>
</template>

<script>
  export default {
    name: "Register",
    data() {
      return {
        nickName: null,
        vCode: null,
        phone: null,
        password: null
      }
    },
    methods: {
      toRegister() {

      }
    }
  }
</script>

<style lang="less" scoped>
  .register-content {
    background: #fff;
    text-align: center;
    border-radius: 10px;
    padding-top: 20px;
    padding-bottom: 20px;

    .register-btn {
      margin: 10px 0;

      button {
        width: 70%;
        border-radius: 10px;
      }

    }

  }
</style>
