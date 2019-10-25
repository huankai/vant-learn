import Vue from 'vue'
import App from './App.vue'

import router from "@/router";
import store from "@/store";

import {
  Button,
  CellGroup,
  Cell,
  Field,
  Toast,
  NavBar,
  Divider,
  PullRefresh,
  Tabbar,
  TabbarItem,
  Icon,
  Grid,
  GridItem,
  Dialog,
  Row,
  Col
} from "vant";

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(CellGroup)
Vue.use(Cell)
Vue.use(Field)
Vue.use(Toast)
Vue.use(NavBar)
Vue.use(Divider)
Vue.use(PullRefresh)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Dialog)
Vue.use(Row)
Vue.use(Col)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
