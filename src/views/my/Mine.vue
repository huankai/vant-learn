<template>
  <div class="my">
    <van-row>
      <van-col span="8">
        <!--        <img src="">-->
      </van-col>
      <van-col span="12">
        <van-row>
          <van-col span="24">黄老</van-col>
        </van-row>
        <van-row>
          <van-col span="24">手机号:<span>18888888888</span></van-col>
        </van-row>
      </van-col>
      <van-col span="4">hhhhhhhhhh
      </van-col>
    </van-row>
    <van-grid square :border="true" :column-num="3">
      <van-grid-item>
        <div class="title">账户资金</div>
        <div class="value">109990</div>
      </van-grid-item>
      <van-grid-item>
        <div class="title">冻结资金</div>
        <div class="value">0.00</div>
      </van-grid-item>
      <van-grid-item>
        <div class="title">订单佣金</div>
        <div class="value">88.9</div>
      </van-grid-item>
    </van-grid>
    <van-cell title="充值" size="large" icon="passed" is-link/>
    <van-cell title="提现" size="large" icon="gold-coin-o" is-link/>
    <van-cell title="银行卡" size="large" icon="idcard" is-link/>
    <van-cell title="修改密码" size="large" icon="setting-o" to="/updatepassword" is-link/>
    <div class="logout-btn">
      <van-button type="info" size="normal" @click="handlerLogout()">安&nbsp;全&nbsp;退&nbsp;出</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Mine",
    methods: {
      handlerLogout() {
        this.$dialog.confirm({
          title: '退出提示',
          message: '确认退出吗？'
        }).then(() => {
          this.$router.push("/user/login")
        }).catch(() => {
        })
      }
    }
  }
</script>

<style lang="less" scoped>

  .my {
    background: #f5f6f8;
  }

  .van-grid {
    margin: 10px 0;

    .title {
      font-size: 20px;
      color: rgb(156, 156, 156);
    }

    .value {
      font-size: 24px;
    }
  }

  .van-cell {
    .van-icon-passed {
      color: #50ae45;
    }

    .van-icon-gold-coin-o, .van-icon-idcard, .van-icon-setting-o {
      color: #258cf7;
    }
  }

  .logout-btn {
    margin: 10px 0;
    text-align: center;
    background: white;

    button {
      width: 70%;
      border-radius: 10px;
      font-size: 18px;
      font-weight: bolder;
    }
  }
</style>
