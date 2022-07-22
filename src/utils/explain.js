export const actionOptions = [
  { label: '全部', value: '' },
  { label: '收入', value: 1 },
  { label: '支出', value: 2 }
]

export const payTypeOptions = [
  { label: '全部', value: '' },
  { label: '果核', value: 'integral' },
  { label: '铸造券', value: 'cast' },
  { label: '兑换券', value: 'voucher' },
  { label: '商品券', value: 'commodity' }
]

export const payOptions = [
  { label: '全部', value: '' },
  { label: '果核', value: 'integral' },
  { label: '微信', value: 'wxpay' },
  { label: '支付宝', value: 'alipay' },
  { label: '农行', value: 'abcpay' },
  { label: '民生', value: 'mspay' }
]

export const statusOptions = [
  { label: '全部', value: '' },
  { label: '上架', value: 0 },
  { label: '下架', value: 1 }
]

export const examineStatusOptions = [
  { label: '全部', value: '' },
  { label: '通过', value: 1, type: 'success' },
  { label: '失败', value: 2, type: 'danger' }
]

export const verifyStatusOptions = [
  { label: '全部', value: '' },
  { label: '待审核', value: 0, type: '' },
  { label: '通过', value: 1, type: 'success' },
  { label: '驳回', value: 2, type: 'danger' }
]

export const whetherOptions = [
  { label: '全部', value: '' },
  { label: '否', value: 0 },
  { label: '是', value: 1 }
]

export const interestsOptions = [
  { label: '一次性', value: 'once', type: 'warning' },
  { label: '长期', value: 'long', type: 'success' },
  { label: '指定藏品', value: 'appoint', type: 'primary' }
]

export const typeOptions = [
  { label: '全部', value: '' },
  { label: '常规藏品', value: 0, type: 'primary' },
  { label: '盲盒藏品', value: 1, type: 'warning' },
  { label: '合成藏品', value: 3, type: 'success' },
  { label: '专属藏品', value: 4, type: 'info' },
  { label: '资格券', value: 5, type: 'danger' }
  // { label: '兑换藏品', value: 6, type: 'danger' },
  // { label: '活动藏品', value: 7, type: 'danger' }
]

export const orderTypeOptions = [
  { label: '全部', value: '' },
  { label: '藏品订单', value: 'goods', type: 'primary' },
  { label: '盲盒订单', value: 'box', type: 'warning' }
  // { label: '铸造券订单', value: 'cast', type: 'success' }
]

export const orderStatusOptions = [
  { label: '全部', value: '' },
  { label: '待付款', value: 0, type: 'warning' },
  { label: '待发放', value: 1, type: 'primary' },
  { label: '已完成', value: 2, type: 'success' },
  { label: '已关闭', value: 3, type: 'info' },
  { label: '异常订单', value: 4, type: 'danger' }
]
export const shopStatusOptions = [
  { label: '全部', value: '' },
  { label: '待付款', value: 0, count: 'wait_count', type: 'warning' },
  { label: '待发货', value: 1, count: 'paid_count', type: 'primary' },
  { label: '已发货', value: 2, count: 'delivery_count', type: 'success' },
  { label: '已收货', value: 3, count: 'receipt_count', type: 'success' },
  { label: '售后中', value: 6, count: 'close_count', type: 'danger' },
  { label: '已完成', value: 4, count: 'success_count', type: 'info' },
  { label: '已关闭', value: 5, count: 'close_count', type: 'danger' }

]

export const interestsGiveOptions = [
  { label: '长期', value: 'long' },
  { label: '一次性', value: 'once' }
]

export const shopCateOptions = [
  { label: '全部', value: '' },
  { label: '普通专区', value: 1, type: 'primary' },
  { label: '专属专区', value: 2, type: 'warning' },
  { label: '兑换专区', value: 3, type: 'success' }
]

export const shopTypeOptions = [
  { label: '全部', value: '' },
  { label: '常规', value: 'common', type: 'primary' },
  { label: '兑换', value: 'voucher', type: 'danger' },
  { label: '商品劵', value: 'commodity', type: 'success' }
]

export const activityTypeOptions = [
  { label: '指定藏品', value: 'goods', type: 'primary' },
  { label: '指定专区', value: 'issuer', type: 'warning' }
]
export const handleOptions = [
  { label: '待处理', value: 0, type: 'primary' },
  { label: '处理中', value: 1, type: 'warning' },
  { label: '退货成功', value: 2, type: 'success' },
  { label: '已拒绝', value: 3, type: 'danger' },
  { label: '已撤销', value: 4, type: 'info' }
]

export const pickerOptions = {
  shortcuts: [{
    text: '最近24小时',
    onClick(picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24)
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近一周',
    onClick(picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近一个月',
    onClick(picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近三个月',
    onClick(picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      picker.$emit('pick', [start, end])
    }
  }]
}
