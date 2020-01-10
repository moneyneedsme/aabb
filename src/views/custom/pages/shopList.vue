<template>
  <div class='shopList'>
    <div class='head'>
      <div class='address' @click='addressShow=true'>
        <span>深圳市</span>
        <van-icon name="arrow-down" />
      </div>
      <van-search placeholder="查找门店" v-model="search" />
    </div>
    <van-divider />
    <div class='items'>
      <img src="https://img.yzcdn.cn/vant/cat.jpeg" >
      <div>
        <p>
          <strong>深圳龙华腾龙店（龙华店）</strong>
          <van-icon name="arrow" @click='toDetails'/>
          <span @click='toDetails'>详情</span>
        </p>
        <van-divider />
        <div class='SIContent'>
          <img :src="require('../assets/imgs/3.png')">
          <div class="van-multi-ellipsis--l2">07:00-20:00</div>
          <span>距您2.1km</span>
        </div>
        <div class='SIContent'>
          <img :src="require('../assets/imgs/1.png')">
          <div class="van-multi-ellipsis--l2">龙华区民治街道布龙路特发和平里左侧100米左侧100米</div>
        </div>
      </div>
    </div>
    <van-popup
      v-model="addressShow"
      position="top"
      :overlay-style='{top:"112px"}'
      round
      :style="{top:'112px',padding:'10px 20px 20px' }"
    >
      <div class='popupHead'>
        <span>深圳市</span>
        <i>重新定位</i>
        <img :src="require('../assets/imgs/5.png')">
      </div>
      <div class='popupItems'>
        <div>深圳市</div>
        <div>深圳市</div>
        <div>深圳市</div>
        <div>深圳市</div>
        <div>深圳市</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name:'shopList',
  data(){
    return{
      search:null,
      addressShow:false
    }
  },
  methods:{
    toDetails(){
      this.$router.push({
        path:'/shopDetails'
      })
    }
  }
}
</script>
<style lang='scss' scoped>
  .shopList{
    .head{
      padding:12px 20px 0px;
      .address{
        float: left;
        margin-top:2px;
        >span{
          color:#999999;
          font-size: 14px;
        }
        .van-icon-arrow-down{
          vertical-align: -2px;
          margin-left:2px;
          color:#999999
        }
      }
      .van-search{
        padding:0 0 0 15px;
        .van-cell{
          line-height:inherit
        }
      }
      .van-overlay,.van-popup{
        top: 50px;
      }
    }
    .items{
      padding:15px 13px 20px;
      overflow: hidden;
      >img{
        vertical-align: top;
        width: 57px;
        height: 57px;
        float: left;
      }
      >div{
        padding-left: 67px;
        >p{
          overflow: hidden;
          >strong{
            font-size: 14px;
            color:#333;
            padding-right: 50px;
          }
          >span{
            float: right;
            color:#999999
          }
          .van-icon-arrow{
            float: right;
            margin-top:3px;
            margin-left: 3px;
            color:#999999
          }
        }
        .van-divider{
          margin:10px 0;
        }
        .SIContent{
          position: relative;
          margin-top:8px;
          >img:first-child{
            width: 18px;
            height: 18px;
            vertical-align: top;
            position: absolute;
            top:0px;
            left: 0;
          }
          .van-multi-ellipsis--l2{
            display: inline-block;
            vertical-align: middle;
            color: #666666;
            font-size: 14px;
            padding-left: 25px;
            padding-right:30px;
          }
          span{
            position: absolute;
            top:0;
            right: 0;
            color:#999999
          }
        }
      }
    }
    .popupHead{
      overflow: hidden;
      padding-bottom: 10px;
      >span{
        color:#76C5C5;
        font-size: 14px;
      }
      >i{
        font-size: 14px;
        color:#999999;
        float: right;
      }
      >img{
        width: 14px;
        height: 14px;
        float: right;
        margin-top: 1px;
        margin-right: 5px;
      }
    }
    .popupItems{
      overflow: hidden;
      font-size: 0px;
      >div{
        display: inline-block;
        vertical-align: top;
        width:22%;
        background:rgba(243,243,243,1);
        border-radius:6px;
        height:25px;
        line-height:25px;
        text-align: center;
        font-size:12px;
        color:#999999;
        margin-right:4%;
        margin-top: 10px;
      }
      >div:nth-of-type(4n){
        margin-right:0%;
      }
    }
  }
</style>