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
      },{
        path: 'register',
        name: 'Register',
        component: () => import('@/views/login/Register')
      },{
        path: 'forgetPassword',
        name: 'ForgetPassword',
        component: () => import('@/views/login/ForgetPassword')
      },
    ]
  }]
}
