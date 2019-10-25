<template>
  <div>
    <van-nav-bar :title="title">
      <van-icon name="bell" size="18px" slot="left" @click="handlerBell()"/>
      <van-icon name="service-o" size="18px" slot="right" @click="handlerService()"/>
    </van-nav-bar>
    <div class="content">
      <router-view></router-view>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item v-for="(item,index) in tabBarItem" @click="tabBarChangeHandler(index,item)" :key="index"
                       :icon="item.icon">{{item.text}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  const tabBarItem = [
    {
      icon: 'gold-coin',
      text: '订单中心',
      link: "/orderCenter"
    }, {
      icon: 'bars',
      text: '订单记录',
      link: "/order/list"
    }, {
      icon: 'friends',
      text: '代理中心',
      link: "/proxy"
    }, {
      icon: 'manager',
      text: '个人中心',
      link: "/my"
    }
  ]
  export default {
    name: "BasicLayout",
    data() {
      return {
        tabBarItem,
        active: 3,
        title: tabBarItem[3].text
      }
    },
    methods: {
      tabBarChangeHandler(index, current) {
        this.active = index;
        this.title = current.text;
        this.$router.replace(current.link);
      },
      handlerBell() {
        this.$toast("通知正在开发中...")
      },
      handlerService() {
        this.$toast("客服正在开发中...")
      }
    }
  }
</script>

<style lang="less" scoped>
  .van-nav-bar {
    background: #1989fa;

    i {
      color: #fff !important;
      vertical-align: middle;
    }

    .van-nav-bar__title {
      color: #fff;
    }
  }
</style>
