<template>
  <div class="user-layout">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "UserLayout"
  }
</script>

<style scoped>

  .user-layout {
    height: 100%;
    background: url("../../assets/images/login_bg.jpg");
    text-align: center;
    padding: 195px 10px;
  }
</style>
