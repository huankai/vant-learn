<template>
  <div class="login-content">
    <h1>{{ title }}</h1>
    <van-cell-group>
      <van-field v-model="username" clearable label="用户名" placeholder='请输入用户名'></van-field>
      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码"/>
    </van-cell-group>
    <van-row style="margin: 20px 0">
      <van-col span="12">
        <router-link to="/user/register">
          <span>注册</span>
        </router-link>
      </van-col>
      <van-col span="12">
        <router-link to="/user/forgetPassword">
          <span>忘记密码?</span>
        </router-link>
      </van-col>
    </van-row>
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
        if (this.username === null || this.username === '') {
          this.$toast.fail("用户名必填")
          return;
        }
        if (this.password === null || this.password === '') {
          this.$toast.fail("密码必填")
          return;
        }
        this.$toast.loading({
          duration: 0,
          message: '登陆中...',
          forbidClick: true
        });
        setTimeout(() => {
          this.$toast.clear()
          this.$router.push("/")
        }, 1500);
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
      width: 70%;
      border-radius: 10px;
    }
  }
</style>
