import Vue from 'vue'
import App from './App.vue'

import router from "@/router";
import store from "@/store";

import {Button, CellGroup, Field, Toast, NavBar, Divider, PullRefresh, Tabbar, TabbarItem, Icon} from "vant";

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(CellGroup)
Vue.use(Field)
Vue.use(Toast)
Vue.use(NavBar)
Vue.use(Divider)
Vue.use(PullRefresh)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
