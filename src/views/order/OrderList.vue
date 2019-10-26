<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad">
      <van-row v-for="item in list" :key="item.orderCode">
<!--        <van-col span="12">订单号: {{ item.orderCode }}</van-col>-->
<!--        <van-col span="12">订单金额: {{ item.amount }}</van-col>-->
<!--        <van-col span="16">交易时间: {{ item.transactionDate }}</van-col>-->
<!--        <van-col span="8">佣金: {{ item.commissionAmount }}</van-col>-->
      </van-row>
    </van-list>
  </div>
</template>

<script>
  const list = [{
    orderCode: '1',
    amount: 140,
    commissionAmount: 0,
    transactionDate: '2019-10-26 10:10:10'
  }, {
    orderCode: '2',
    amount: 140,
    commissionAmount: 0,
    transactionDate: '2019-10-26 10:10:10'
  }, {
    orderCode: '3',
    amount: 140,
    commissionAmount: 0,
    transactionDate: '2019-10-26 10:10:10'
  }, {
    orderCode: '4',
    amount: 140,
    commissionAmount: 0,
    transactionDate: '2019-10-26 10:10:10'
  }, {
    orderCode: '5',
    amount: 140,
    commissionAmount: 0,
    transactionDate: '2019-10-26 10:10:10'
  }, {
    orderCode: '6',
    amount: 140,
    commissionAmount: 0,
    transactionDate: '2019-10-26 10:10:10'
  }, {
    orderCode: '7',
    amount: 140,
    commissionAmount: 0,
    transactionDate: '2019-10-26 10:10:10'
  }, {
    orderCode: '8',
    amount: 140,
    commissionAmount: 0,
    transactionDate: '2019-10-26 10:10:10'
  }, {
    orderCode: '9',
    amount: 140,
    commissionAmount: 0,
    transactionDate: '2019-10-26 10:10:10'
  }, {
    orderCode: '10',
    amount: 140,
    commissionAmount: 0,
    transactionDate: '2019-10-26 10:10:10'
  }];
  export default {
    name: "OrderList",
    data() {
      return {
        loading: false,
        finished: false,
        list
      }
    },
    methods: {
      onLoad() {
        setTimeout(() => {
          for (let i = this.list.length + 1; i <= 10; i++) {
            this.list.push({
              orderCode: i,
              amount: 140,
              commissionAmount: 0,
              transactionDate: '2019-10-26 10:10:10'
            });
          }
          // 加载状态结束
          this.loading = false;
          // 数据全部加载完成
          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 500);
      }
    }
  }
</script>

<style scoped>

</style>
