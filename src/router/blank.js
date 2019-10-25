import BlankLayout from "@/views/layout/BlankLayout";

export default {
  name: [{
    path: "/",
    component: BlankLayout,
    children: [
      {
        path: 'updatepassword',
        name: 'updatePassword',
        component: () => import('@/views/my/UpdatePassword')
      }
    ]
  }]
}
