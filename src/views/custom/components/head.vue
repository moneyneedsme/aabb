<template>
	<div class='headNav'>
		<div class='comeBack' v-if='isShowBack' @click='toBack'>
			<i class="van-icon van-icon-arrow-left van-nav-bar__arrow"></i>
			<span v-if='isShowBackCode'>返回</span>
		</div>
		<div class='title' v-if='isShowTitle'>{{title}}</div>
	</div>
</template>

<script>
export default {
	name: 'headNav',
	props:{
		title:{
			default:'标题',
			type:String
		},
		isShowTitle:{
			default:true,
			type:Boolean
		},
		isShowBackCode:{
			default:true,
			type:Boolean
		},
		isShowBack:{
			default:true,
			type:Boolean
		}
	},
	methods:{
		toBack(){
			this.$router.back()
		}
	}
}
</script>
<style lang='scss' scoped>
	.headNav{
		position: relative;
    height: 46px;
    line-height: 46px;
    text-align: center;
    background-color: #76C5C5;
    -webkit-user-select: none;
		user-select: none;
		color:white;
		.comeBack{
			position: absolute;
			bottom: 0;
			font-size: 14px;
			left: 16px;
			>i{
				vertical-align: middle;
			}
			>span{
				display: inline-block;
				margin: 0 -16px;
				padding: 0 17px;
				vertical-align: middle;
				font-size: 16px;
			}
		}
		.title{
			max-width: 60%;
			margin: 0 auto;
			font-weight: 500;
			font-size: 16px;
		}
	}
</style>