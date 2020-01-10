<template>
  <div class='pageIndex'>
    <van-swipe :autoplay="3000" indicator-color="white" class='swipe'>
      <van-swipe-item>
        <img src="https://img.yzcdn.cn/vant/cat.jpeg" >
      </van-swipe-item>
    </van-swipe>
    <div class='shopName' @click='toShopList'>
      <van-image
        width="57px"
        height="57px"
        fit="cover"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <van-cell center title="深圳龙华腾龙店（龙华店）" is-link label="距您2.1km" />
    </div>
    <div class='shopInfo'>
      <div class='SIContent'>
        <img :src="require('../assets/imgs/1.png')">
        <div class="van-multi-ellipsis--l2">龙华区民治街道布龙路特发和平里左侧100米左侧100米</div>
        <div class='SIRinght'>
          <span></span>
          <img :src="require('../assets/imgs/2.png')" class='phone'>
        </div>
      </div>
      <van-divider />
      <div class='SIContent'>
        <img :src="require('../assets/imgs/3.png')">
        <div class="van-multi-ellipsis--l2">营业时间 07:00-20:00</div>
      </div>
    </div>
    <div class='division'></div>
    <van-tabs  v-model="activeName" swipeable animated color='#76C5C5' line-width='43'>
      <van-tab title="服务项目" name="project">
        <div class='projectItem' @click='toDetails'>
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
          <div>
            <div class="van-multi-ellipsis--l2">龙华区民治街道布龙路特发和平里左侧100米左侧100米</div>
            <h6>
              <span>￥296</span>
              <i>￥296</i>
              <img :src="require('../assets/imgs/4.png')">
            </h6>
          </div>
        </div>
        <van-divider />
      </van-tab>
      <van-tab title="门店介绍" name="introduce">内容 2</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name:'pageIndex',
  data(){
    return{
      activeName:'project'
    }
  },
  methods:{
    toDetails(){
      this.$router.push({
        path:'/shopDetails'
      })
    },
    toShopList(){
      this.$router.push({path:"/shopList"})
    }
  }
}
</script>
<style lang='scss' scoped>
  .pageIndex{
    overflow: hidden;
    .swipe{
      height:152px;
      z-index: -1;
    }
    .shopName{
      margin:-15px 20px 0px;
      padding:10px 0px 14px 8px;
      border-radius:8px;
      box-shadow:0px 3px 6px rgba(0,0,0,0.07);
      background: white;
      .van-image{
        float: left;
        margin-right: 15px;
      }
      .van-cell{
        padding:2px 10px 0px 0px;
        width:auto;
      }
    }
    .shopInfo{
      padding:0px 20px;
      overflow: hidden;
      .SIContent{
        position: relative;
        margin-top:15px;
        >img:first-child{
          width: 18px;
          height: 18px;
          vertical-align: top;
          position: absolute;
          top:0px;
          left: 0;
        }
        .van-multi-ellipsis--l2{
          display: inline-block;
          vertical-align: middle;
          color: #666666;
          font-size: 14px;
          padding-left: 25px;
          padding-right: 55px;
        }
        .SIRinght{
          position: absolute;
          top:50%;
          right: 0;
          transform: translateY(-50%);
          >span{
            width: 1px;
            height: 24px;
            background: rgba(223,223,223,1);
            display: inline-block;
            vertical-align: middle;
            margin: 0px 14px;
          }
          .phone{
            width: 24px;
            height: 24px;
            vertical-align: middle
          }
        }
      }
      .van-divider{
        margin:10px 0
      }
      
    }
    .division{
      height: 5px;
      background:rgba(243,243,243,1);
      margin-top: 15px;
    }
    .van-tabs{
      padding:0 20px;
    }
    .projectItem{
      overflow: hidden;
      margin-top: 15px;
      >img{
        float: left;
        width: 94px;
        margin-right: 10px;
      }
      >div{
        .van-multi-ellipsis--l2{
          font-weight: 700
        }
        >h6{
          font-weight:400;
          margin-top:8px;
          >span{
            font-size: 16px;
            color: #FF4E4E;
            margin-right: 8px;
          }
          >i{
            font-style: normal;
            color: #999999;
            font-size: 12px;
            text-decoration:line-through
          }
          >img{
            float: right;
            width: 16px;
            height: 16px;
            margin-top:3px;
            margin-right:6px;
          }
        }
      }
    }
  }
</style>