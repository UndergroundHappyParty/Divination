<template>
  <view class="context">
    <!-- <img class="img"> -->
    <view >
      <img class="img" :src="imgData.url">
    </view>
    <p class="name">{{imgData.nameEn}}</p>
    <p class="name">{{imgData.nameZn}}</p>
    <view class="cost" @click="handleCost">
      <img src="/static/buy.png" class="cost-img">
      <span>￥ {{imgData.cost}}</span>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    imgData: {
      type: Object,
      default: ''
    }
  },
  methods: {
    handleCost() {
      this.$emit('handleClick',this.imgData)
    }
  }
}
</script>
<style>
.context{
  margin-top: 64rpx;
  text-align: center;
	font-size: 32rpx;
  font-weight: bold;
	color: #505050;
}
.img{
  display: inline-block;
  /* width:  80vw;
  height: 107vw; */
  width:  600rpx;
  height: 800rpx;
  background-color: #505050;
  border: 4rpx solid #fff;
	box-shadow: 0 0 16px rgba(0, 0, 0, 0.75);
  margin-bottom: 16rpx;
}
.name{
  margin-top: 16rpx;
}
.cost{
  margin: 32rpx auto;
  width: 300rpx;
  height: 100rpx;
  line-height: 100rpx;
  border: 4rpx dashed #fff;
  border-radius: 40rpx;
  text-align: center;
  vertical-align: middle;
	font-size: 48rpx;
  color: #d43030;

}
.cost-img{
  width: 64rpx;
  height: 64rpx;
  float: left;
  margin: 16rpx 0 0 24rpx;
}
</style>