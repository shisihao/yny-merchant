import request from '@/utils/request'
// 登录
export function login(data) {
  return request.post('/login',
    data
  )
}

// 校验是否绑定谷歌验证码
export function checkBind(data) {
  return request.post('/check_bind',
    data
  )
}

// 绑定谷歌验证码
export function setBind(data) {
  return request.post('/bind',
    data
  )
}

// 获取gt验证参数
export function getGt(params) {
  return request.get('/first_register',
    params
  )
}

// 改变是否第一次登录
export function putFirst(params) {
  return request.put('/check-first',
    params
  )
}

// 发送验证码
export function getCode(data) {
  return request.post('/verification-codes', {
    ...data
  })
}

// 获取 菜单栏 Sidebar
export function getMenuNav() {
  return request.get('/nav')
}

// 首页数据
export function getHome() {
  return request.get('/home')
}

// 订单数据
export function getHomeOrderCount(params) {
  return request.get('/home/order/count', {
    params
  })
}
// 订单报表
export function homeOrder(params) {
  return request.get('/home/order', {
    params
  })
}
// 销售报表
export function homeSales(params) {
  return request.get('/home/sales', {
    params
  })
}

// 用户报表
export function usersSales(params) {
  return request.get('/home/users', {
    params
  })
}

// 分类列表
export function publicCategory(params) {
  return request.get('/public/category')
}

// 标签列表
export function tagList(params) {
  return request.get('/public/tag', {
    params
  })
}

// 身份列表
export function identityList(params) {
  return request.get('/public/identity', {
    params
  })
}

// 用户列表
export function userList(params) {
  return request.get('/public/user', {
    params
  })
}

// 余额
export function balanceList(id) {
  return request.get(`/public/balance/${id}`)
}

// 盲盒分类列表
export function boxCategoryList(params) {
  return request.get('/public/box/category', {
    params
  })
}

// 商品分类映射
export function goodsCategoryList(params) {
  return request.get('/public/goodsCategory/filter', {
    params
  })
}
