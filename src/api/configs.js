import request from '@/utils/request'

// 获取谷歌验证
export function addAuthenticator() {
  return request.post('/configs/google_authenticator')
}

// 删除谷歌验证
export function delAuthenticator(data) {
  return request.delete('/configs/delete_google_png', {
    data
  })
}

// 版本控制状态
export function versionStatus() {
  return request.get('/configs/version')
}

// 修改版本控制状态
export function putVersionStatus(data) {
  return request.put('/configs/version', {
    ...data
  })
}
// 订单失信配置
export function orderLimit() {
  return request.get('/configs/order_limit')
}

// 修改订单失信配置
export function putOrderLimit(data) {
  return request.put('/configs/order_limit', {
    ...data
  })
}
// 解除失信
export function blacklistCancel(data) {
  return request.post('/configs/blacklist/cancel', {
    ...data
  })
}

// 订单失信列表
export function blacklist(params) {
  return request.get('/configs/blacklist', {
    params
  })
}

// 获取邀请配置
export function invite() {
  return request.get('/configs/invite')
}

// 修改邀请配置
export function putInvite(data) {
  return request.put('/configs/invite', {
    ...data
  })
}

// 提现配置
export function withdrawal() {
  return request.get('/configs/withdrawal')
}

// 提现配置
export function cnyWithdrawal() {
  return request.get('/configs/cny/withdrawal')
}

// 获取Fil钱包分发比例
export function fil() {
  return request.get('/configs/fil')
}

// usdt 兑换 RMB
export function usdt() {
  return request.get('/configs/usdt/price')
}

// 获取 `联系方式`
export function contact() {
  return request.get('configs/contact')
}

// 修改 `联系方式`
export function putContact(data) {
  return request.put('configs/contact', data)
}

// 关于
export function about() {
  return request.get('/configs/about')
}

// 修改关于
export function putAbout(data) {
  return request.put('/configs/about', {
    ...data
  })
}

// 注册协议
export function register() {
  return request.get('/configs/register')
}

// 修改注册协议
export function putRegister(data) {
  return request.put('/configs/register', {
    ...data
  })
}

// 合约地址
export function changeAddress() {
  return request.get('/configs/address')
}

// 修改合约地址
export function putChangeAddress(data) {
  return request.put('/configs/address', {
    ...data
  })
}

// 用户等级默认图标
export function icon() {
  return request.get('/configs/default_icon')
}

// 密钥配置
export function ant() {
  return request.get('/configs/ant_config')
}

// 修改密钥配置
export function putAnt(data) {
  return request.put('/configs/ant_config', {
    ...data
  })
}

// 签名配置
export function sign() {
  return request.get('/configs/sign')
}

// 赠送配置
export function giveList() {
  return request.get('/configs/give')
}
export function addGiveList(data) {
  return request.put('/configs/give', {
    ...data
  })
}

// 热度配置
export function hotList() {
  return request.get('/configs/hot')
}

export function putHotList(data) {
  return request.put('/configs/hot', {
    ...data
  })
}

// 链上说明配置
export function chainList() {
  return request.get('/configs/chain_query')
}

export function addChainList(data) {
  return request.put('/configs/chain_query', {
    ...data
  })
}

// 获取邀请配置
export function topicChain() {
  return request.get('/configs/topic_chain')
}

// 修改邀请配置
export function putTopicChain(data) {
  return request.put('/configs/topic_chain', {
    ...data
  })
}

// 铸造商品配置
export function castList() {
  return request.get('/configs/cast')
}
export function addCastList(data) {
  return request.put('/configs/cast', {
    ...data
  })
}

// 修改支付配置
export function putPay(data) {
  return request.put('/configs/pay_switch', {
    ...data
  })
}

// 支付方式开关配置
export function pay() {
  return request.get('/configs/pay_switch')
}

// 销毁配置
export function putDestroy(data) {
  return request.put('/configs/user_goods/destroy', {
    ...data
  })
}

// 销毁配置
export function destroy() {
  return request.get('/configs/user_goods/destroy')
}

// 兑换配置
export function putVoucher(data) {
  return request.put('/configs/voucher', {
    ...data
  })
}

// 销毁配置
export function voucher() {
  return request.get('/configs/voucher')
}

// 客服配置
export function putKf(data) {
  return request.put('/configs/kf', {
    ...data
  })
}

// 客服配置
export function kf() {
  return request.get('/configs/kf')
}

// 订单失信配置
export function putCancelorder(data) {
  return request.put('/configs/cancel_order', {
    ...data
  })
}

// 订单失信配置
export function cancelOrder() {
  return request.get('/configs/cancel_order')
}

// 购买资格提示
export function qualification() {
  return request.get('/configs/qualification')
}

// 购买资格提示
export function putQualification(data) {
  return request.put('/configs/qualification', {
    ...data
  })
}

// 运费配置
export function postage() {
  return request.get('/configs/postage')
}

// 运费配置
export function putpostage(data) {
  return request.put('/configs/postage', {
    ...data
  })
}

// 商品卷配置
export function commodity() {
  return request.get('/configs/commodity')
}

// 商品卷配置
export function putCommodity(data) {
  return request.put('/configs/commodity', {
    ...data
  })
}

// 实名认证配置
export function certType() {
  return request.get('/configs/cert_type')
}

// 实名认证配置
export function putcertType(data) {
  return request.put('/configs/cert_type', {
    ...data
  })
}

// 短信发送配置
export function smsType() {
  return request.get('/configs/sms_type')
}

// 短信发送配置
export function putSmsType(data) {
  return request.put('/configs/sms_type', {
    ...data
  })
}

// 自动发货时间配置
export function receipt() {
  return request.get('/configs/receipt')
}

// 短信发送配置
export function putReceipt(data) {
  return request.put('/configs/receipt', {
    ...data
  })
}

// 铸造藏品列表
export function castGoodsList(params) {
  return request.get('/public/filter/cast_goods', {
    params
  })
}

// 奇藏果转赠配置
export function qcgGive() {
  return request.get('/configs/qcg_give')
}

// 奇藏果转赠配置
export function putQcgGive(data) {
  return request.put('/configs/qcg_give', {
    ...data
  })
}

// 展厅提示配置
export function galleryTip() {
  return request.get('/configs/gallery_tip')
}

// 展厅提示配置
export function putGalleryTip(data) {
  return request.put('/configs/gallery_tip', {
    ...data
  })
}

// 展厅域名配置
export function galleryUrl() {
  return request.get('/configs/gallery_url')
}

// 展厅域名配置
export function putGalleryUrl(data) {
  return request.put('/configs/gallery_url', {
    ...data
  })
}
