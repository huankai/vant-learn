
export default {

  getTabBarList(state) {
    return state.tabBarList;
  },

  getCurrentTabBar(state, getters) {
    let currentTabBar = state.currentTabBar;
    if (!currentTabBar) {
      const index = 3;
      const defaultActive = getters.getTabBarList[index];
      currentTabBar = {
        title: defaultActive.text,
        index: index
      }
    }
    return currentTabBar;
  },

  getCurrentUserInfo(state) {
    return state.userInfo;
  }
}
