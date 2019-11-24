<template>
	<view class="content">
		<view class="head">
			<view  class="head-img">
				<open-data type="userAvatarUrl">
				</open-data>
			</view>
			<open-data type="userNickName" class="head-name"></open-data>
		</view>
		<view class="item">
			<view class="select-item">
				<span>我的订单</span>
				<img class="select-item-img" src="/static/myReserve.png">
			</view>
			<view class="select-item">
				<span>关于</span>
				<img class="select-item-img" src="/static/about.png">
			</view>
			<view class="select-item">
				<span>分享</span>
				<img class="select-item-img" src="/static/right.png">
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg: '123123'
			}
		},
		methods: {
			onGotUserInfo(msg) {
				console.log(msg)
			}
		}
	}
</script>
<style >
.content{
	font-weight: bold;
	font-size: 48rpx;
	color: #505050;
}
.head{
	text-align: center;
}
.head-img{
	overflow: hidden;
	margin: 32rpx auto;
	width: 240rpx;
	height: 240rpx;
	border-radius: 50%;
	border: 4rpx solid white;
}
.item{
	font-size: 40rpx;
	margin: 48rpx;
}
.select-item{
	height: 160rpx;
	line-height: 160rpx;
	text-align: left;
	vertical-align: middle;
	border-bottom: 4rpx dashed #505050;
}
.select-item-img{
	float: right;
	margin-top: 56rpx;
	width: 48rpx;
	height: 48rpx;
}
</style>
