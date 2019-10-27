<template>
  <div>
    <van-nav-bar :title="$store.getters.getCurrentTabBar.title" fixed>
      <van-icon name="bell" size="18px" slot="left" @click="$router.push('/notice')"/>
      <van-icon name="service-o" size="18px" slot="right" @click="handlerService()"/>
    </van-nav-bar>
    <div class="content">
      <router-view></router-view>
    </div>
    <van-tabbar v-model="$store.getters.getCurrentTabBar.index">
      <van-tabbar-item v-for="(item,index) in tabBarItem" @click="tabBarChangeHandler(index,item)" :key="index"
                       :icon="item.icon">{{item.text}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import {updateTabBar} from "@/store/mutations-types";

  export default {
    name: "BasicLayout",
    data() {
      return {
        tabBarItem: this.$store.getters.getTabBarList,
      }
    },
    methods: {
      tabBarChangeHandler(index, current) {
        this.$store.commit(updateTabBar, {title: current.text, index});
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
  .content {
    background: #f5f6f8;
    margin: 48px 0;
  }

  .van-nav-bar {
    background: linear-gradient(#1989fa, #1989D8);

    i {
      color: #fff !important;
      vertical-align: middle;
    }

    .van-nav-bar__title {
      color: #fff;
    }
  }
</style>
