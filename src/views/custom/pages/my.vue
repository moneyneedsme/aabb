<template>
  <div class='my'>
    <div class='head'>
      <img src="https://img.yzcdn.cn/vant/cat.jpeg">
      <h2>广州吴彦祖</h2>
    </div>
    <div class='card' @click='toCard'>
      <template v-if='false'>
        <div>
          <h6>VIP年卡</h6>
          <p>到期时间：2020.10.10</p>
          <h2>剩余使用次数：10</h2>
          <h3>已使用次数：11</h3>
          <button>续费</button>
        </div>
      </template>
      <template v-else>
        <div>
          <h6>VIP年卡</h6>
          <p>开通年卡，享受优质服务</p>
          <h4><span>699</span>元/年</h4>
          <button>购买年卡</button>
        </div>
      </template>
    </div>
    <div class='content'> 
      <van-cell title="预约订单" is-link value="查看全部" :border='false' @click='toOrder'/>
      <van-row type="flex" justify="space-between">
        <van-col span="7"  @click='toOrder'>
          <img :src="require('../assets/imgs/13.png')">
          <p>待使用</p>
        </van-col>
        <van-col span="7"  @click='toOrder'>
          <img :src="require('../assets/imgs/14.png')">
          <p>进行中</p>
        </van-col>
        <van-col span="7"  @click='toOrder'>
          <img :src="require('../assets/imgs/14.png')">
          <p>已完成</p>
        </van-col>
      </van-row>
      <van-divider />
      <div class='wallet' @click='toWallet'>
        <img :src="require('../assets/imgs/16.png')">
        <span>我的钱包支付（余额：1999.00）</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'my',
  data(){
    return{
    }
  },
  methods:{
    toWallet(){
      this.$router.push({
        path:'/wallet'
      })
    },
    toOrder(){
      this.$router.push({
        path:'/order'
      })
    },
    toCard(){
      this.$router.push({
        path:'/yearCard'
      })
    }
  }
}
</script>
<style lang='scss' scoped>
  .my{
    overflow: hidden;
    .head{
      height: 130px;
      padding-left: 17px;
      padding-top: 5px;
      background:url('../assets/imgs/11.png') no-repeat;
      background-size: 100% 100%;
      overflow: hidden;
      >img{
        float: left;
        width: 50px;
        height: 50px;
        border-radius: 50%
      }
      >h2{
        font-size:20px;
        color:rgba(255,255,255,1);
        font-weight: 500;
        padding-left: 60px;
        margin-top:11px;
      }
    }
    .card{
      margin-top: -50px;
      padding:0px 10px;
      >div{
        min-height: 170px;
        background: url('../assets/imgs/12.png') no-repeat;
        background-size: 100% 100%;
        padding:20px 20px 0;
        color:rgba(236,177,109,1);
        position: relative;
        >h6{
          font-size:30px;
          font-weight: 500;
        }
        >p{
          font-size:12px;
        }
        >h2{
          font-size: 16px;
          margin-top: 15px;
          font-weight: 500;
        }
        >h3{
          font-size: 14px;
          margin-top: 2px;
          font-weight: 500;
        }
        >h4{
          font-size: 14px;
          margin-top: 25px;
          font-weight: 500;
          >span{
            font-size: 24px;
          }
        }
        >button{
          width:81px;
          height:31px;
          outline: none;
          border:none;
          padding:0;
          border-radius:20px 0px 0px 20px;
          box-shadow:0px 1px 3px rgba(0,0,0,0.15);
          background:rgba(255,154,116,1);
          color:white;
          font-size:14px;
          position: absolute;
          top:28px;
          right:8px;
        }
      }
    }
    .content{
      padding:0 20px;
      .van-cell--clickable{
        padding:10px 0;
      }
      .van-cell__title{
        color:rgba(51,51,51,1);
        font-size: 16px;
      }
      .van-cell__value,.van-icon-arrow{
        font-size: 12px;
      }
      .van-row--flex{
        margin-top: 10px;
        .van-col--7{
          min-height: 98px;
          text-align: center;
          background:rgba(118,197,197,0.1);
          border-radius:4px;
          >img{
            width: 28px;
            height: 28px;
            vertical-align: top;
            margin-top: 22px;
          }
          >p{
            color:rgba(102,102,102,1);
            font-size:14px;
            margin-top:5px;
          }
        }
      }
      .wallet{
        overflow: hidden;
        >img{
          width:20px;
          height: 20px;
          vertical-align: middle
        }
        >span{
          font-size:16px;
          color:rgba(51,51,51,1);
          margin-left: 10px;
          vertical-align: middle
        }
      }
    }
  }
</style>