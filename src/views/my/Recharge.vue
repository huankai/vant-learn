<template>
  <div>
    <van-nav-bar title="转账">
      <van-icon name="arrow-left" size="18px" slot="left" @click="$router.push('/my')"/>
    </van-nav-bar>
    <van-cell-group>
      <van-cell :title="selected.backName" is-link/>
    </van-cell-group>

  </div>
</template>

<script>
  const backList = [
    {
      id: '1',
      icon: '',
      backName: '中国工商银行'
    }, {
      id: '2',
      icon: '',
      backName: '中国建设银行'
    }, {
      id: '3',
      icon: '',
      backName: '中国农业银行'
    }
  ]
  /* 充值 */
  export default {
    name: "Recharge",
    data() {
      return {
        backList,
        selected: backList[0]
      }
    }
  }
</script>

<style scoped>

</style>
