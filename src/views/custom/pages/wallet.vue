<template>
  <div class='wallet'>
    <div class='money'>
      <p>我的余额（元)</p>
      <div @click='tobalance'>
        <span>￥888.00</span>
        <i>余额明细<van-icon name="arrow" /></i>
      </div>
    </div>
    <van-button type="primary" class='rechargeBtn' @click='toRecharge'>充值</van-button>
  </div>
</template>

<script>
export default {
  name:'wallet',
  data(){
    return{
    
    }
  },
  methods:{
    toRecharge(){
      this.$router.push({
        path:'/recharge'
      })
    },
    tobalance(){
      this.$router.push({
        path:'/balanceDetails'
      })
    }
  }
}
</script>
<style lang='scss' scoped>
  .wallet{
    overflow: hidden;
    .money{
      margin:20px;
      padding:30px 35px;
      background:#85DADA;
      box-shadow:0px 4px 8px rgba(0,0,0,0.07);
      border-radius: 8px;
      >p{
        font-size:12px;
        font-weight:400;
        color:rgba(255,255,255,1);
      }
      >div{
        overflow: hidden;
        color:rgba(255,255,255,1);
        margin-top: 15px;
        >span{
          font-size:34px;
        }
        >i{
          float: right;
          margin-top:18px;
          .van-icon-arrow{
            vertical-align: -2px;
          }
        }
      }
    }
    .rechargeBtn{
      position: fixed;
      bottom: 20px;
      width: 90%;
      left: 50%;
      transform: translateX(-50%);
      border-radius:16px;
      background:rgba(255,154,116,1);
      font-size: 14px;
      border:none;
      padding-bottom: 1px;
      font-size:18px;
      color:white;
      display: block
    }
  }
</style>