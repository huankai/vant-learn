<template>
  <div>
    <van-nav-bar :title="title">
      <van-icon name="arrow-left" size="18px" slot="left" @click="$router.go(-1)"/>
    </van-nav-bar>
    <van-cell-group>
      <van-field label="原密码" required type="password" maxlength="20" placeholder="请输入原密码"/>
      <van-field label="新密码" required type="password" maxlength="20" placeholder="请输入新密码"/>
      <van-field label="确认新密码" required type="password" maxlength="20" placeholder="请再次输入新密码"/>
    </van-cell-group>
    <div class="center-btn">
      <van-button type="info" size="normal">确&nbsp;认&nbsp;修&nbsp;改</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UpdatePassword",
    data() {
      return {
        title: '修改密码'
      }
    }
  }
</script>

<style scoped>

</style>
