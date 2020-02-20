<template>
  <div class='yearCard'>
    <div class='head'>
      <h6 @click='toUse'>
        <img :src="require('../assets/imgs/19.png')">
        <span>使用明细</span>
      </h6>
      <div class='card'>
        <template v-if='true'>
          <div>
            <h6>VIP年卡</h6>
            <p>到期时间：2020.10.10</p>
            <h2>剩余使用次数：10</h2>
            <h3>已使用次数：11</h3>
            <button @click='buyShow=true'>续费</button>
          </div>
        </template>
        <template v-else>
          <div>
            <h6>VIP年卡</h6>
            <p>开通年卡，享受优质服务</p>
            <h4><span>699</span>元/年</h4>
            <button @click='buyShow=true'>购买年卡</button>
          </div>
        </template>
      </div>
    </div>
    <div class='dividerCustom'>权益说明</div>
    <van-popup
      v-model="buyShow"
      position="bottom"
      round
      :style="{padding:'0px 0px 40px' }"
    >
      <div class='pickBuy'>
        <div class='buyName'>
          <img src="https://img.yzcdn.cn/vant/cat.jpeg">
          <div>
            <h1>VIP年卡</h1>
            <p>￥50.00</p>
          </div>
        </div>
        <p>使用次数</p>
        <div class='countList'>
          <div v-for='(v,i) in countList' :key='i' :class='{"active":pinkbuy==i}' @click='pinkbuy=i'>{{v}}</div>
        </div>
        <div class='btnBox'>
          <van-button type="primary" class='tabsBtn noClick' >有效期：180天</van-button>
          <van-button type="primary" class='tabsBtn' >购买</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name:'yearCard',
  data(){
    return{
      buyShow:false,
      pinkbuy:0,
      countList:['10次','20次','30次','40次','50次']
    }
  },
  methods:{
    toUse(){
      this.$router.push({
        path:'/useDetails'
      })
    }
  }
}
</script>
<style lang='scss' scoped>
  .yearCard{
    min-height: 100%;
    background:#F2F3F3;
    .head{
      height:237px;
      background: url('../assets/imgs/18.png') no-repeat center -20px;;
      background-size: 100% 100%;
      overflow: hidden;
      >h6{
        margin-top: 10px;
        margin-right: 20px;
        float: right;
        overflow: hidden;
        >img{
          width: 17px;
          height: 17px;
          vertical-align: middle
        }
        >span{
          font-weight:500;
          font-size:16px;
          color:rgba(255,255,255,1);
          margin-left: 3px;
          vertical-align: middle
        }
      }
      .card{
        padding:0px 10px;
        margin-top: 36px;
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
            margin-top: 3px;
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
    }
    .dividerCustom{
      color:#333333;
      font-size: 18px;
      font-weight:500;
      text-align: center;
      &::before,&::after{
        display: inline-block;
        vertical-align: middle;
        width:56px;
        height:1px;
        content: '';
        background: rgba(102,102,102,1);
        margin:0 10px;
      }
    }
    .van-popup{
      overflow-y: inherit;
    }
    .pickBuy{
      .buyName{
        padding:0 20px;
        overflow: hidden;
        margin-top: -20px;
        >img{
          width: 135px;
          height: 95px;
          float: left;
          margin-right: 10px;
          border-radius:6px;
        }
        >div{
          margin-top: 30px;
          >h1{
            font-size:22px;
            font-weight:500;
            color:rgba(51,51,51,1);
          }
          >p{
            color:rgba(255,78,78,1);
            font-size:18px;
            margin-top: 5px;
          }
        }
      }
      >p{
        font-size: 18px;
        color:rgba(153,153,153,1);
        font-weight: 500;
        margin-top:20px;
        padding-left:20px;
      }
      .countList{
        overflow: hidden;
        font-size: 0px;
        padding:0 20px;
        >div{
          display: inline-block;
          vertical-align: top;
          width: 20%;
          margin-right:4.5%;
          height:25px;
          line-height:25px;
          border:1px solid rgba(153,153,153,1);
          border-radius:4px;
          box-sizing: border-box;
          font-size:14px;
          color:rgba(153,153,153,1);
          text-align: center;
          margin-top: 10px;
        }
        >div:nth-of-type(4n){
          margin-right: 0%;
        }
        >div.active{
          border:1px solid rgba(118,197,197,1);
          background: url('../assets/imgs/7.png') #C7E7E7 no-repeat bottom right;
        }
      }
      .btnBox{
        overflow: hidden;
        font-size: 0px;
        padding:0 20px;
        margin-top: 40px;
        .tabsBtn{
          width: 48%;
          height:43px;
          border-radius:8px;
          background:rgba(255,113,113,1);
          border:none;
          padding-bottom: 1px;
          font-size:18px;
          color:white;
        }
        .noClick{
          margin-right: 4%;
          background:rgba(243,243,243,1);
          color:rgba(153,153,153,1);
        }
      }
      
    }
  }
</style>