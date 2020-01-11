<template>
  <div class='settleOrder'>
    <div class='head'>
      <span>￥296</span>
      <h2>资深刮痧师全身调理3小时</h2>
      <p>吴彦祖 | 12-10(周二) 11:30</p>
      <van-divider />
      <div class='deduction'>
        <span>年卡抵扣</span>
        剩余30次
        <van-switch v-model="checked" size="20px" active-color="#76C5C5" inactive-color="#CBCBCB" />
        <i>-￥300</i>
      </div>
      <van-divider />
      <h1>合计：￥0</h1>
    </div>
    <div class='division'></div>
    <div class='content'>
      <div class='textInput'>
        <span>姓名</span>
        <input type="text" placeholder="请输入您的姓名">
        <van-radio-group v-model="sex" checked-color='#76C5C5'>
          <van-radio name="1" icon-size="15px">男</van-radio>
          <van-radio name="2" icon-size="15px">女</van-radio>
        </van-radio-group>
      </div>
      <van-divider />
      <div class='textInput'>
        <span>手机号码</span>
        <input type="text" placeholder="请输入您的手机号码">
      </div>
      <van-divider />
      <div class='message'>
        <span>留言备注</span>
        <van-cell-group>
          <van-field
            v-model="message"
            rows="2"
            autosize
            type="textarea"
            maxlength="50"
            placeholder="请输入留言"
            show-word-limit
          />
        </van-cell-group>
      </div>
    </div>
    <van-button type="primary" class='tabsBtn' @click='payShow=true'>去支付￥300</van-button>
    <van-action-sheet v-model="payShow" title="付款详情" :close-on-click-overlay='false'>
      <div class='payInfo'>
        <van-cell title="付款方式" is-link value="微信支付" :border='false' @click='payDetails=true' />
        <van-divider />
        <van-cell title="需付款" class='money' value="￥198.00"  :border='false'/>
        <van-button type="primary" class='payBtn' @click='balance=true'>确认支付</van-button>
      </div>
    </van-action-sheet>
    <van-action-sheet v-model="payDetails" title="付款详情" class='payClose' :close-on-click-overlay='false'>
      <van-icon name="arrow-left" @click='payDetails=false' />
      <div class='payDetails'>
        <div>
          <img :src="require('../assets/imgs/8.png')" >
          <span>微信支付</span>
        </div>
        <van-divider />
        <div>
          <img :src="require('../assets/imgs/9.png')" >
          <span>我的钱包支付（余额：1999.00）</span>
        </div>
      </div>
    </van-action-sheet>
    <van-overlay :show='balance' class='maxZIndex'>
      <div class="balance" >
        <van-icon name="cross"  @click='balance=false'/>
        <p>余额不足，是否进行充值？</p>
        <van-button type="primary" class='rechargeBtn' @click='payShow=true'>去充值</van-button>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  name:'settleOrder',
  data(){
    return{
      checked:true,
      sex:"1",
      message:'',
      payShow:false,
      payDetails:false,
      balance:false
    }
  }
}
</script>
<style lang='scss' scoped>
  .settleOrder{
    .head{
      padding:20px 20px 0px;
      overflow: hidden;
      >span{
        float: right;
        font-size:22px;
        color:rgba(255,78,78,1);
      }
      >h2{
        font-size: 20px;
        color:rgba(51,51,51,1);
        font-weight: 400
      }
      >p{
        color:#666666;
        font-size: 16px;
        margin-top: 5px;
      }
      .van-divider{
        margin:10px 0px;
      }
      .deduction{
        color:rgba(118,197,197,1);
        font-size: 16px;
        overflow: hidden;
        >span{
          color:rgba(102,102,102,1);
        }
        .van-switch{
          float: right;
        }
        >i{
          float: right;
          margin-right: 8px;
        }
      }
      >h1{
        color:rgba(102,102,102,1);
        font-size: 16px;
        text-align: right;
        font-weight: 400;
        margin-top:5px;
      }
    }
    .division{
      height: 5px;
      background:rgba(243,243,243,1);
      margin-top:15px;
    }
    .content{
      padding:20px 20px;
      .textInput{
        overflow: hidden;
        >span{
          font-weight:700;
          font-size:16px;
          color:rgba(102,102,102,1);
          margin-right: 20px;
        }
        >input{
          font-size:14px;
          font-weight:500;
          :placeholder{
            color:rgba(203,203,203,1);
          }
        }
        >div{
          float: right;
          .van-radio{
            float: left;
            margin-right:10px;
            &:last-of-type{
            margin-right: 0px;
            }
          }
        }
      }
      .message{
        >span{
          font-weight:700;
          font-size:16px;
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
      position: fixed;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%)
    }
    .payInfo{
      padding:15px 20px 40px;
      .van-cell{
        padding:0;
        .van-cell__title{
          color:rgba(51,51,51,1);
          font-size: 16px;
        }
      }
      .money{
        .van-cell__value{
          padding-right: 10px;
          color:rgba(255,113,113,1);
          font-size: 16px;
        }
      }
      .payBtn{
        width: 100%;
        height:43px;
        border-radius:16px;
        background:rgba(255,154,116,1);
        font-size: 14px;
        border:none;
        padding-bottom: 1px;
        font-size:18px;
        color:white;
        margin-top: 38px;
      }
    }
    .payDetails{
      padding:15px 20px 120px;
      >div{
        >img{
          width: 20px;
          height: 20px;
          vertical-align: middle
        }
        >span{
          font-size:16px;
          color:rgba(51,51,51,1);
          margin-left: 5px;
          vertical-align: middle
        }
      }
    }
    .payClose{
      .van-icon-close{
        display: none
      }
      .van-icon-arrow-left{
        position: absolute;
        top:14px;
        left: 20px;
        font-size: 18px;
      }
    }
    .balance{
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
        width: 50%;
        height:43px;
        border-radius:16px;
        background:rgba(255,154,116,1);
        font-size: 14px;
        border:none;
        padding-bottom: 1px;
        font-size:18px;
        color:white;
        margin-top: 38px;
      }
      .van-icon-cross{
        position: absolute;
        right: 16px;
        top:16px;
        font-size: 20px;
        color:#666666
      }
    }
  }
</style>