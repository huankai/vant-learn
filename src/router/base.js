import BasicLayout from "@/views/layout/BasicLayout";

export default {
  name: [{
    path: "/",
    redirect: '/my',
    component: BasicLayout,
    children: [
      {
        path: 'my',
        name: 'my',
        component: () => import('@/views/my/Mine')
      }, {
        path: '/orderCenter',
        name: 'orderCenter',
        component: () => import('@/views/orderCenter/OrderCenterIndex')
      }, {
        path: '/order/list',
        name: 'orderList',
        component: () => import('@/views/order/OrderList')
      }, {
        path: '/proxy',
        name: 'ProxyCenter',
        component: () => import('@/views/proxyCenter/ProxyCenterIndex')
      },
    ]
  }]
}
