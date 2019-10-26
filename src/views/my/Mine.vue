<template>
  <div class="my">
    <van-row style="background: white;">
      <van-col span="6" style="text-align: center">
        <van-image
          round
          width="5rem"
          height="5rem"
          :src="$store.getters.getCurrentUserInfo.userIcon"
        />
      </van-col>
      <van-col span="18" class="user-info">
        <router-link to="/userInfo">
          <van-row>{{ this.$store.getters.getCurrentUserInfo.nickName }}</van-row>
          <van-row>
            <van-col span="18">手机号：{{ this.$store.getters.getCurrentUserInfo.phone }}</van-col>
            <van-col span="6" style="text-align: right;">
              <van-icon name="arrow" size="20px"/>
            </van-col>
          </van-row>
        </router-link>
      </van-col>
    </van-row>
    <van-grid square :border="true" :column-num="3">
      <van-grid-item>
        <div class="title">账户资金</div>
        <div class="value">{{ accountAmount }}</div>
      </van-grid-item>
      <van-grid-item>
        <div class="title">冻结资金</div>
        <div class="value">{{ accountUnAmount }}</div>
      </van-grid-item>
      <van-grid-item>
        <div class="title">订单佣金</div>
        <div class="value">{{ orderAmount }}</div>
      </van-grid-item>
    </van-grid>
    <van-cell title="充值" size="large" icon="passed" @click="handlerCZ()" is-link/>
    <van-cell title="提现" size="large" icon="gold-coin-o" @click="handlerTX()" is-link/>
    <van-cell title="银行卡" size="large" icon="idcard" @click="handlerYHK()" is-link/>
    <van-cell title="修改密码" size="large" icon="setting-o" to="/updatepassword" is-link/>
    <div class="logout-btn">
      <van-button type="info" size="normal" @click="handlerLogout()">安&nbsp;全&nbsp;退&nbsp;出</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Mine",
    data() {
      return {
        accountAmount: 1099.89,
        accountUnAmount: 0,
        orderAmount: 88,
      }
    },
    methods: {
      handlerCZ() {
        this.$toast("充值功能正在开发中...")
      },
      handlerTX() {
        this.$toast("提现功能正在开发中...")
      },
      handlerYHK() {
        this.$toast("银行卡功能正在开发中...")
      },
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

  .user-info {
    height: 5rem;

    a {
      color: black;
    }

    .van-row {
      height: 2.5rem;
      margin: 5px;
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
      margin: 10px 0;
    }
  }
</style>
