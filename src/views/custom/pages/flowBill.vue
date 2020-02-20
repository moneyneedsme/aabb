<template>
  <div class='flowBill'>
    <div class='items' :key='v'>
      <h1>
        <i>流水号：</i>
        <span>余额剩：220</span>
      </h1>
    </div>
    <van-divider/>
    <div class='items' :key='v'>
      <h1>
        <i>备注：</i>
        <span>充值</span>
      </h1>
    </div>
    <van-divider/>
    <div class='items' :key='v'>
      <h1>
        <i>交易类型：</i>
        <span>收入</span>
      </h1>
    </div>
    <van-divider/>
    <div class='items' :key='v'>
      <h1>
        <i>金额：</i>
        <span>120.00</span>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name:'flowBill',
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
  .flowBill{
    overflow: hidden;
    padding:0 20px;
    .items{
      &.items:first-of-type{
        margin-top:20px;
      }
      >h1{
        overflow: hidden;
        >i{
          font-weight:400;
          font-size:18px;
          font-weight: 400;
        }
        >span{
          color:rgba(153,153,153,1);
          font-size:12px;
          float: right;
          font-weight: 400;
          margin-top: 5px;
        }
      }
    }
  }
</style>