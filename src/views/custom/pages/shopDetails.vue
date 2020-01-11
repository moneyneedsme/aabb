<template>
  <div class='shopDetails'>
    <van-swipe :autoplay="3000" indicator-color="white" class='swipe'>
      <van-swipe-item>
        <img src="https://img.yzcdn.cn/vant/cat.jpeg" >
      </van-swipe-item>
    </van-swipe>
    <div class='projectName'>
      <h3>资深刮痧师全身调理3小时</h3>
      <p>
        <span>￥296</span>
        <i>￥296</i>
      </p>
    </div>
    <div class='division'></div>
    <div class='subscribe'>
      <h5>
        <img :src="require('../assets/imgs/6.png')">
        <span>在线预约</span>
      </h5>
    </div>
    <van-tabs style='margin-top:15px'  v-model="activeName" swipeable animated  color='#76C5C5' line-width='21' swipe-threshold='7'>
      <van-tab name="one">
        <div slot="title" class='tabTitle'>
          <p>今天</p>
          <p>12-07</p>
        </div>
        <div class='tabsContent'>
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
          <div>
            <div class="van-multi-ellipsis">广州-吴彦祖</div>
            <h6>擅长推拿、针灸、火罐手法等</h6>
            <van-button type="primary" size='mini' class='tabsBtn' @click='timeShow=true'>预约</van-button>
          </div>
          <van-divider />
        </div>
      </van-tab>
      <van-tab title="服务项目" name="one">
        <div slot="title" class='tabTitle'>
          <p>今天</p>
          <p>12-07</p>
        </div>
        内容 1
      </van-tab>
      <van-tab title="服务项目" name="one">
        <div slot="title" class='tabTitle'>
          <p>今天</p>
          <p>12-07</p>
        </div>
        内容 1
      </van-tab>
      <van-tab title="服务项目" name="one">
        <div slot="title" class='tabTitle'>
          <p>今天</p>
          <p>12-07</p>
        </div>
        内容 1
      </van-tab>
      <van-tab title="服务项目" name="one">
        <div slot="title" class='tabTitle'>
          <p>今天</p>
          <p>12-07</p>
        </div>
        内容 1
      </van-tab>
      <van-tab title="服务项目" name="one">
        <div slot="title" class='tabTitle'>
          <p>今天</p>
          <p>12-07</p>
        </div>
        内容 1
      </van-tab>
      <van-tab title="服务项目" name="one">
        <div slot="title" class='tabTitle'>
          <p>今天</p>
          <p>12-07</p>
        </div>
        内容 1
      </van-tab>
    </van-tabs>
    <van-popup
      v-model="timeShow"
      position="bottom"
      round
      closeable
      :style="{padding:'0px 0px 40px' }"
    >
      <div class='pickTime'>
        <h4>您选择了到点时间</h4>
        <p>周日 12-08</p>
        <van-tabs style='margin-top:15px'  v-model="activeTime" swipeable animated  color='#76C5C5' line-width='50%' swipe-threshold='2'>
          <van-tab title="上午" name="morning">
            <div class='tabsContent'>
              <div v-for='(v,i) in timeList.morning' :key='i' :class='{"active":pinkTime==i}' @click='pinkTime=i'>{{v}}</div>
            </div>
          </van-tab>
          <van-tab title="下午" name="afternoon">
            <div class='tabsContent'>
              <div v-for='(v,i) in timeList.afternoon' :key='i' :class='{"active":pinkTime==i}' @click='pinkTime=i'>{{v}}</div>
            </div>
          </van-tab>
        </van-tabs>
        <van-button type="primary" class='tabsBtn' @click='toOrder'>预约</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name:'shopDetails',
  data(){
    return{
      activeName:'one',
      timeShow:false,
      activeTime:'morning',
      pinkTime:0,
      timeList:{
        morning:['09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00'],
        afternoon:['13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30']
      }
    }
  },
  methods:{
    toOrder(){
      this.$router.push({
        path:'/settleOrder'
      })
    }
  }
}
</script>
<style lang='scss' scoped>
  .shopDetails{
    overflow: hidden;
    .swipe{
      height:152px;
      z-index: -1;
    }
    .projectName{
      padding:15px 20px;
      >h3{
        color:#333;
        font-size:20px;
      }
      >p{
        margin-top: 7px;
        >span{
          font-size:16px;
          color:rgba(255,78,78,1);
          margin-right: 5px;
        }
        >i{
          color:rgba(153,153,153,1);
          font-size: 12px;
          text-decoration: line-through
        }
      }
    }
    .division{
      height: 5px;
      background:rgba(243,243,243,1);
    }
    .subscribe{
      overflow: hidden;
      >h5{
        margin-top: 15px;
        padding-left: 20px;
        >img{
          vertical-align:middle;
          width: 16px;
        }
        >span{
          color:#333333;
          font-size: 16px;
          margin-left: 2px;
          font-weight: 400;
          vertical-align:middle;
        }
      }
    }
    .tabTitle{
      overflow: hidden;
      margin-top: 5px;
      >p{
        line-height: 1.3;
        color:#76C5C5;
        font-size: 12px;
      }
      >p:first-of-type{
        font-size: 14px;
      }
    }
    .tabsContent{
      padding:15px 20px 0;
      >img{
        float: left;
        width: 50px;
        height: 50px;
        margin-right: 10px;
        border-radius: 50%
      }
      >div{
        position: relative;
        .van-multi-ellipsis{
          font-size: 16px;
          color:#666666
        }
        >h6{
          font-weight:400;
          color:#666666;
          font-size: 14px;
          margin-top:2px;
        }
        .tabsBtn{
          position: absolute;
          top: 50%;
          right:0;
          transform: translateY(-50%);
          width:53px;
          height:25px;
          border-radius:4px;
          background:rgba(118,197,197,1);
          font-size: 14px;
          border:none;
          padding-bottom: 1px;
        }
      }
    }
    .pickTime{
      overflow: hidden;
      padding-top:40px;
      >h4{
        font-size: 20px;
        color:#333333;
        font-weight: 400;
        text-align: center
      }
      >p{
        font-size: 20px;
        color:#76C5C5;
        font-weight: 400;
        text-align: center;
        margin-top: 5px;
      }
      .tabsContent{
        padding:10px 20px 40px;
        overflow: hidden;
        font-size: 0px;
        >div{
          display: inline-block;
          vertical-align: top;
          width: 18%;
          margin-right: 2.5%;
          height:25px;
          line-height:25px;
          border:1px solid rgba(153,153,153,1);
          border-radius:4px;
          box-sizing: border-box;
          font-size:14px;
          color:rgba(153,153,153,1);
          text-align: center;
          margin-top: 15px;
        }
        >div:nth-of-type(5n){
          margin-right: 0%;
        }
        >div.active{
          border:1px solid rgba(118,197,197,1);
          background: url('../assets/imgs/7.png') #C7E7E7 no-repeat bottom right;
        }
      }
      .tabsBtn{
        width: 90%;
        height:43px;
        border-radius:16px;
        background:rgba(255,154,116,1);
        font-size: 14px;
        border:none;
        padding-bottom: 1px;
        font-size:18px;
        color:white;
        margin:0 auto;
        display: block
      }
    }
  }
</style>