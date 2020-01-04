import request from "@utils/request";

/*
 * 商品分类
 * */
export function getCategory() {
  return request.get("/category", {}, { login: false });
}

/*
 * 商品详情
 * */
export function getProductDetail(id) {
	return new Promise((resolve,reject)=>{
		let data = {"status":200,"msg":"ok","data":{"uid":14540,"storeInfo":{"add_time":1558595918,"browse":0,"cate_id":"33","code_path":"0","cost":"1.00","description":"<img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/9254a698e666720ddde2bfdae4418fbc.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/359c08ce1ea4613cfd383294164c4c2b.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/39db68e70f3ef7a234e5bff467492f41.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/289dd08d3cade4592a59846717997155.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/811caaab976e1caf689dc7dceb2bd5aa.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/f70c77fcbbbb12abd0e4f0afcea02f54.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/795a4a2361ebc37f84567ab7d64d044f.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/ab88c30d08e400f71d369e7d92a7193d.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/da2a03f6914e9c15332325019d03831b.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/3ef44a4807a204f21c1755955383dfca.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/abbb25b1b0971a56f6c080e57ce63dee.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/e86b08e373d4c4cc9716cf8017ef5c58.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/7a86efbddcbd7fcd70ce9d57fb92910c.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/9b44a6ac071cca684139b88b35223398.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/0d57f4b9c2902461ccd11d6682911472.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/1f6352c26282eae8c9707e4300380f9f.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/d586ed7a04926891eb766404b1f09e2f.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/a31aa092aab370bdc915fd84bcd5b9a8.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/3e6d5bd2d1d30e87015df732b762b519.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/50e97ec973f8a06ad5fe70fb688c4f93.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/53f5cb81d12c6a509d20e0f8df6a0d6b.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/3a53694f2b48de21e22e9a4c14cdf230.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/8061795e468892a4115d6b85ca445df5.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/404737f1f9b9a02efd6474889dcf2a39.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/15ce6d5189c786d29ad2f634c0978872.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/29a610302af514f017c8d4b6d1ece0b3.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/3aae6d42d1393eec40e710020dd497e4.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/e6b8f8a029fe201e4ed12256ba735550.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/44c51c89ba10ffc76885d11df43c8bdf.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/d0895ed6b2f2a9eea99f21b03120b04b.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/515df7b6fc17560cc76e79c276d6ef32.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/5c8b8645e64f41720a1996455da63b81.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/86fadaeb0c7099d52425d1fda543641f.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/c2d752896ddc7068669c900d88eb50f7.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/bab2a192dafb5e0edfef3982e2f67a59.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/d4a8bcb6944736d99d885f856c0318e0.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/69b949f3fcdade8c3ded9cdc25bcb03c.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/2f30418ac907bcc6171d3b4ef74d7233.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/eced9d98b16e4bcbb1d6f739cc8a9466.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/339988d866509261583e47cca3498b66.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/619b14d40e73913a795661ac81cd970c.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/c5a835c3150beeb2c870683eab28ab0a.jpg\" align=\"absmiddle\"><img src=\"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/9256a7b409e98b61437e75ce531a4458.jpg\" align=\"absmiddle\">","ficti":3,"give_integral":"1.00","id":11,"image":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/e1b18ac6c78507600d9a4ce9c1cef0a3.jpg","is_bargain":0,"is_benefit":0,"is_best":1,"is_del":0,"is_hot":0,"is_new":1,"is_postage":0,"is_seckill":0,"is_show":1,"keyword":"","mer_id":0,"mer_use":0,"ot_price":"599.00","postage":"0.00","price":"1.00","sales":1084,"slider_image":["http:\/\/demo26.crmeb.net\/\/uploads\/attach\/2019\/05\/23\/897ff3791cf55df0b4e9bcdaee6f624e.jpg","http:\/\/demo26.crmeb.net\/\/uploads\/attach\/2019\/05\/23\/0cc12a91892e26e3d660759b0abd6c68.jpg","http:\/\/demo26.crmeb.net\/\/uploads\/attach\/2019\/05\/23\/ba272640398ad9e94e8679da49e78f12.jpg"],"sort":0,"stock":73,"store_info":"每晚微凉天丝桑蚕丝春秋夏被单双成人空调被凉爽被子","store_name":"每晚微凉天丝桑蚕丝春秋夏被单双成人空调被凉爽被子","unit_name":"件","vip_price":"0.99","fsales":"1087","image_base":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/e1b18ac6c78507600d9a4ce9c1cef0a3.jpg","code_base":"http:\/\/demo26.crmeb.net\/uploads\/qrcode\/11_product_detail_wap.jpg","userCollect":false,"userLike":false},"similarity":[{"id":11,"store_name":"每晚微凉天丝桑蚕丝春秋夏被单双成人空调被凉爽被子","image":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/e1b18ac6c78507600d9a4ce9c1cef0a3.jpg","price":"1.00","sales":1084,"ficti":3},{"id":7,"store_name":"火候进口整木砧板乌檀木实木家用厨房菜板防霉切菜板","image":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/4b77ed78767c49b05d365d01b1d95d99.jpg","price":"1.00","sales":130,"ficti":1}],"productAttr":[{"product_id":11,"attr_name":"尺寸","attr_values":["1.5M","1.8M"],"attr_value":[{"attr":"1.5M","check":false},{"attr":"1.8M","check":false}]},{"product_id":11,"attr_name":"颜色","attr_values":["白色","藏青色"],"attr_value":[{"attr":"白色","check":false},{"attr":"藏青色","check":false}]}],"productValue":{"1.5M,白色":{"product_id":11,"suk":"1.5M,白色","stock":86,"sales":914,"price":"1.00","image":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/e1b18ac6c78507600d9a4ce9c1cef0a3.jpg","bar_code":"","unique":"a32e21f8","cost":"1.00"},"1.5M,藏青色":{"product_id":11,"suk":"1.5M,藏青色","stock":83,"sales":17,"price":"2.00","image":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/e1b18ac6c78507600d9a4ce9c1cef0a3.jpg","bar_code":"","unique":"1265af4d","cost":"1.00"},"1.8M,白色":{"product_id":11,"suk":"1.8M,白色","stock":41,"sales":59,"price":"3.00","image":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/e1b18ac6c78507600d9a4ce9c1cef0a3.jpg","bar_code":"","unique":"ab975c5e","cost":"1.00"},"1.8M,藏青色":{"product_id":11,"suk":"1.8M,藏青色","stock":937,"sales":63,"price":"4.00","image":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/e1b18ac6c78507600d9a4ce9c1cef0a3.jpg","bar_code":"","unique":"f2056679","cost":"1.00"}},"priceName":0,"reply":{"product_score":5,"service_score":5,"comment":"谢谢，是测试","merchant_reply_content":null,"merchant_reply_time":"1970-01-01 08:00","pics":null,"add_time":"2019-12-29 17:45","nickname":"明***风","avatar":"https:\/\/wx.qlogo.cn\/mmopen\/vi_32\/Q0j4TwGTfTKO9EB4JJvXGDgh3pF6PFyAYiaApe4iaujTUFtibuibDdAsfgWibrRibvs4qsHz3FibA1y8ibr3opWng5qIuQ\/132","suk":"1.5M,白色","star":"5"},"replyCount":1,"replyChance":"100.00","mer_id":0,"system_store":{"id":1,"name":"CRMEB演示","introduction":"CRMEB商城系统","phone":"15229229835","address":["陕西","西安","莲湖区"],"detailed_address":"大兴东路","image":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/10\/20191031\/8234773f4b567a21b0a1a89128456c90.png","latitude":"34.23158","longitude":"109.03989","valid_time":["2019-10-31","2019-12-31"],"day_time":"00:01:00 ~ 00:01:05","add_time":1572516755,"is_show":1,"is_del":0,"latlng":"34.23158,109.03989","_valid_time":"2019\/10\/31 ~ 2019\/12\/31","_detailed_address":"陕西,西安,莲湖区 大兴东路"},"good_list":[{"image":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/fb40e23473563d0853bb02bc4baa2ea2.jpg","store_name":"云麦体脂秤称重女智能精准成人脂肪测量仪家用电子体重秤","price":"1.00","id":6,"ot_price":"199.00"},{"image":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/9eb21054059dd3438bdfa883cc068ea5.jpg","store_name":"直白网红款负离子护发家用静音不伤发大功率迷你吹风机","price":"1.00","id":5,"ot_price":"199.00"},{"image":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/4b77ed78767c49b05d365d01b1d95d99.jpg","store_name":"火候进口整木砧板乌檀木实木家用厨房菜板防霉切菜板","price":"1.00","id":7,"ot_price":"259.00"},{"image":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/2a21667934bd7e26c7edd02687efdd34.jpg","store_name":"莱克吉米手持无线吸尘器除螨除尘组合家用大吸力静音","price":"1.00","id":4,"ot_price":"1599.00"},{"image":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/824200dd43d4eb8e7c185993c82b54ad.jpg","store_name":"心想智能胶囊咖啡机S1102智能全自动手机APP可调2种模式","price":"1.00","id":2,"ot_price":"799.00"},{"image":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/05c56ba5371524c494ff2c2eec5fe1f8.jpg","store_name":"圈厨CRWB01复古微波炉家用小型迷你智能平板式微波炉","price":"0.00","id":1,"ot_price":"499.00"}],"mapKey":"U65BZ-F2IHX-CGZ4I-73I7L-M6FZF-TEFCH"}}
		resolve(data)
	})
  return request.get("/product/detail/" + id, {}, { login: false });
}

/*
 * 商品分销二维码
 * */
export function getProductCode(id) {
	return new Promise((resolve,reject)=>{
		let data = {"status":200,"msg":"ok","data":{"code":"data:image\/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhAQMAAAAEfUA5AAAABlBMVEX\/\/\/8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACeUlEQVRYhe2YPY6DQAyFjSim5Ahzk3AxJCJxMbjJHIGSAuF97w2gzVap1iky0kZJPiJ5\/fNsj9n3vH96d98an3zrfc\/W+G5+dPjyiKQP\/G3NOhZ+zO7rkM26ZwVxtPMCOsBSG13ug834F+Kp2VjgU1ra7bbZZ9AeNifEtKTFGdp4WuM7GD62xRcY7vPf6P87VS08uqm8vLxUSgCt8rCawYmTJ18tb3\/FI4AizWDhntOC4lRo4c6pxFJGlblWkh6hzVSz4nM0Va6lGdanAwmn\/NsskppBVB\/dU04seHigY73UWoii\/dq61CxBY6Vrbg3dOUdSqhmiOtLQXVWBVlllJJA2Xk+R3jPreFqPpb3XqOb6yNkD8NwcSSmqKkl+zJQ0zhYtwx1I6T\/jnAM1s9q2VQY166IoNII+hLLOMJwJl\/WLW1VCqHVS+VYzoekFkrabH5FUA7Nraob1EFrE1\/15V2gMZS3QyIxhB3RZ5dg9X\/NGDKVGqFlrJvRzohhLrdAw2nHvQS1sGp1VBn6uHpGUGqZaYMem5OJLSFooRdvWu0xQmISUtP3ukjFU66sAJ2mKftHKmI5I2lNeJRTwpGuSlrjVjIyinL4QXwT5gRHHORP6UoMcSTEOsgFllOS56mtm3UKpejcCqvzLVwVcNkdRHporI7kGYVLF5n\/WQhRt+A7DBDwJm3WZRLU9e3cUre6E1HMNkmRQRu7pK4hSLe57kMym6UmL7BxJdTdC+fel3gTWbfHKySiqOzeNELVftmxP\/nIjF0R7rYdUEDVNbdafQMei1LvW1+H3rWkEZXzpSZrrWq+lcGmOpIolGrj6UdFexguS7KH0e949PwthUQ\/rd9vsAAAAAElFTkSuQmCC"}}
		resolve(data)
	})
  return request.get("/product/code/" + id, {}, { login: true });
}

/*
 * 商品列表
 * */
export function getProducts(q) {
  return request.get("/products", q, { login: false });
}

/*
 * 购物车数量
 * */
export function getCartNum() {
  return request.get("/cart/count");
}

/*
 * 添加收藏
 * */
export function toCollect(id, category) {
  return request.get("/collect/add/" + id + "/" + category);
}

/*
 * 为你推荐
 * */
export function getHostProducts(page, limit) {
  return request.get(
    "/product/hot",
    { page: page, limit: limit },
    { login: false }
  );
}

/*
 * 精品、热门、首发列表
 * */
export function getGroomList(type) {
  return request.get("/groom/list/" + type, {}, { login: false });
}

/*
 * 购物车 添加
 * */
export function postCartAdd(data) {
	return new Promise((resolve,reject)=>{
		let data = {"status":200,"msg":"ok","data":{"cartId":9153}}
		resolve(data)
	})
  return request.post("/cart/add", data);
}

/*
 * 购物车列表
 * */
export function getCartList() {
  return request.get("/cart/list");
}

/*
 * 购物车 删除
 * */
export function postCartDel(ids) {
  return request.post("/cart/del", { ids });
}

/*
 * 购物车 获取数量
 * */
export function getCartCount(data) {
  return request.get("/cart/count", data);
}

/*
 * 购物车 修改商品数量
 * */
export function changeCartNum(id, number) {
  return request.post("/cart/num", { id, number });
}

/**
 * 搜索推荐关键字
 */
export function getSearchKeyword() {
  return request.get("/search/keyword", {}, { login: false });
}

/**
 * 产品评论列表
 */
export function getReplyList(id, q) {
  return request.get("/reply/list/" + id, q, { login: false });
}

/**
 * 产品评价数量和好评度
 */
export function getReplyConfig(id) {
  return request.get("/reply/config/" + id, {}, { login: false });
}

/**
 * 评价页面获取单个产品详情
 */
export function postOrderProduct(unique) {
  return request.post("/order/product", { unique }, { login: false });
}

/**
 * 提交评价页面；
 */
export function postOrderComment(data) {
  return request.post("/order/comment", data, { login: false });
}
