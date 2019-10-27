import BlankLayout from "@/views/layout/BlankLayout";

export default {
  name: [{
    path: "/",
    component: BlankLayout,
    children: [
      {
        path: '/userInfo',
        name: 'UserInfo',
        component: () => import('@/views/my/UserInfo')
      }, {
        path: '/userIcon',
        name: 'UserIcon',
        component: () => import('@/views/my/UserIcon')
      }, {
        path: '/updatepassword',
        name: 'UpdatePassword',
        component: () => import('@/views/my/UpdatePassword')
      }, {
        path: '/recharge',
        name: 'Recharge',
        component: () => import('@/views/my/Recharge')
      }, {
        path: '/bank',
        name: 'Bank',
        component: () => import('@/views/my/Bank')
      }, {
        path: '/mineInserting',
        name: 'MineInserting',
        component: () => import('@/views/proxyCenter/MineInserting')
      }, {
        path: '/notice',
        name: 'notice',
        component: () => import('@/views/orderCenter/Notice')
      }, {
        path: '/notice/:id',
        name: 'noticeDetail',
        component: () => import('@/views/orderCenter/NoticeDetail')
      }
    ]
  }]
}
