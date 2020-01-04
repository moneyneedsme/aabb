import request from "@utils/request";

/**
 * 首页
 * @returns {*}
 */
export function getHomeData() {
	return new Promise((resolve,reject)=>{
		let data = {"status":200,"msg":"ok","data":{"banner":[{"id":170,"name":"banner2","url":"#","pic":"http:\/\/demo26.crmeb.net\\\/uploads\/attach\/2019\/06\/13\/5d01ff65103b1.jpg"},{"id":169,"name":"首页","url":"\/pages\/first-new-product\/index?type=3","pic":"http:\/\/demo26.crmeb.net\\\/uploads\/attach\/2019\/06\/13\/5d01fdeb24ac3.jpg"},{"id":104,"name":"banenr2","url":"\/pages\/pink-list\/index?id=2","pic":"http:\/\/demo26.crmeb.net\\\/uploads\/attach\/2019\/06\/13\/5d01ad3d74621.jpg"}],"menus":[{"id":99,"name":"商品分类","pic":"http:\/\/datong.crmeb.net\/public\\\/uploads\/attach\/2019\/03\/29\/5c9ddc9f34bfd.png","url":"\/pages\/goods_cate\/goods_cate","show":"1","wap_url":"\/category"},{"id":100,"name":"领优惠券","pic":"http:\/\/datong.crmeb.net\/public\\\/uploads\/attach\/2019\/03\/29\/5c9ddccecb7f3.png","url":"\/pages\/user_get_coupon\/index","show":"2","wap_url":"\/user\/get_coupon"},{"id":101,"name":"行业资讯","pic":"http:\/\/datong.crmeb.net\/public\\\/uploads\/attach\/2019\/03\/29\/5c9ddcec57a80.png","url":"\/pages\/news_list\/index","show":"2","wap_url":"\/news_list"},{"id":102,"name":"我要签到","pic":"http:\/\/datong.crmeb.net\/public\\\/uploads\/attach\/2019\/03\/29\/5c9ddd570b8b3.png","url":"\/pages\/user_sgin\/index","show":"2","wap_url":"\/user\/sign"},{"id":105,"name":"我的收藏","pic":"http:\/\/datong.crmeb.net\/public\\\/uploads\/attach\/2019\/03\/29\/5c9dddce0eac9.png","url":"\/pages\/user_goods_collection\/index","show":"2","wap_url":"\/collection"},{"id":158,"name":"拼团活动","pic":"http:\/\/datong.crmeb.net\/public\\\/uploads\/attach\/2019\/03\/29\/5c9dde013f63c.png","url":"\/pages\/activity\/goods_combination\/index","show":"2","wap_url":"\/activity\/group"},{"id":159,"name":"秒杀活动","pic":"http:\/\/datong.crmeb.net\/public\\\/uploads\/attach\/2019\/03\/29\/5c9dde246ad96.png","url":"\/pages\/activity\/goods_seckill\/index","show":"2","wap_url":"\/activity\/goods_seckill"},{"id":160,"name":"砍价活动","pic":"http:\/\/datong.crmeb.net\/public\\\/uploads\/attach\/2019\/03\/29\/5c9ddedbed782.png","url":"\/pages\/activity\/goods_bargain\/index","show":"2","wap_url":"\/activity\/bargain"}],"roll":[{"id":121,"info":"CRMEB电商系统生鲜前端模版上线！","url":"\/pages\/index\/index","show":"是"},{"id":122,"info":"CRMEB电商系统 V3.0正式上线！","url":"\/pages\/miao-list\/miao-list","show":"否"}],"info":{"fastInfo":"上百种商品分类任您选择","bastInfo":"诚意推荐品质商品","firstInfo":"多个优质商品最新上架","salesInfo":"库存商品优惠促销活动","fastList":[{"id":10,"cate_name":"生活家电","pid":1,"pic":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/5ce6192f88c26.jpg"},{"id":11,"cate_name":"小家电","pid":1,"pic":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/5ce619be8d613.png"},{"id":39,"cate_name":"清洁用具","pid":9,"pic":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/5ce63ecc49e6a.png"},{"id":13,"cate_name":"厨房大电","pid":1,"pic":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/5ce61b83b2b66.png"},{"id":19,"cate_name":"电视","pid":2,"pic":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/5ce61ec2a0491.png"},{"id":14,"cate_name":"卫浴电器","pid":1,"pic":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/5ce61bd7708d9.png"},{"id":40,"cate_name":"日用杂货","pid":9,"pic":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/5ce63ef9bddcb.png"},{"id":16,"cate_name":"投影","pid":2,"pic":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/5ce61e0d501d4.png"},{"id":36,"cate_name":"电脑","pid":8,"pic":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/5ce63dc10cba6.png"},{"id":29,"cate_name":"口腔清洁","pid":6,"pic":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/5ce63a3d96929.jpg"}],"bastList":[{"id":11,"image":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/e1b18ac6c78507600d9a4ce9c1cef0a3.jpg","store_name":"每晚微凉天丝桑蚕丝春秋夏被单双成人空调被凉爽被子","cate_id":"33","price":"1.00","ot_price":"599.00","sales":"1087","unit_name":"件","vip_price":"0.99"},{"id":4,"image":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/2a21667934bd7e26c7edd02687efdd34.jpg","store_name":"莱克吉米手持无线吸尘器除螨除尘组合家用大吸力静音","cate_id":"12","price":"1.00","ot_price":"1599.00","sales":"264","unit_name":"件","vip_price":"0.99"},{"id":2,"image":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/824200dd43d4eb8e7c185993c82b54ad.jpg","store_name":"心想智能胶囊咖啡机S1102智能全自动手机APP可调2种模式","cate_id":"11","price":"1.00","ot_price":"799.00","sales":"155","unit_name":"件","vip_price":"0.99"},{"id":1,"image":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/05c56ba5371524c494ff2c2eec5fe1f8.jpg","store_name":"圈厨CRWB01复古微波炉家用小型迷你智能平板式微波炉","cate_id":"10","price":"0.00","ot_price":"499.00","sales":"195","unit_name":"件","vip_price":"0.00"}],"firstList":[{"id":12,"image":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/ce6baadec5ac2bac1049dbd15931cdea.jpg","store_name":"90分百搭运动可折叠包多功能户外防泼水双肩背包旅行袋","cate_id":"27","price":"1.00","unit_name":"件","sales":"125","vip_price":"0.99"},{"id":11,"image":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/e1b18ac6c78507600d9a4ce9c1cef0a3.jpg","store_name":"每晚微凉天丝桑蚕丝春秋夏被单双成人空调被凉爽被子","cate_id":"33","price":"1.00","unit_name":"件","sales":"1087","vip_price":"0.99"},{"id":9,"image":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/2e29b74d242f3298382e7c58d3abc545.jpg","store_name":"小鲸洗智能马桶盖Pro版电子坐便器盖板米家app操控即热式","cate_id":"14","price":"1.00","unit_name":"件","sales":"81","vip_price":"0.99"}],"bastBanner":[{"id":127,"img":"http:\/\/demo26.crmeb.net\\\/uploads\/attach\/2019\/06\/14\/5d03539c146db.jpg","comment":"精品推荐750*282","link":"\/pages\/first-new-product\/index"},{"id":128,"img":"http:\/\/demo26.crmeb.net\\\/uploads\/attach\/2019\/06\/14\/5d0352d7dd701.jpg","comment":"精品推荐750*282","link":"\/pages\/first-new-product\/index"}]},"activity":[{"id":124,"pic":"http:\/\/datong.crmeb.net\/public\\\/uploads\/attach\/2019\/03\/28\/5c9ccf7e9f4d0.jpg","title":"一起来拼团","info":"优惠多多","link":"\/pages\/activity\/goods_combination\/index","wap_link":"\/activity\/group"},{"id":125,"pic":"http:\/\/datong.crmeb.net\/public\\\/uploads\/attach\/2019\/03\/28\/5c9ccf7e97660.jpg","title":"秒杀专区","info":"新能源汽车火热销售","link":"\/pages\/activity\/goods_seckill\/index","wap_link":"\/activity\/goods_seckill"},{"id":126,"pic":"http:\/\/datong.crmeb.net\/public\\\/uploads\/attach\/2019\/03\/28\/5c9ccfc86a6c1.jpg","title":"砍价活动","info":"呼朋唤友来砍价~~~","link":"\/pages\/activity\/goods_bargain\/index","wap_link":"\/activity\/bargain"}],"lovely":[{"id":155,"img":"http:\/\/datong.crmeb.net\/public\\\/uploads\/attach\/2019\/03\/28\/5c9cd03224d59.jpg","comment":"1","link":"#"}],"benefit":[{"id":5,"image":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/9eb21054059dd3438bdfa883cc068ea5.jpg","store_name":"直白网红款负离子护发家用静音不伤发大功率迷你吹风机","cate_id":"40","price":"1.00","ot_price":"199.00","stock":4,"unit_name":"件"},{"id":8,"image":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/fd79a0af5d4a3eda1572cae99f6725c5.jpg","store_name":"本来设计挂钟原木时钟创意现代简约实木北欧客厅卧室钟表","cate_id":"24","price":"1.00","ot_price":"199.00","stock":58,"unit_name":"件"}],"likeInfo":[{"id":6,"image":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/fb40e23473563d0853bb02bc4baa2ea2.jpg","store_name":"云麦体脂秤称重女智能精准成人脂肪测量仪家用电子体重秤","cate_id":"40","price":"1.00","unit_name":"件","vip_price":"0.99"},{"id":7,"image":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/05\/23\/4b77ed78767c49b05d365d01b1d95d99.jpg","store_name":"火候进口整木砧板乌檀木实木家用厨房菜板防霉切菜板","cate_id":"35","price":"1.00","unit_name":"件","vip_price":"0.99"}],"logoUrl":"http:\/\/demo26.crmeb.net\/uploads\/attach\/2019\/10\/20191031\/d5ae626864fdda30cfd275a81a0e3f16.png","couponList":[{"id":448,"cid":582,"start_time":"2019\/12\/24","end_time":"2019\/12\/31","total_count":500,"remain_count":444,"is_permanent":0,"add_time":null,"coupon_price":66,"use_min_price":"99.00","is_use":false},{"id":452,"cid":586,"start_time":"","end_time":"不限时","total_count":60,"remain_count":21,"is_permanent":1,"add_time":null,"coupon_price":1,"use_min_price":"0.01","is_use":false},{"id":444,"cid":545,"start_time":"2019\/12\/24","end_time":"2020\/01\/22","total_count":100,"remain_count":39,"is_permanent":1,"add_time":null,"coupon_price":1000,"use_min_price":"80.00","is_use":false}],"site_name":"CRMEB"}}
		resolve(data)
	})
  return request.get("index", {}, { login: false });
}

/**
 * 文章 轮播列表
 * @returns {*}
 */
export function getArticleBanner() {
  return request.get("/article/banner/list", {}, { login: false });
}

/**
 * 文章分类列表
 * @returns {*}
 */
export function getArticleCategory() {
  return request.get("/article/category/list", {}, { login: false });
}

/**
 * 文章 热门列表
 * @returns {*}
 */
export function getArticleHotList() {
  return request.get("/article/hot/list", {}, { login: false });
}

/**
 * 文章列表
 * @returns {*}
 */
export function getArticleList(q, cid) {
  return request.get("/article/list/" + cid, q, { login: false });
}

/**
 * 分享
 * @returns {*}
 */
export function getShare() {
  return request.get("/share", {}, { login: false });
}

/**
 * 文章详情
 * @returns {*}
 */
export function getArticleDetails(id) {
  return request.get("/article/details/" + id, {}, { login: false });
}

/**
 * 获取微信sdk配置
 * @returns {*}
 */
export function getWechatConfig() {
  return request.get(
    "/wechat/config",
    { url: document.location.href },
    { login: false }
  );
}

/**
 * 获取微信sdk配置
 * @returns {*}
 */
export function wechatAuth(code, spread, login_type) {
  return request.get(
    "/wechat/auth",
    { code, spread, login_type },
    { login: false }
  );
}
/**
 * 获取快递公司
 * @returns {*}
 */
export function getLogistics() {
  return request.get("/logistics", {}, { login: false });
}

/**
 * 获取登陆logo
 * @returns {*}
 */
export function getLogo(type) {
  return request.get("/wechat/get_logo", { type: type }, { login: false });
}

/**
 * 获取图片base64
 * @retins {*}
 * */
export function imageBase64(image, code) {
	return new Promise((resolve,reject)=>{
		let data = {"status":200,"msg":"ok","data":{"code":"data:image\/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAC5AQMAAABOYwwfAAAABlBMVEX\/\/\/8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABpElEQVRYheWXMa6DQAxEHVFsyRH2JnAxpETKxeAmewRKCoT\/jE3+T\/RrpslKIew+ipHHNsbse9fo7tvN94q7p29Dj\/2hAgN+27jeHf+d29A\/8kwDem8AvIUgXChNDoqvU\/VDDxCISlUNWymgH6e0jsnwYdTFIDIRWtrr8pGiF4NzdQ3bybZ\/pXgtgBU8q0iGe+PFfVYBxsCyAayTlYV3gwqw8rAgbaEgrLbJQJTfDCsg7cGc3GuZVSCLrt8NqjqK+ovV9QBaalnW0Hf3ogWj7wiEoemPzMTDurP7KADPqCUKwqLvnn4IQKYAajD6n0UyHDrgGQhf8EiZmRYyYBCEM1QeXrPR\/+pZnAqA1lc85xzom2nPrAJseM5AlOPVBc4yEACqilqI0Qp+PN5CcjXgPBnuZwUsmZgigBUTbWPnZ1x+jRIAnmUN3tauxdCRjytAUpyVgzmJamw2qEDMV9HvF+RkvIB0ICdLmoKQeKoyGeBEyzOWQbaCt08ZEUgX2H2aGMAUbicGJwZcFaAfnCwRjSfTAs6YCkQmGgNx41jr4YwKfOv6AVqyT43Ez7dNAAAAAElFTkSuQmCC","image":"data:image\/jpeg;base64,\/9j\/4AAQSkZJRgABAQAAAQABAAD\/\/gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK\/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy\/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy\/8AAEQgBMQExAwEiAAIRAQMRAf\/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC\/\/EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29\/j5+v\/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC\/\/EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29\/j5+v\/aAAwDAQACEQMRAD8A9kpKXtSd6QwooooAQUGlFIaQFK4u7J7r+zJ3xLNGWCEY3L04PrVOfVZ7e3gaSFZIzlLmQOMxkHbu2\/3cg59KfrmkpqUMTtdvavbMZFlUA7eOc59q4q9S2vfD9zPceZcNDLJHaTpIV8yTIG33DAg4PdWrnqTkm19wCaNq093JPZ3qSSwsyIM\/dBUYCjt+HsKVkuNJufsunazHAbxlCiUlgHzgngfLnOPQfXFV7+wvNNgsZ9dSKODb5cdvDcFWQ9XJIByzE5yD7V3em+H9NsZmuoYsySfNycgZx0B+nXrXPRhK\/I+n6nRDESjSdO2jNCxt3tbKKGWUyyKuHcjG49zUx606mnrXecwU1mC9TSSlliYr1AyKrLL5ihs5\/pTGkRS38keoJAEXy3iLqT3IOCP1H61ZS6BOCtVry2a4s0liGZoH3oP73HI\/EEj8qWJ0kRZEOVYAg+oosOyLnmqaUHPcVAOlG6iwWLGOKTFRBj2NLuJ70WEPwaXBpm40mTnNFgH806owaXOaLAPopuaKLAOpKSlxTsAY96XFIBTgKLAJtyMYp6R8UoFOWQA4oAhcA3dvGO26Q\/QDH82\/SnSxhBkflTVGdRncn7qoq\/Tkn+f6Vk3WuOfER0qC1DiJFaaYvgJnnpjk9KmTS3KUXLY0ZJUi272C7mCj3NOHPTms3U2\/cxTg8Qyq5+mcH9Can3FTwaLCsXKTNV1uGzyalEwI5AosKw+im+avoKKLBYtk0lLSVQCUtFJSAUUGkopAVNRE5sZTbT+RKo3K\/l7xxzgjv+HNcFJrJutVsYEiEcE88Ye3RMR+cHB8xSQDz378V6PWJ4meaK2sHt4RNKL6PajeuGx+uD+Fc9eDfvJ2sNHHeNdUmfxAIWO1bIDYq4zuYA7gTnnpjjjrXT+FL3T\/ALCkMMl158rF3FxuZi2M\/exjpWpaaRbW8guZIkkuz96Zhk5zkkHtyf5VogYqadGSqOpJ7gxaaTSk02uoQVTaCCzt5ZCxCjLsSegq5VPVP+QVd\/8AXFv5UpOybHFXaRatgDaFl5HUH1rKgRoLmW358vPmR+ysTkfgc\/mKzPB+vCW3XSZ3AlGTEx7r\/d+v+e1dDcxiOS3kH98x\/UEZ\/mBRTqKpFSRpUpunJxYEYWo+c1O61FjmrM0AzmnikAp1AmFLSU4CgBBzxSgYpcc07FACAU7FFFABiilpKAClHrRSE4FADi2BVaWTHNPZqqTPzSYIt20m55GPXav9a5iPw9qC6q+oPNbb5HLSbd2WB7dK3bRsSuvqv8j\/APXq3Wc4KVm+hpGbje3UoSRJLaNC\/wB11Kn8ahtJGktYy\/8ArFG1\/wDeHB\/UVO4KMQeoqvbLh519JM\/mAf5k1qST808GjFIMilYY+ikz7CiiwjTNFLSd6ZIUlLSUmAUUUGkBQ1O\/NikQVQXkYgZ6DAzXHReJr6\/v7VJ\/ICxy+aAkRGcKwAPzH1rf8RP\/AKVbrn7kMsh\/75xXCWh2albn\/aArSMU1qcdarKMrI9Ts7kXlnHOBjdnI9MHFWKyfD0m6ykj\/ALkh\/WtYVDVmdMHeKYlNNOPWmmkWLVXUhnTLof8ATF\/5GrQqtfj\/AEC5\/wCuTfyNTLZlR+JHktozJqELLkYlUgjj+MV6\/dESW\/GcxzIT\/wB9D+hrx+AYuFOf+Wi\/+hCvaXUG3CrjLHk475rkwG0jux+8SCUYGarnrV6dB0qn3r0Dz0ApcUCngUgGgZqQCgCnYoATFFLS0wG0UtFABSUUUgCo2PNOZqjY0AMdsCqcrVPIaqSmkMfaticZPUEVobqwJpWjUuvVMN+RzW0HDAEHg1mxiyrvXI6iqluubiT3VT\/MVaLVW07cyyu+Oyj8s\/1q4u4dCwwxwabTn5pgqgCilooEalJTscUlAhKKDRSYBSdaWkpAcrrz7r+6PaOzI\/M\/\/XriQ2y6ib0ZT+tdlq7bm1eT0RU\/UD+lcVOQHBHpW0dEebW1lc9B8PSbbu4iP8Shh+B\/+vXQ9K5DR59mrW7dpPl\/MV13bNZy3Oyg7xsFNNLSGpNgqC85sp\/+ubfyqaobr\/j0m\/65t\/KplsOO55LENsjA9nX+ea9khclpEP3cqR7HcK8edQDuHVmXNewRBgyEdGPP4c\/4VyYD7R3Y\/wCyS3BqketWbhwTiqwGa9A4ByipKQACgmgB1FNDUbhQAtGaaTTC2DzQBLmjNRF+hppk96AJiwFNLCoDJz1pDLjvSCxKWqNmphl96jMnbNA7A561WkqUnJ5qKRhQMzrjnKlsA8H6Vq2Mha3Cnlk4rIufvZ4xT7DUkhnVHPyOMZ7ZFYt6lW0N0ng1DbnakmOhf+QA\/pT5HRYDISNuM5FMgQpEoP3jlj9Sc1cREvJpwWmjAp4bHpVkiYop2aKANKm96qNqcA6Bj+VRnVU7Rk\/jWftYdylCT6F+kqh\/aRPRAPxpPtzn+6PwqXWiHs5GhRWcbyY9D+QFMa6mB+8f0pe2iP2TMLW5LOLR7sJOjXEso3jPI+bpj2rjJCjjO9c\/Wut13TlunefvKpDf73Y15\/JDiXAVtwPTFXGtc4a1D3jtLG6QG0dZF80bNqg5JPHFegduleceHLNPtP2iQkeSAEA9fWup85yeJpB+JqJV0dNCg1G5vU01jx3c0LBmlLL3Dc1rmqhNTWhcoOItQXP\/AB7TD\/Yb+VS5qOfmCQf7J\/lVPYS3PKJDhF+or19JgsfThRjJ7k8n+n5V5romh3Os3EAWFmt1w0j9FxjpmvR3t1ij+Zi4XsCB+prmwMGotnZjpxul2IWk3vnPFORWJ+VWP4VTuNXht22xbUOQDxk5q1b3Kv3Lt33N\/QV2nne0VyYQytyFAHuaf9mk6l0H41MpY4yoA9akUAdBQXcqi1J6ufyp32Ud2arBGe1JtbsSP1oAgFt6Ix+px\/Sni0Q\/eU5+tTjd60fNQBF9kh\/55j8zUF3aO8W22PlPnO4IrfhzVzn1oOaAMVLfWBx5doBn7z4J\/ILWhFbz+WPN+z7++yM4\/U1YBPenAH1oAhEDdxF\/3zTvJTvGn4AVJ+NG3PWgCPyIz\/An5CkMEP8Azzj\/AO+RTwDz7U3APWgBn2eA\/wDLGM\/8BFNe0gZceTF\/3wOKnC8Uu3FAGTIk0BO5YDH2+UD\/AOtWZeX86SLtmiRB13IP59K6Z8YwVyKwNW0G31PAaCOBSQWdB859ge31pSWmhnJPoS6feCeFJJJkk3crtQAH8a0Fw5+7GPYDNUNN0G30+LyysD4YkOYsN+Nay7YhgAAe1Fio83Ui2H0T\/viipvPWiixRxkvhPW4ifsniBmHYTx5\/xrO1CPxZo1s1xO+nXEKkAkDB\/LivRK4r4h3nlWNvaq2Gdi7fQD\/9dclanCMXJHVSqSnNRZz9h4u1e\/mMNvpMVxKF3FYSwOPXvWg3iTVYP+Pjw5fJ7qCf\/Zal+GunkQXupSDmRhDH9Byf1I\/Ku9xSpUeaCk2VVqqM2kjzk+OIYuJ9Nvovqv8AjSr4+0k\/eW5U+6A\/1r0bJ9T+dRPBFJ9+JG\/3lBqvYPuR7eP8p5vceNNJkbKzSj\/eiqi3irSVOTcn\/vg\/4V6c2l6e5+extW9cwqf6V45faDBb6oyttKCRgV2+5rlr0uSzbN6MozvZG7b+L9IjcP8AaeD\/ANMzWta+Ik1FtumWM90f7wTA\/Ouf8UaRZ6brqvDaQRwzKroFjAA45r0vSJVm0e0kUAAxLwBgZxg1dGneTjfYVSSjFSS3KOn6ZdSSLPqJjUg5WCPkA+571sk040012xioqyOOUnJ3YnWr0GngrunHBH3P8aks7URqJZB83YelPmu1XhSM5xVpEAEit4VijRUjUYCqMAD6VSnKyghUY+2SBUVzqCRsqnLFs4AGSfpTLCW7uofOurVrJcnakjBnI9TjgfSqBq5nS6DbXFx5lwzb8ZUKeFx7HOfxrUQwQAAyY46kgVN9nt2fe6s5x3Y4\/IU9fs0bfLDGD7IM0aCUUiFbqM\/6tw\/05qVZyePLf8FNWPO9TRv96BkXmN\/zyf8AKkWVz1icfhU4b3\/KjdQBWe5ZCR9nmOPRKryX8iqcW04YdvKY\/wAhWjupCaBNMw\/7YuSSPsF4w9rdh\/OqNze6zvdIdMvGI+63ygH8zXVZpM0XIcG+pm2j3hUGW3kXA5DEZz+dWlaZhnyWXH94gf1qxmmsAc8mgtKwzEx\/hUf8CpG80cnYPqT\/AIU1oAf+WhFV3sGY\/LPInv0pNgWTvPAZOfrQI5O8i\/lVE6VIXz9rc9ucg\/zqeOw2dX3fXJpJsLstAEjiT9KDGx\/5aH8qYkJU8Ffyp+1\/7w\/KmMY0LH\/lo\/6UjQsxH7w8e1P+Yf8A6qY7SY+UUXAaYJSfvgD6U8WoA+Z2JqITMpO91HsWHFOE+7o6t7Aii4D\/ALMnqfzopPMPpRTAK8q8eXxn1holOdg2gf5969RuZRb2kszfwKTXk+nQHXfGNujjchl81\/8AcXn9cfrXFine0F1OvCq15voekeHtO\/svQLK0I+dYwZP948n9TWlinYorriklZHM3d3YlJTqTFMQ2vLPE6eTq1yB\/z1OPx5r1SvN\/GkWzWJWx12t+n\/1q48YvcTOvBv32ifxbb\/atB0q+HJ8tQT9VFbngy48\/w9GueYnKH27\/ANaptF9t+HUJ6tHF+qsR\/Sq3w\/n+W9tSehVx+o\/wqYaVk+6HNXotdmdqasWkHmP5j\/dXp7moVQswUdTViWdYYzEh+4Mk12pHGJd322URqeAMk1nW7tcOFj5bJz\/jVGa72+czHtmtjQLKSGxE04Imm+dgeqjsKoOhYhs47c71XfMernr+HoKRoHZ8lv0q27qvFRbgTuGM+tAhoiI6kUYAGOD9BTjzzSUgGYJ\/gx9aUhgOBk+mcU6igBqqw5JH0FPpM0UALRSUUALSZoooAM0Umag+2wGQxiQFx2\/+v0oBuxY4oyKoyX7RnmFtvrmon1FXH7uZFPo3yn9adieZGnmjNYz6nJApaaJ9gHJH+PSqb6zZzrkXhiYcgOCP1HBp8rJdWJ0n50cVy8GvFFErxSPEeNwpZdVnkmWK3K7X+65bB\/I4zRyMn20bHTZpM1hLdXsEeyXyzu6E\/Kf1qykmQCzgevzik1YpVEzT2qaa8YI4z7\/MRVNZUX+Nf++808XS9mz9OaRd0TeSv+3\/AN\/D\/jRUf2of5FFAXRj+MLz7LopjBw0zbfwrB+HdjulvtSYcEiGP+bf0pnj6+3XCxK3yxr29TXU+GLFdM8O2dswAfZvk\/wB5uT\/PH4VxR9\/EN9jtl7lBLua9FJvX1FG5fUV2nIFFIXUdxSb19RSAUiuD8dwkXCSD+KMD8QT\/APWru9y+v61y\/jWMSaarjBK5Fc+KV6bN8M7VEJ4TAuvCDQHn5pU\/M5\/rXOeEZTaeK2t248wOn4jkfyrc8ATA6VdR5+5MD+ar\/hXP3qPp\/j2AxISWuVKgdwT\/APXrB\/DTmdCV5VIHp4kEKlifmbgVl6hdiOGVm4J71NqUgjkT5gFUYyTXHeNNUe20yRYg7GQYynO0dzXoHnOSirmhoVyus+I\/sinfHboJZyOgGflB+pzx6A13M1zxsjOB0z6\/SuN+Henmw8MJIebm+PnyuRghD9wH8OfxrrhGB0\/OnawX5lciO89BtHv1qWJNo3Ekk+tPUKvuaXdQAtJijcKMigYYoxRmgnFABis\/U724tEU20cEhz8\/mS7do9cYOasvPEMqZPLY\/3uKrSyr5bxGBZGOAuBlXz\/h3oAz4\/FNvt\/feXn\/pk+f5gVoWmr2t6CYWc46\/IeKmjhtUOwRw+YOSAoyKsbgMDP4CnoD8iIXMR\/jP5VIro\/AYUuFY5IGaXaPQUhajWTcpGSKqy2rEcKH+pq06OADGQCOx6GnjpzQDVzINrcfwwsp9VkxUclldOuPJUn\/acH+lblFO5PIjlm8PXEshykKKepZyc\/his640wW8ptwjyRodpONir9Mc4\/EV3VRTW0U4+defUcGqUmRKlpocPaJsc4tSwXugBH55z\/Wr6WKsPOew4PO5QW\/xIrZbQoPN82N2Ru+BwfqKnj04xHKzY+gxVORnGlJbmCkGmKwZ7YBvx\/litGJrTA8pU\/DbWoLfPErLIP9pBQbO3Jz5Q\/M1DZqoNFVU3D7uPwFSrF\/s8fSrKRRp91APpTsCpNEiDyV\/u0VY4ooCx5M6Nr\/jG2t2G5Hm3yAf3F5P8v1r1gOuP9WK818Dqw1K+1Q2dzOAPIjMSqQvQnqR7V3B1OT\/oFaj\/AN+0\/wDi65MLG0OZ9TqxLvLlXQ094\/55ikMg\/wCeYrLOqy\/9AjUj\/wAAT\/4umHVpsf8AIG1L\/viP\/wCLrquc9jW3j\/nmPypDIP7g\/I1kHV5+2iamf+Ax\/wDxdN\/te4P\/ADA9T\/ERf\/F0rhY1zJ\/sD9awPFw8zRHO3G0+nsamOsXXbQdS\/wDIX\/xdZ+rX9zeabPDJo97brtz5spj2jH0cn9Kyq6waNKWk0zK+HM+1tSiwD\/qnx\/30P6V0EujpN4oTVZFAEMXyD\/bORn8Bn9K4TwVqE1nrF0sNlNdtJB\/q4WUEYbOfmIHevQrq8kNnC7wSQuy5aJsFkz2OCRms8OlKmr9DXEtwqNrqZusXHnbkLAZJ2HtXLwQyahqcWnEltx3YI5Ve\/wCFVtZuZtPgY+az2zyYKt95CTxtP9K7zwppU0Nil9qEPl3cibQrDlV9\/QnAOK7LHmRl7SVtmjdtbdLeBUUAAegxT3ekkkxVcvk0joSsSl6bvOabRQMlDUu6oc0u6mBKee+KikE+0+U6Z\/2hSFyO1QzX6W8TSFWYDrt5pOwDQuqJz5ttJ\/slSv606Z7po0CRpHO527idyqO57Z6dOKhtdQkvQWhWEKD\/ABNk\/iB0qS6uJLeASModlJ2qgOWODgfiaLArFF7+3tNQTSrYsblxvlkxkgdeT6mtiFdiDd1+ua5zTYjpm7zVF3q05Mlw0Q4BPYE9AOnPpWnHbXFw4e9kwo+7DGeB9T3qUyUaXmrkhTuYdhT8mokwgCqMAdAKduqyiZ2+VduOnNMyaZuo3UASbqXdUW6jdQBKGpc1Du5p24UASZoqMNTs0AOJpA3NNzTS2GFAEuaTIpuaTOaAH5HtRTfxooAwvCdqml+G7SBsCR182T\/ebn+WB+FbXnp\/eFUVijHG6nbI+zVjFWVipPmd2WzOvqKTz19RVQhB\/FTSE\/vGncC4bhcdRTPtQI4xjtVQxhhgE4pptwexouwsWzdDPOKqahKJ7C4j4+aM002p7ZpjWhKkZPNS7tWHGydzzzwVN5PjSOP\/AJ6LKn8j\/Su01C833TyMxVASFNct4ZsWt9c1XUWQlbQFI+Orv1x9AD+YrsdHtYtVYySwDyozznox9KjDRap6l4yXNUsi3pGlpOEvbuJH+YPCGXkejH+lbMsgHApZJAgwOlVi27JrpMErDHJzSKM0jcmp4k+TNAxAuaRhg1Ki5zUcvBGaYDKTPFJuoI+XNADHQyDBcgf7PFMFrB5ZRkDKeuaVpMAkcmsq4l1id9loIo1zy7jIH+NJsTLD6DZM\/mIZ4n7PHMwI+lTbLmN44WmEi8lZGGHHHU9j+lQQ2mqKAZNUVj3H2cY\/nmpp5riNgI4RNNsIUbtqkkjknnA496SSWyBEiC106HAKxqTkszcsfcnqadFdpcFhC6sV647Vix+HJLq6N3q9691L\/DFEDHFGPQc5P1zW7HBDaxLHCixoOiqMChXAftB+8S31qTPaodzE8Dj3qQVSGOzikzSNmkzxQA4nFGc0nUUmeaAH5xS7qYSMUmaYEgbmnhqr7uakQ0ASE5OKjlOMGlJyabKdwHtQA5G3cUE7WPNRwthxT5htegB2+iod9FMDPJwf9aaN2T981N9nWk+zgetc1ixi9fvU8H\/a\/WkMOPX8qjKY4z+lAFoMP71Bk4+8aoMD61EdwP3v1ouFjRMuP4jUTSkvw\/y\/rVPfjq5\/OhWDuFUksTgAc5ovcaQzTTaPLJp9s4+1ea0kyHrz0b6YArqIoorSBYYlCqPQYqhp2jW2nXM17tDXk4Cu\/wDdUdhVuWTCnmtIJqNmTNpyuiOWTLbRQeIxVeImSQn0qxKe3pVEkdX4U\/0Un2qio3GtVV22Tf7ppgQWvzk\/SoboVYsV\/cl6rynf09M0wK1K0fmRffIA7CowanU5jNICvt28AZ+tRPdpEcOCPcc4p6TgytGwwy9PcetPeOOT76hvqKAFjlSVN0bBh6ioyypNNK7AKqgEk9MZJ\/nSm1jA3Rjy37Mv9fWqAtTf5N0w+z7iTGvRyDjJ9uOlJh0I4tVl1JnFjH+4DbfObofUitaOPCjJLHHU0yJBsAVQqL0UDAAqY9AKEJBSjrSdqVetMYrdKYKex+Wox1oAdRmkopgL2pM80HgU1eTSAXPNOQ81GetOBxQA8tg4oJylNJ70ZyKYDVOGBqWZt5X6VADzUmcgUAP2D1opuPeimBm+e5HUH8KTz5D6VRPmn+Nl\/EU0Cf8A56\/pXLc0LzTt75qH7RI+T\/Dniq5FxtxvXn2p4eVQAI4yPqaAHtI57\/pUbFz0NBkl\/wCeA\/B6TzHJA8h8n0wc0gIzHIzAAZJ6ACuh0zThYp502DOR0\/uD\/GnafZC2QTTL++I4B\/g\/+vVl3ya1jC2rJchzP3qjdS7VPNWHbArNlYy3AQc81ZJds0wgJ69ac5yafGNsefwqJuTQBYtly1am3NuyjupFULRckVpFSF4pgUUfydOyeCTVWE5Vs+lT6q22DaOAoqnbv8h9xTQDBUyH921V+jEVKp+Q0gKssXngYbbIh+VvT\/61QF7uFiSmcddvKn+oqw7iKbPTd69zUqusg3DvSG2MS8R7ZpQcbQSQexpkanYkSfdQAM1MuYFZhtAG8gP2BUcn+X61Gt2biTybQAIv3pMcfh\/jTFsjSACxelRtKqnHJJ6YFPjixD8xLHuSetNwA3AoAemSucY+tKo5pFpSwjVnY4AGSfancBHYZ25GaZ3rlo9SmbVGmDEAu2VbgEcYH5V0Vvcx3CBkbPqPSpUrkRmpFnNFNzS54qrlh1FIODRmkpADdaWg81GTzQBJ1FOHC4qLPFSDpTQiPHzU8cmmfxU5aENkuPeikzRTEc4ZR0yaPNGOv6U\/7MPWmNBjoa5NTUb54\/yKT7QP8ikaIjvUZUDtmgCX7SDj\/Ct\/TbLyUE8w\/eHlV\/u\/\/XrN0qzEknnuvyIflz3Nbu7itIR6smTHO\/aoyaaTk0ZrQkiuH2oTVOzG6VnPai9k7VPZpshUHqxoGXOkYqI\/eqVzxUa8vQI0rJcrmr\/aq1quIxU0zbYmNAGRqjloHNUrdv3a\/SrV\/wA2zVQtm4xVATOcOaVW4pj\/AHjQpxSAbeWy3UBjLMp6qy9VPrWPZ3d3Y6hHaX6czEqsqj5XPb6H2rf7CobiKOaFkkHynv6e\/wCFJrqKxDN5ckxE0gWFFBYM2AxPY\/l+tPjvrH7qXMGOmFcYqO0hWSASzRq0kmGO5fbj9KedOtJDkwKP93j+VNDZfWRXhyjBh6g5qItzUMlnEsf7pQjeo4\/lTFFyrcmMj8aB2Lanms7XbhorIQoR5krABc8kd8fpWgvqa5rxKHlu1BHyomB\/Opm7IzqO0TEvZDHG8oJHlsGPrjGP8KRNXmhaOSAt5sgGFHTbnuPU\/wAqnB82VYJI94lQrvPr7\/kKoQkRq7Scyk5J9KiUXZOJyKVjuNN1JL6HkbJh95D2+ntV\/qK5HTLGa3b7aWKyuchSfur6fjXUxTiZMrxjgitI3tqdcJXWpKTQBSZpRTLHVH3p2cGm55oACcU9eRTDTkNADT9405DxTX4NOj6UAPyaKMUU7iMryh6\/rTHi9M\/nUZuQxIGQR1+WgyKRkk\/lXPoaDGjPv+dLDZm4lCAEDuc9BR5y9Bz7YrZtIPIiGfvtyf8ACmlcGyZI1hiWNBhVHApScCg9aYx5ArUkWhjhaTPSmTttjNAjOkzLchfetNMKQPTis+0XfO0h6Cr4PIoGSsc02PmUfWlJoh5mFAjchGFFJdf6k\/WiA5Wku\/8AUn60wMq8GYCKyYW2yYrXuOYjWN92TPvTAtvTRSg7kzSUgLB\/1YqrMcgR\/wB7r9O\/+ferLcRA+lVFJYlyMZ6fSgZOp+X2p6dahB4qRDQIlYjH41F3pzdKaDQBKtc3qLmbfIRuUknB\/oa6Inahb2rndVKqpI3x8\/w8j8jUz2MquxRgZHZCpwR0Vuo\/xqneGGwvJJGYO7sGjjxyo7k\/jnFE6rJsVHVg3DAcEfgeanm05ZJLa4lbIjUq7N6A5Gf1rWm9NTlaurIntL2V3LSIVjA+XPX8a04ZyknnFz0xsHTFY\/mNJIrKCqA5UHqfcirLFpkaIMcNw2P5ZqGaQlY6FZ1kQPGwZT0IOakDEVm6cgt4RGG+XsK0cHtQdUXdDic0UYooGBpV4NITS0AEhyc0qVGTmnqcUASUU3dRQBzSNsXG\/J6k+pp3mA8AiqgcZ5OPqKkUEkYIrlNbGpp8GZBOeQpwAe5rZDZNVlj8m3SNRnaAM\/zqdODg10RVkZsfUfV6exwDWZHqsRuZIXVlKsRnqOKG0hXsaPeq16+2MAVMjq4yrAj1BqpeHc4UUxktom2DPqanPUU1BtRV9BmgmgCXPFJE2JAfegHIFNT71Ajdt2yM0+6GYGqtZtkAVbmGYWHtT6gZUozGfpWPIP3mK2uqVkSg\/asY70wHMfLtzSRsGiBFJdfLET7VBZyZiK980gNGT\/UAVWbpU8zlVUAfWq+4MOKAFHFODYYD8TUMhOAo70Bsg+pGKB2JjLngU5ck81Ci4ANSg9cUAOJ3rjsTVG9sd8ZIPHfIzU81ylrsaRgoJxz64qvf3xFuXidWyOgI5pNoynYwL3SWDRmP5upbBziqF+12ui3KxyMZbYiVD13AfeBH0qYajPNc5miZWHYjFSR3sq6vBEVADZB5zxitKbuvQ5PdTt3OZuNUuVFtp1tIz3sw3buhjT1PoT29Bz6V1lnKkCL5wwqgKAO59BXKC3h8O3d\/qd\/M011cXDiKNPvMNxPf8Mn6Vo6ZdXOoSCe42pnovQItFV9kKHuux29s6Mm\/8ST2q7DMk0W9T7c1z9rqEbyCGIgoo5Y962IcjGc89azTvsdcGWgc8ClGSOab0pyGmaiZ5pe1J3pDxQA7AFITzSv\/AKoHvUSnNAEvHrRTeaKAOWZAPf603p04PtSnaPU\/iaYQCe\/51ymx2ET+ZaRMOSyA5\/CmI58xV6lfvGq2iS79PKHOY2wM+nUVZAxMx\/vV0J3RkyZjlTXH3rtDql00fUtnHvj+tdeRhDXHauFj1eT5mBcK33cjP5+1RUWxnU2IIdRmiuGngkZVCZ2jkMcntWvp2pSXeySeLqobK98j0rAnUQxyCPG1hlD6jFbFhNHBHFEcZVdo\/AUoxkmZxlZ7nReYrAlTke1Irc1lWl3KJzFtzHgH8TWnGQxyDWidzeLuiylA4akXrS45pgaNk2GrScZQj2rJs3CuM1rZyvHcUAY5bbkZqjs33WQOKs3DhCwJwcGq4fy4vNPQ9aYFO\/kJn8sdAOaqQMUkGOmakaUSajKD\/DyfyqnbTAsxPVT0\/GgZu3bbYlI78VWQEqw9qS5uB5EanhtwyPwp0Eit7A+tIa2Gb8kZ6inYA71G2Ez65pxIBU9qBkoI96mUcZqsZMDIGcdanDny\/lGeKYmZesBpI4ti52vyM47GsrUrWSSxGYmbHIKjP8q3L9D9jZwhYryVx1rmNVs5JbfMcM+4AEkI36YrKaOeqtTl5ZJre62xXE0bnnajkfpWtZanePbh5yfOHI3LWLPaeJorqP7HJfyxjnDhmA\/PNbVvb69cTD7TaXKZ\/i8tcfken5V0UrJWORxlzXVzM8W2Ms+pW+pICYJrZQXY5SEg8\/zH1NRWmorcKlrAGEKn5jjBfH9K6LW9B1rVvDItYrfbcRTKypvUCRcHPsCM1n6X4O1iyhXyoIzOf43df3fvjufTsKqdpRsU6cue6R0mnrHDEoCgTcEjHT6\/4V0ELZjFY9lo91DGkJCqF5Zt+ST3JrUjSW3jaaccL\/CnzED+tYpWVjppqS3RfYAIPWkUfKTTGnheJf3gwRkEVEb63iIjlkCs3QnvTNideTSE4fFV5L22ghkmlk8uFBlpHGAB+NRf2nayx2soZx9oYLEGQgtxnOOwwO9AzRmACCoQwFJeXUMNnJLKSEjUuxA7AVmabf2+qWIubd3CbiuJFKnj2oEannL60VVyP7y0UD0MAtz1pplAPJqqxkzjefyFNIkP8Z\/KuQ1N\/QrsC8aEniRf1H+TW45y6kdQeK4i2klguY5lJJRgfrXbo6FBKvKkZBram9CJLUUt8h5rnddtGeSCZVYnGDgZ71t20Kxqx5ZmJJJP6Vm68obygTjapOc056oznsZotEubZI\/mjKNwSO2eh9qp2hcz3LsGGHKqrdsnmq6zZfyxIWA9GrQvZo7aKBzktKwQn+8QDj9P5VcZc0Tmdt+xo25HmEj1\/lV6CXYy+hGDz0rmNMu3k06e4L5QSyqre24itWxug0sURP3hkZqW7OxpCR0kdObrVeE4GM59KsL8+MVRsPjJU5rZtZlljwD8wHIrGyAcJzxVzTgUY5HBNMDG1J5Dc3KhcFCRz0Of8\/rWH\/aeoy5gt4xKR1CLkD6k9K6LxHcabY3KS6lfw2sMq9JH2lyOv9Olc1dfEHwtZRmKC5MgHQQQnH64FK9upnyTk9xtppl693LPe3ByR9yI4\/WrsWIydi4xxzya5W5+KNjGW+y2E0pI6yyBB+mawpviXfbyUs7VRnODuP8AWp54o2jSaPSZneUL1+XmrULkxgFM+9eUj4p3kfWwtnz\/ALTCp4Pi7NEfn0aJh\/szkf8AstHPEr2cj1iN8jmMZHtUhKnqg\/KvMI\/i\/AeX0Vwf9m5H9Vp5+Mdip50e5\/Cdf8KfPHuLkkelZGeFp5UkDArzP\/hc+nn\/AJg11\/3+Smt8abMD5NEuG\/3rhR\/Q0c8e4ckux6btPc0pQ46n8TXk0vxqkP8AqtBQe73RP8lqjN8aNXP+q0uyj\/3mZv6ijniHs5HsrKQwJNNlXK8HmvB7n4teKpmOya0hX0S3B\/8AQs1ny\/EvxfL\/AMxlkHokES\/+y0vaIfs2fQKuVOd1SKyTcNx9DXzefHvionP9uXX5L\/hSf8J94sHTXLn8l\/wpe0Q+Rn0VNbRKwcOwbsc1l3klwjYivp3cdIIUUlj6ZbpXg0njfxPMDv1y9OfR8fyrNbXNWOf+JlecnJ\/fsM\/rR7RB7M+jJGj060jN0GaaU4ESE4LHsPb3plpANNgl1G\/ceY67mwMCJR0Vf69yfwr5rku7qRg0lzM5HdpCaY9xcOMNPKR6FzS5w9m+575aSP4w1IyXG5dKt3DJAeBIwOQW9ecHHtXRhFl8RRg8iOEuPY5x\/WvlvfJ\/ff8AM0gmuFOVlcH\/AHjS5heyfc+uLuAXFrJG3Rhg1R0TSlsbWRHGC0zuBnPBPH6CvlqO7uiSGkkwR13mni4nXpPKP+BmqdRXuP2XmfW3lr\/dH5UV8l\/bLr\/n6n\/7+Gil7QPZeZ7+zg5qPeBTipP8H60xlPdcfU1iMQyf5zXTaBci5tGikY7oTgDP8Pb+tcuVweV\/Wrmlzm2v4z91HIRuexqoOzE1c7BpQOE5Iqpfxma2G5VJ\/wBpQf51aCKhz3psoDR4I69q3Zm1ocVd2M+4iOTkkcA7R19BVldPaUCKdigZldfZlPH5jI\/GuguxFa27Sk7WAz8oxXMtcS3kf7t9pQg7ugznqTRT0djlmlF3OeS6n0\/w3Z284KzT3T7lP8IVzn9SK3bO7RbwSFsbI8D0HBNZ3jK0lureO\/tR5i24YTog5Utj5v0rGtr9zfS2uSz7PL6c7guP5g1U4XXMjO7jK3Q9Qg1GOYIiP8xO38a1ogUAYtliOlYfh\/TmhtlnuV\/fNhlUj7nH8+TWvqGpWWkWZu7+dYohwCerH0A7mpXmdkbtFxOBk\/WsXWPiV4e0RDGsxvLpODFbjIB926fzrzDxb47vdcdra0LW2njjYDhpP94j+XT61xbZPes5VOxvGn1Z03jLxzfeL54vOijt7eEkxRJyQT3Ldz+Vckzn1pxHvTCKzeporLQYx9z+dMYg96lIqJgKChmRSZFB4puaAuODAGmlhmkJphIzQFx24Um4U3NFFhXA4NMI96dikIxTsFxhx600getPPc0g56jrRYQzAzSYqXaM0mz0osIjHTHpSHNSBCCeOtLz\/dosBCRTcVMf92kx7UwuQ4oqbHtSYHpSsO4xRzTtvPWnBfan4HpSAi2CipcD0ooA99aNR6\/nTCBnnP509t+ejflTGRsdDSMxhVc96aSVOR2p\/wAw6gUmT3AoA7KB2uoI5lP31BqUR9dx4Hf0qnpBaLS42mGwc7c9xnirzASBsdGXFdHQhmDfXiywNtTzB0O7gf4\/yri9TkmaURea\/mk\/u1BwB9AK6i7QWIZbjcT0AjHX8TXHaj\/al9deXp0YhOQrKgJdgf8Aa649his4yfNucc1fRmta6hNBdpGQzXIwrxJ3z2Pp\/Ot3SPBllaan\/bEgk+0Pl1hc5EbEkk03wl4T\/sZDdXj+deyc46iMf1PvXVTTxWcElxcSLHFGNzMxwAK6ZSNKdOy1FDLGjSSMFRQSWY4AHrXkHi\/Wm8Q6p5iuFtYRshQnnHdj7n\/CtDxX4xl1hWtLFWhss\/MSfml+voPauKdWJ5zXNOd9EdkIW1ZG8AB+8PzqFol5ywqQoxPQ00wvWZdyAxLn71J5C4+9VjyG9aX7OaYFU26\/5NIbZAOgq55Bx1oMPBoAz2tkPY\/gab9kT3FXzAfek8g+h\/KgCh9kX1NH2VRxzV7yvUH8qTyee9AFL7MmKT7Ipq\/5XsfypfIOeh\/KgCh9lUf\/AKqPsyenNaQtmPY1ItrnsenpQBlfYgx4AxTv7NyQVUfia1xbqvUH8qf5IA4B\/Ki4GN\/ZuMZQU7+zgB9ytjymzjkfhR5ZoAxTYEfwGk+xHuMVteWfQ\/gKY0WccGi4GMbInuPyoFjnuK1XgwfQ03yPfmncRmf2efaj+zfpWoIPr+dJ9n7\/ANaLgZg00Z5xTv7NHYitEQegpfs59aQzN\/s0etFaX2Y+v60UAett0FMNFFIzIX6Com+6aKKAOwm\/48ov91f5VZh\/1C\/7tFFdJmYHiX\/UL9Vqj4f\/AOQlL\/uUUVPUxfxnYr978K5n4h\/8ipJ\/13j\/AJ0UVU\/hZtHdHlLdfwqNuv4UUVynSxlNeiimSIKU9qKKAHn+lFFFACj7v40j9BRRQA3tR3oooAUfep5+9RRQMnjp\/wDFRRQIU0vYUUUwA\/e\/CiiigBD92mL0NFFIBH+9TR0oooAOxpV+7RRQA7+KmGiigCKiiigD\/9k="}}
		resolve(data)
	})
  return request.post(
    "/image_base64",
    { image: image, code: code },
    { login: false }
  );
}