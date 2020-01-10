<template>
  <div class='result'>
    <img :src="require('../assets/imgs/10.png')">
    <h1>预约成功</h1>
    <div>
      <span>剩余30次</span>
      <span @click='toHome'>返回首页</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'result',
  data(){
    return{
    }
  },
  methods:{
    toHome(){
      this.$router.push({
        path:'/'
      })
    }
  }
}
</script>
<style lang='scss' scoped>
  .result{
    text-align: center;
    padding-top: 80px;
    >img{
      width: 100px;
      height: 100px;
    }
    >h1{
      font-size:18px;
      color:rgba(51,51,51,1);
      margin-top: 10px;
    }
    >div{
      margin-top: 50px;
      overflow: hidden;
      font-size: 0px;
      padding:0px 20px;
      >span{
        display: inline-block;
        vertical-align: top;
        width:50%;
        box-sizing: border-box;
        font-size:16px;
        color:rgba(153,153,153,1);
        font-weight:500;
        &:first-of-type{
          border-right: 1px solid rgba(223,223,223,1);
        }
      }
    }
  }
</style>