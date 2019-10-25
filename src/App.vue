<template>
  <div id="app">
    <router-view key="app"></router-view>
  </div>
</template>

<script>
  import {Locale} from 'vant'
  import zhCN from 'vant/lib/locale/lang/zh-CN'

  Locale.use('zh-CN', zhCN)
  export default {
    name: 'app'
  }

</script>
<style>
  @import "assets/css/base.css";
</style>
