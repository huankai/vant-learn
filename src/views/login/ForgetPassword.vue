<template>
  <div class="forget-password">
    <h1>忘&nbsp;&nbsp;记&nbsp;&nbsp;密&nbsp;&nbsp;码</h1>
    <van-cell-group>
      <van-field v-model="phone" required label="手机号" placeholder="请输入注册的手机号">
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
      <van-field v-model="vCode" required label="验证码" placeholder="请输入验证码"/>
      <van-field v-model="password" required type="password" label="新密码" placeholder="请输入新密码"/>
      <van-field v-model="confirmPassword" required type="password" label="确认新密码" placeholder="请再次输入新密码"/>
    </van-cell-group>
    <van-row style="margin: 20px 0">
      <van-col span="12"></van-col>
      <van-col span="12">
        <router-link to="/user/login" class="to-login">
          <span>登陆</span>
        </router-link>
      </van-col>
    </van-row>
    <van-cell-group class="forget-password-btn">
      <van-button type="info" size="normal" text="提  交" @click="resetPassword()"></van-button>
    </van-cell-group>
  </div>
</template>

<script>
  export default {
    name: "ForgetPassword",
    data() {
      return {
        phone: null,
        vCode: null,
        password: null,
        confirmPassword: null,
      }
    },
    methods: {
      resetPassword() {

      }
    }
  }
</script>

<style lang="less" scoped>
  .forget-password {
    background: #fff;
    text-align: center;
    border-radius: 10px;
    padding-top: 20px;
    padding-bottom: 20px;

    .forget-password-btn {
      margin: 10px 0;

      button {
        width: 70%;
        border-radius: 10px;
      }
    }

  }
</style>
