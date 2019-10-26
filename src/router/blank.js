import BlankLayout from "@/views/layout/BlankLayout";

export default {
  name: [{
    path: "/",
    component: BlankLayout,
    children: [
      {
        path: 'userInfo',
        name: 'userInfo',
        component: () => import('@/views/my/UserInfo')
      }, {
        path: 'userIcon',
        name: 'userIcon',
        component: () => import('@/views/my/UserIcon')
      }, {
        path: 'updatepassword',
        name: 'updatePassword',
        component: () => import('@/views/my/UpdatePassword')
      }
    ]
  }]
}
