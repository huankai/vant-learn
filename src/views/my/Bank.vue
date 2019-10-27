<template>
  <div class="bank">
    <van-nav-bar title="银行卡">
      <van-icon name="arrow-left" size="18px" slot="left" @click="$router.push('/my')"/>
    </van-nav-bar>
    <van-list
      v-model="loading"
      :finished="finished"
      @load="onLoad">
      <van-row v-for="item in list" :key="item.id" @click="cardClickHandler(`${item.id}`)">
        <van-col span="22">{{ item.backName }}</van-col>
        <van-col span="22" class="card-id">{{ item.cardId }}</van-col>
      </van-row>
    </van-list>

    <div class="center-btn">
      <van-button icon="plus" type="info" size="normal" @click="addCard()">添&nbsp;加&nbsp;银&nbsp;行&nbsp;卡</van-button>
    </div>

    <van-action-sheet v-model="showBankDelete" :actions="[{name:'删除'}]" title="我的银行卡" @select="deleteHandler"/>
  </div>
</template>

<script>
  /*我的银行卡*/
  export default {
    name: "Bank",
    data() {
      return {
        loading: false,
        finished: false,
        showBankDelete: false,
        selectId: null,
        list: [],
      }
    },
    methods: {
      addCard() {
        this.$toast.success("正在开发中...")
      },
      cardClickHandler(id) {
        this.showBankDelete = true;
        this.selectId = id;
      },
      deleteHandler() {
        this.showBankDelete = false;
        this.$dialog.confirm({
          title: '删除提示',
          message: '确认删除该卡吗？'
        }).then(() => {
          this.list.splice(this.list.findIndex(item => item.id === this.selectId), 1);
          this.$toast.success("删除成功");
        }).catch(() => {
        }).finally(() => this.selectId = null)
      },
      onLoad() {
        const size = this.list.length;
        setTimeout(() => {
          for (let i = 0; i < 5; i++) {
            this.list.push({
              id: `1${i + size}`,
              backName: "招商银行储蓄卡",
              cardId: `**** **** **** 123${i}`
            });
          }
          // 加载状态结束
          this.loading = false;
          // 数据全部加载完成
          if (this.list.length >= 5) {
            this.finished = true;
          }
        }, 500);
      }
    }
  }
</script>

<style lang="less" scoped>
  .bank {
    background: #f5f6f8;

    .van-row {
      background: white;
      margin: 10px 0;
      overflow-x: hidden;

      .van-col {
        line-height: 30px;
        margin-left: 10px;
      }

      .card-id {
        text-align: right;
      }
    }
  }
</style>
