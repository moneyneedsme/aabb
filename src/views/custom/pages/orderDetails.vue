<template>
  <div class='orderDetails'>
    <div class='head'>
      <h2>等待支付中</h2>
      <p>核销码：123456</p>
    </div>
    <div class='content'>
      <div class="card">
        <div class='itemsHead'>
          <img :src="require('../assets/imgs/17.png')">
          <span>深圳龙华腾龙店（龙华店）</span>
          <van-icon name="arrow" />
        </div>
        <div class='projectItem'>
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
          <div>
            <div class="van-ellipsis">资深刮痧师全身调理3小时资深刮痧师全身调理3小时</div>
            <h6>广州吴彦祖 丨 12-10（周二）12:00</h6>
            <span>￥40</span>
          </div>
        </div>
        <van-divider />
        <div class='coupon'>
          <span>年卡抵扣</span>
          <i>-￥40</i>
        </div>
        <van-divider />
        <div class='payment'>
          <span>实付：</span>
          <i>￥0.00</i>
        </div>
        <van-divider dashed />
        <div class='coupon'>
          <span>退款金额</span>
          <i class='refund'>￥40.00</i>
        </div>
      </div>
      <div class='info'>
        <div class='textInput'>
          <span>姓名</span>
          <i>广州吴彦祖</i>
        </div>
        <van-divider />
        <div class='textInput'>
          <span>手机号码</span>
          <i>13412341234</i>
        </div>
        <van-divider />
        <div class='message'>
          <span>留言备注</span>
          <van-cell-group>
            <van-field
              v-model="message"
              rows="3"
              autosize
              type="textarea"
              placeholder="请输入留言"
              show-word-limit
            />
          </van-cell-group>
        </div>
      </div>
      <div class='solve'>
        <h2>解决方案</h2>
      </div>
      <div class='orderInfo'>
        <h2>订单详情</h2>
        <van-divider />
        <div class='textInput'>
          <span>订单编号</span>
          <i>32132132984231</i>
        </div>
        <van-divider />
        <div class='textInput'>
          <span>下单时间</span>
          <i>2019-10-10 18:00:00</i>
        </div>
        <van-divider />
        <div class='textInput'>
          <span>支付方式</span>
          <i>钱包支付</i>
        </div>
      </div>
    </div>
    <div class='cancel'>
      <button class='pay'>立即支付</button>
      <button class='cancelBtn' @click='cancelOrder=true'>取消订单</button>
    </div>
    <van-overlay :show='cancelOrder' class='maxZIndex' >
      <div class="cancelOrder" >
        <p>是否取消订单？</p>
        <van-button type="primary" class='rechargeBtn rechargeCancel' @click='cancelOrder=false'>取消</van-button>
        <van-button type="primary" class='rechargeBtn rechargeSure' @click='cancelOrder=false'>确定</van-button>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  name:'orderDetails',
  data(){
    return{
      message:'',
      cancelOrder:false
    }
  },
  methods:{
  }
}
</script>
<style lang='scss' scoped>
  .orderDetails{
    background:rgba(243,243,243,1);
    padding-bottom: 60px;
    .head{
      height:257px;
      background: url('../assets/imgs/18.png') no-repeat;
      background-size: 100% 100%;
      padding:20px 20px 0;
      >h2{
        color:rgba(255,255,255,1);
        font-size: 24px;
        font-weight: 500
      }
      >p{
        color:rgba(255,255,255,1);
        font-size:12px;
        margin-top:5px;
      }
    }
    .content{
      padding:0 20px;
      overflow: hidden;
      margin-top: -185px;
      .card{
        background: white;
        border-radius:8px;
        padding:15px;
        margin-top: 20px;
        .itemsHead{
          overflow: hidden;
          >img{
            width: 14px;
            height: 14px;
            vertical-align: middle;
          }
          >span{
            color:rgba(102,102,102,1);
            font-size:12px;
            margin-left: 3px;
          }
          >i.van-icon-arrow{
            float: right;
            font-size: 12px;
            color:rgba(153,153,153,1);
            font-weight: 600;
            margin-top:1px;
          }
        }
        .projectItem{
          overflow: hidden;
          margin-top: 10px;
          >img{
            float: left;
            width: 50px;
            height: 50px;
            margin-right: 10px;
          }
          >div{
            position: relative;
            >span{
              position: absolute;
              top:-1px;
              right:0px;
              font-size:18px;
              color:rgba(51,51,51,1);
            }
            .van-ellipsis{
              padding-right: 50px;
              font-weight:400;
              margin-top:2px;
              color:rgba(51,51,51,1);
              font-size: 16px;
            }
            >h6{
              font-weight:400;
              margin-top:7px;
              font-size:12px;
              color:rgba(102,102,102,1);
            }
          }
        }
        .coupon{
          overflow: hidden;
          >span{
            font-size:14px;
            color:rgba(102,102,102,1);
            font-weight:500;
          }
          >i{
            font-size:12px;
            color:rgba(255,113,113,1);
            float: right;
            margin-top: 2px;
            &.refund{
              color:rgba(255,154,116,1);
            }
          }
        }
        .payment{
          text-align: right;
          >span{
            color:rgba(102,102,102,1);
            font-size:12px;
          }
          >i{
            font-size:16px;
            color:rgba(118,197,197,1);
          }
        }
      }
      .info{
        padding:15px;
        background: white;
        border-radius:8px;
        margin-top: 13px;
        .message{
          >span{
            font-weight:500;
            font-size:14px;
            color:rgba(102,102,102,1);
            margin-right: 20px;
          }
          .van-cell{
            border:1px solid rgba(223,223,223,1);
            border-radius:4px;
            padding:10px;
            margin-top:10px
          }
        }
      }
      .textInput{
        overflow: hidden;
        >span{
          font-weight:500;
          font-size:14px;
          color:rgba(102,102,102,1);
          margin-right: 20px;
        }
        >i{
          float: right;
          font-size:12px;
          font-weight:500;
          color:rgba(153,153,153,1);
          margin-top: 1px;
        }
      }
      .orderInfo,.solve{
        padding:15px;
        background: white;
        border-radius:8px;
        margin-top: 13px;
        overflow: hidden;
        >h2{
          color:rgba(51,51,51,1);
          font-size:16px;
          font-weight:500;
        }
      }
    }
    .cancel{
      position: fixed;
      bottom: 0px;
      left: 0px;
      width: 100%;
      text-align: right;
      padding:8px 16px;
      background: white;
      >button{
        border-radius:8px;
        padding:5px 14px;
        font-size:18px;
        color:rgba(255,255,255,1);
        &.pay{
          background:rgba(255,154,116,1);
        }
        &.cancelBtn{
          background:rgba(255,113,113,1);
        }
      }
    }
    .cancelOrder{
      position: absolute;
      top:50%;
      left: 50%;
      transform: translate(-50%,-50%);
      background: white;
      width: 85%;
      padding:50px 0px 40px;
      border-radius:16px;
      text-align: center;
      >p{
        font-size:20px;
        color:rgba(51,51,51,1);
      }
      .rechargeBtn{
        width:113px;
        height:43px;
        border-radius:8px;
        font-size: 14px;
        border:none;
        padding-bottom: 1px;
        font-size:18px;
        color:white;
        margin-top: 38px;
      }
      .rechargeCancel{
        margin-right: 10px;
        background:rgba(243,243,243,1);
      }
      .rechargeSure{
        background:rgba(255,113,113,1);
      }
    }
  }
</style>