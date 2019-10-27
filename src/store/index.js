import Vue from "vue"
import Vuex from "vuex"

import mutations from "@/store/mutations"
import actions from "@/store/actions"
import getters from "@/store/getters"

Vue.use(Vuex);
const state = {
  currentTabBar: null,
  tabBarList: [
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
  ],
  userInfo: {
    nickName: '黄老',
    sex: '未知',
    userIcon: "https://img.yzcdn.cn/vant/cat.jpeg",
    phone: "18888888888"
  }
};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
