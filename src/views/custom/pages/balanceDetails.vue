<template>
  <div class='balanceDetails'>
    <template v-for='(v,i) in 5'>
      <van-divider v-if="i!=0" :key='v+i'/>
      <div class='items' :key='v+i' @click='flowBill'>
        <h1>
          <i>充值</i>
          <span>余额剩：220</span>
        </h1>
        <p>
          <i>2019.06.06 17:20:05</i>
          <span>
            <span class='max'>+5</span>
          </span>
        </p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name:'balanceDetails',
  data(){
    return{
    }
  },
  methods:{
    flowBill(){
      this.$router.push({
        path:'/flowBill'
      })
    }
  }
}
</script>
<style lang='scss' scoped>
  .balanceDetails{
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
      >p{
        overflow: hidden;
        margin-top:8px;
        >i{
          color:rgba(102,102,102,1);
          font-size:14px;
          font-weight:400;
        }
        >span{
          font-weight: 400;
          float: right;
          font-size:14px;
          color:rgba(118,197,197,1);
          &.max{
            color:rgba(255,113,113,1);
          }
        }
      }
    }
  }
</style>