<template>
  <div>
    <van-nav-bar title="消息详情">
      <van-icon name="arrow-left" size="18px" slot="left" @click="$router.go(-1)"/>
    </van-nav-bar>
    <van-row class="notice-title">
      <van-col>消息标题</van-col>
    </van-row>
    <van-row class="notice-body">
      <p>
          消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容
          消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容
          消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容
          消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容
          消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容
          消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容
          消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容
          消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容
          消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容
          消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容
          消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容
          消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容
          消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容
          消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容
          消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容
          消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容
          消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容
          消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容
          消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容消息内容。
      </p>
    </van-row>
  </div>
</template>

<script>
  /* 通知详情 */
  export default {
    name: "NoticeDetail",
    data() {
      return {
        notice: {}
      }
    },
    created() {
      this.$toast.success(this.$route.params.id);
    }
  }
</script>

<style lang="less" scoped>
  .notice-title {
    text-align: center;
    display: grid;
    margin-top: 12px;
  }

  .notice-body {
    margin: 0 20px;
  }
</style>
