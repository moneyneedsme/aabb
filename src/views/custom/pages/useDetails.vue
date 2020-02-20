<template>
  <div class='useDetails'>
    <template v-for='(v,i) in 5'>
      <van-divider v-if="i!=0"  :key='v+i'/>
      <div class='items' :key='v+i'>
        <h1>
          <i>资深刮痧师全身调理3小时</i>
          <span>次数-1</span>
        </h1>
        <p>
          <i>07:00-20:00</i>
          <span>
            <span>剩余次数：</span>
            <i class='max'>5</i>
          </span>
        </p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name:'useDetails',
  data(){
    return{
    }
  },
  methods:{
  }
}
</script>
<style lang='scss' scoped>
  .useDetails{
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
        margin-top: 5px;
        >i{
          color:rgba(102,102,102,1);
          font-size:14px;
          font-weight:400;
        }
        >span{
          font-weight: 400;
          float: right;
          font-size:14px;
          >span{
            color:rgba(102,102,102,1);
          }
          >i{
            color:rgba(118,197,197,1);
            &.max{
              color:rgba(255,113,113,1);
            }
          }
        }
      }
    }
  }
</style>