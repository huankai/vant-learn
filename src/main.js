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
  Col,
  Image,
  RadioGroup,
  Radio,
  Popup,
  Picker,
  ActionSheet,
  ImagePreview,
  Uploader,
  List,
  NumberKeyboard,
  Search,
  NoticeBar,
  Stepper,
  Tab,
  Tabs,
  DropdownMenu,
  DropdownItem
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
Vue.use(Image)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Popup)
Vue.use(Picker)
Vue.use(ActionSheet)
Vue.use(ImagePreview)
Vue.use(Uploader)
Vue.use(List)
Vue.use(NumberKeyboard)
Vue.use(Search)
Vue.use(NoticeBar)
Vue.use(Stepper)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

Toast.setDefaultOptions({
  duration: 1000 //设置展示时长(ms)，值为 0 时，toast 不会消失
})
Vue.prototype.$toast = Toast
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
