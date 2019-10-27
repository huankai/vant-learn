<template>
  <div>
    <div>
      <van-grid square :border="false" :column-num="2">
        <van-grid-item>
          <div class="title">今日奖励</div>
          <div class="today-reward">{{ todayReward }}</div>
        </van-grid-item>
        <van-grid-item>
          <div class="title">我的待遇</div>
          <div class="my-treatment">{{ myTreatment }}</div>
        </van-grid-item>
      </van-grid>
    </div>
    <van-row style="padding: 12px;background: #fff">
      <van-col span="12">注册下线</van-col>
      <van-col span="12" style="text-align: right;color: #969799;vertical-align: middle;" @click="$router.push('/mineInserting')">我的下线
        <van-icon name="arrow"/>
      </van-col>
    </van-row>
    <van-cell-group>
      <van-field required label="用户名" placeholder="请输入用户名"/>
      <van-field required label="密码" placeholder="请输入用户密码"/>
      <van-cell required title="下级待遇">
        <van-stepper slot="default" step="0.05" min="0" max="3"/>
      </van-cell>
    </van-cell-group>
    <div class="center-btn">
      <van-button type="info" size="normal" @click="registerInserting">注&nbsp;&nbsp;&nbsp;册</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProxyCenterIndex",
    data() {
      return {
        todayReward: 189.08,
        myTreatment: '1.3 %'
      }
    },
    methods: {
      registerInserting() {
        this.$toast.success("正在开发中...")
      }
    }
  }
</script>

<style lang="less" scoped>
  .van-grid {
    margin: 10px 0;

    .van-grid-item {
      padding-top: 30% !important;
    }

    .title {
      font-size: 20px;
      color: rgb(156, 156, 156);
    }

    .today-reward {
      font-size: 24px;
      color: red;
      line-height: 36px;
    }

    .my-treatment {
      font-size: 24px;
      line-height: 36px;
      color: rgb(184, 134, 11);
    }
  }
</style>
