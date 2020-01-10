<template>
  <div class='order'>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        :style='{background:bgColor}'
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <slot></slot>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name:'order',
  props:{
    bgColor:{},
    finished:{ //没有更多，加载完成
      default:true,
      required:true,
      type:Boolean,
    },
    loading:{ //上拉加载loading，
      default:false,
      required:true,
      type:Boolean,
    },
  },
  data(){
    return{
      isLoading:false
    }
  },
  methods:{
    onRefresh() {
      this.$emit('onRefresh')
    },
    onLoad() {
      this.$emit('onLoad')
    }
  }
}
</script>
<style lang='scss' scoped>
</style>