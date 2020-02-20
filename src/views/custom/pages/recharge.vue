<template>
  <div class='recharge'>
    <div class='box'>
      <div :class='{active:true}'>
        <h2>￥200</h2>
        <p>立刻送￥50</p>
      </div>
      <div>
        <h2>￥200</h2>
        <p>立刻送￥50</p>
      </div>
      <div>
        <h2>￥200</h2>
        <p>立刻送￥50</p>
      </div>
      <div>
        <h2>￥200</h2>
        <p>立刻送￥50</p>
      </div>
    </div>
    <div class='rechargeBox'>
      <p>点击立即充值，即代表已经同意《服务协议》</p>
      <van-button type="primary" class='rechargeBtn' @click='toRecharge'>充值</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name:'recharge',
  data(){
    return{
    }
  },
  methods:{
    // toDetails(){
    //   this.$router.push({
    //     path:'/shopDetails'
    //   })
    // }
  }
}
</script>
<style lang='scss' scoped>
  .recharge{
    overflow: hidden;
    .box{
      overflow: hidden;
      padding:0 20px;
      >div{
        width: 48%;
        display: inline-block;
        vertical-align: top;
        margin-right:4%;
        border:1px solid rgba(118,197,197,1); 
        border-radius:8px;
        text-align: center;
        padding:25px 0;
        color:rgba(118,197,197,1);
        margin-top: 20px;
        &:nth-of-type(2n){
          margin-right:0%;
        }
        &.active{
          background:rgba(226,242,242,1);
        }
        >h2{
          font-size:22px;
          font-weight:400;
        }
        >p{
          font-size:14px;
          font-weight:400;
          margin-top:1px;
        }
      }
    }
    .rechargeBox{
      position: fixed;
      bottom: 20px;
      left: 0;
      padding:0 20px;
      width: 100%;
      >p{
        font-size:14px;
        font-weight:500;
        color:rgba(153,153,153,1);
        margin-bottom:10px;
        text-align: center;
      }
      .rechargeBtn{
        width:100%;
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
  }
</style>