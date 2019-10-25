import UserLayout from "@/views/layout/UserLayout";

export default {
  name: [{
    path: "/user",
    component: UserLayout,
    redirect: '/user/login',
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/login/Login')
      },
    ]
  }]
}
