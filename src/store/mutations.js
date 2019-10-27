import {updateTabBar,setUserInfo} from "@/store/mutations-types";

export default {

  [updateTabBar](state, tabBar) {
    state.currentTabBar = tabBar;
  },

  [setUserInfo](state, userInfo) {
    state.userInfo = userInfo;
  }
}
