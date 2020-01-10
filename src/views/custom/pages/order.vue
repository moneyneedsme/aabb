<template>
  <div class='order'>
      <pull
        ref="pull"
        :finished = 'finished'
        :loading = 'loading'
        @onRefresh = 'onRefresh'
        @onLoad = 'onLoad'
        bgColor = '#f3f3f3'
      >
        <van-tabs v-model="active" color='#76C5C5' line-width='30'>
          <van-tab title="全部">
            <div class='items'>
              <div @click='toDetails'>
                <div class='itemsHead'>
                  <img :src="require('../assets/imgs/17.png')">
                  <span>深圳龙华腾龙店（龙华店）</span>
                  <i>已取消</i>
                  <i>已完成</i>
                  <i class='wiat'>待付款</i>
                  <i class='use'>待使用</i>
                </div>
                <div class='projectItem'>
                  <img src="https://img.yzcdn.cn/vant/cat.jpeg">
                  <div>
                    <div class="van-multi-ellipsis--l2">资深刮痧师全身调理3小时</div>
                    <h6>广州吴彦祖 丨 12-10（周二）12:00</h6>
                  </div>
                </div>
                <van-divider />
                <div class='payment'>
                  <span>共消费</span>
                  <i class='noFinish'>￥40</i>
                  <button class='cancel'>取消订单</button>
                  <button class='pay'>付款</button>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="待付款">待付款</van-tab>
          <van-tab title="待使用">待使用</van-tab>
          <van-tab title="以完成">以完成</van-tab>
        </van-tabs>
      </pull>
  </div>
</template>

<script>
import pull from '../components/pull';
export default {
  name:'order',
  components:{
    pull
  },
  data(){
    return{
      active:0,
      loading: false,
      finished: false
    }
  },
  methods:{
    toDetails(){
      this.$router.push({
        path:'/orderDetails'
      })
    },
    onRefresh() {
      setTimeout(() => {
        this.$refs.pull.isLoading = false;
      }, 500);
    },
    onLoad() {
      this.loading = false;
      this.finished = true;
    }
  }
}
</script>
<style lang='scss' scoped>
  .order{
    height: 100%;
    background: #f3f3f3;
    .van-tab__text{
      font-size:14px;
      color:rgba(153,153,153,1);
    }
    .items{
      padding:0 20px;
      overflow: hidden;
      >div{
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
          >i{
            float: right;
            font-size: 12px;
            color:rgba(153,153,153,1);
            &.wiat{
              color:rgba(255,174,143,1);
            }
            &.use{
              color:rgba(118,197,197,1);
            }
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
            .van-multi-ellipsis--l2{
              font-weight: 600;
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
        .payment{
          text-align: right;
          >span{
            color:rgba(153,153,153,1);
            font-size:12px;
          }
          >i{
            font-size:24px;
            color:rgba(102,102,102,1);
            margin:0 5px;
            &.noFinish{
              color:rgba(255,113,113,1);
            }
          }
          >button{
            font-size:14px;
            outline: none;
            border-radius:4px;
            padding:3px 13px;
            border:none;
            color:white;
            &.cancel{
              background:rgba(255,113,113,0.8);
            }
            &.pay{
              background:rgba(255,154,116,0.8);
            }
          }
        }
      }
    }
  }
</style>