<template>
  <div class="order">
    <!--    <van-search placeholder="请输入搜索关键词" show-action/>-->
    <van-tabs @click="handlerClick">
      <van-tab title="全部"></van-tab>
      <van-tab title="待审核" name="1"></van-tab>
      <van-tab title="未通过" name="2"></van-tab>
      <van-tab title="已完成" name="3"></van-tab>
    </van-tabs>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad">
      <van-row v-for="item in list" :key="item.orderCode">
        <van-col span="18"><span class="title">订单号:</span> {{ item.orderCode }}</van-col>
        <van-col span="4"><span class="status">交易成功</span></van-col>
        <van-col span="10"><span class="title">订单金额: </span><span class="price">{{ item.amount }}</span></van-col>
        <van-col span="8"><span class="title">佣金: </span><span class="price">{{ item.commissionAmount }}</span>
        </van-col>
        <van-col span="24"><span class="title">交易时间:</span>{{ item.transactionDate }}</van-col>
      </van-row>
    </van-list>
  </div>
</template>

<script>
  export default {
    name: "OrderList",
    data() {
      return {
        loading: false,
        finished: false,
        list: []
      }
    },
    methods: {
      handlerClick(name, title) {
        this.$toast.success(`当前选中 ${name} ,标题: ${title}`)
      },
      onLoad() {
        const size = this.list.length;
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push({
              orderCode: i + size,
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

<style lang="less" scoped>
  .order {
    .van-row {
      background: white;
      margin: 10px 0;
      overflow-x: hidden;

      .van-col {
        line-height: 30px;
        margin-left: 10px;

        .status {
          color: red;
          font-size: 14px;
          font-weight: bold;
        }

        .title {
          color: #9c9c9c;
        }

        .price {
          color: red;
          font-size: 16px;
          font-weight: bold;
        }
      }
    }
  }

</style>
