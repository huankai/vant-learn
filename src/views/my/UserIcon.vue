<template>
  <div>
    <van-nav-bar title="用户头像">
      <van-icon name="arrow-left" size="18px" slot="left" @click="$router.push('/userInfo')"/>
    </van-nav-bar>
    <van-uploader
      v-model="fileList"
      multiple
      :max-count="1"
    />
  </div>
</template>

<script>
  export default {
    name: "UserIcon",
    data() {
      return {
        fileList: [{url: this.$store.getters.getCurrentUserInfo.userIcon}]
      }
    }
  }
</script>

<style scoped>
  .van-uploader {
    margin: 20px;
  }
</style>
