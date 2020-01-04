/*
 * 订单确认
 * */
import request from "@utils/request";

/**
 * 通过购物车 id 获取订单信息
 * @param cartId
 * @returns {*}
 */
export function postOrderConfirm(cartId) {
	return new Promise((resolve,reject)=>{
		let data = {"status":200,"msg":"ok","data":{"deduction":false,"usableCoupon":null,"addressInfo":{"id":1881,"real_name":"萨达","phone":"18575655423","province":"河北","city":"廊坊市","district":"开发区","detail":"水电费水电费水电费水电费","post_code":0,"longitude":"0","latitude":"0","is_default":1},"seckill_id":0,"combination_id":0,"bargain_id":0,"cartInfo":[{"id":9153,"type":"product","product_id":11,"product_attr_unique":"a32e21f8","cart_num":1,"combination_id":0,"seckill_id":0,"bargain_id":0,"productInfo":{"id":11,"image":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/e1b18ac6c78507600d9a4ce9c1cef0a3.jpg","price":"1.00","ot_price":"599.00","vip_price":"0.00","postage":"0.00","give_integral":"1.00","sales":1084,"stock":73,"store_name":"每晚微凉天丝桑蚕丝春秋夏被单双成人空调被凉爽被子","unit_name":"件","is_postage":0,"cost":"1.00","attrInfo":{"product_id":11,"suk":"1.5M,白色","stock":86,"sales":914,"price":"1.00","image":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/e1b18ac6c78507600d9a4ce9c1cef0a3.jpg","bar_code":"","unique":"a32e21f8","cost":"1.00"}},"truePrice":1,"vip_truePrice":0,"trueStock":86,"costPrice":"1.00"}],"priceGroup":{"storePostage":"0.00","storeFreePostage":1000,"totalPrice":"1.00","costPrice":"1.00","vipPrice":"0.00"},"orderKey":"8b7871f9df6639b71eedbd168c08b478","offlinePostage":"1","userInfo":{"uid":14540,"nickname":"a11df6a6e5d8","real_name":"","avatar":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/10\/20191031\/772750915c378a07dbc6b2dc2fa2f397.png","phone":"18476184235","now_money":"0.00","brokerage_price":"0.00","integral":"0.00","sign_num":0,"level":0,"spread_uid":0,"spread_time":0,"user_type":"h5","is_promoter":0,"pay_count":0,"spread_count":0,"login_type":"","birthday":"0","card_id":"","vip":false},"integralRatio":"0.1","offline_pay_status":1,"store_self_mention":1,"system_store":{"id":1,"name":"CRMEB演示","introduction":"CRMEB商城系统","phone":"15229229835","address":["陕西","西安","莲湖区"],"detailed_address":"大兴东路","image":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/10\/20191031\/8234773f4b567a21b0a1a89128456c90.png","latitude":"34.23158","longitude":"109.03989","valid_time":["2019-10-31","2019-12-31"],"day_time":"00:01:00 ~ 00:01:05","add_time":1572516755,"is_show":1,"is_del":0,"latlng":"34.23158,109.03989","_valid_time":"2019\/10\/31 ~ 2019\/12\/31","_detailed_address":"陕西,西安,莲湖区 大兴东路"}}}
		resolve(data)
	})
  return request.post("/order/confirm", { cartId });
}

/**
 * 计算订单金额
 * @param key
 * @param data
 * @returns {*}
 */
export function postOrderComputed(key, data) {
	return new Promise((resolve,reject)=>{
		let data = {"status":200,"msg":"ok","data":{"status":"NONE","result":{"total_price":"1.00","pay_price":1,"pay_postage":"0.00","coupon_price":0,"deduction_price":0}}}
		resolve(data)
	})
  return request.post("/order/computed/" + key, data);
}

/**
 * 获取指定金额可用优惠券
 * @param price
 * @returns {*}
 */
export function getOrderCoupon(price) {
	return new Promise((resolve,reject)=>{
		let data = {"status":200,"msg":"ok","data":[]}
		resolve(data)
	})
  return request.get("/coupons/order/" + (parseFloat(price) || 0));
}

/**
 * 生成订单
 * @param key
 * @param data
 * @returns {*}
 */
export function createOrder(key, data) {
  return request.post("/order/create/" + key, data || {});
}

/**
 * 订单统计数据
 * @returns {*}
 */
export function getOrderData() {
  return request.get("/order/data");
}

/**
 * 订单列表
 * @returns {*}
 */
export function getOrderList(data) {
  return request.get("/order/list", data);
}

/**
 * 取消订单
 * @returns {*}
 */
export function cancelOrder(id) {
  return request.post("/order/cancel", { id });
}

/**
 * 订单详情
 * @returns {*}
 */
export function orderDetail(id) {
  return request.get("/order/detail/" + id);
}

/**
 * 退款理由
 * @returns {*}
 */
export function getRefundReason() {
  return request.get("/order/refund/reason");
}

/**
 * 提交退款
 * @returns {*}
 */
export function postOrderRefund(data) {
  return request.post("/order/refund/verify", data);
}

/**
 * 确认收货
 * @returns {*}
 */
export function takeOrder(uni) {
  return request.post("/order/take", { uni });
}

/**
 * 删除订单
 * @returns {*}
 */
export function delOrder(uni) {
  return request.post("/order/del", { uni });
}

/**
 * 订单查询物流信息
 * @returns {*}
 */
export function express(uni) {
  return request.get("order/express/" + uni);
}

/**
 * 订单查询物流信息
 * @returns {*}
 */
export function payOrder(uni, paytype, from) {
  return request.post("order/pay", { uni, paytype, from });
}
/**
 * 订单核销
 * @returns {*}
 */
export function orderVerific(verify_code, is_confirm) {
  return request.post("order/order_verific", { verify_code, is_confirm });
}
