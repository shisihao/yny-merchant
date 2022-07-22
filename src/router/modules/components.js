export const localMap = {
  /* login: require('login/index').default // 同步的方式
  login:()=> import('login/index')      // 异步的方式 */
  shopOrders: () => import('@/views/shop-orders/index'), // 实体商品订单管理
  exportCenter: () => import('@/views/exportCenter/index'), // 导出中心管理
}
