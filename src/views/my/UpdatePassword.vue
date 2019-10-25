<template>
  <div>
    <van-nav-bar :title="title">
      <van-icon name="arrow-left" size="18px" slot="left" @click="$router.push('/my')"/>
    </van-nav-bar>
    <div class="content">
      修改密码
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
