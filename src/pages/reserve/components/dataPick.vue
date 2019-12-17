<template>
  <view class="main">
    <view></view>
    <view class="header">
      <span>{{currentYear}}年</span>
      <span>{{currentMonth}}月</span>
    </view>
    <view class="cancle" @click="handleCancle">
      <img src="/static/close.png" class="cancle-img">
    </view>
    <view>
      <view class="week" v-for="(value,key) in week" :key="key">{{value}}</view>
        <swiper class="swiper" :current="current" @change="swiperChange">
          <swiper-item v-for="(item, key0) in dateList" :key='key0'>
              <view v-for="(value, key1) in item" :key="key1" class="one-day">
                <OneDay :content='value'></OneDay>
              </view>
          </swiper-item>
        </swiper>
    </view>
  </view>
</template>
<script>
import creatDateList from '../../../plugins/getDate'
import OneDay from './datePickOfOne'
export default {
  data() {
    return {
      week: ['日','一','二','三','四','五','六'],
      dateList:[],
      current: 0,
      totalCurrent: 1,
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth() + 1
    }
  },
  components: {
    OneDay
  },
  mounted() {
    this.initDate()
  },
  methods: {
    handleCancle() {
      this.$emit('cancle')
    },
    initDate () {
      this.dateList.push(creatDateList(this.currentYear, this.currentMonth))
      this.addDate()
    },
    addDate () {
      let next = this.getNextYearOrMonth(this.currentYear, this.currentMonth)
      this.dateList.push(creatDateList(next.Year, next.Month))
      this.totalCurrent++
    },
    getNextYearOrMonth(year, month) {
      let next = new Date(year, month + 1)
      let Year = next.getUTCFullYear(),
          Month = next.getUTCMonth() + 1
      return {
        Year,
        Month
      }
    },
    swiperChange(e) {
      if (this.current < e.detail.current) {
        this.current = e.detail.current
        let next = this.getNextYearOrMonth(this.currentYear, this.currentMonth)
        this.currentYear = next.Year
        this.currentMonth = next.Month
        // 滑块为最后一个时，再新增
        if (this.totalCurrent - 1 == this.current) {
          this.addDate()
        }
      } else {
        this.current = e.detail.current
        let last = this.getNextYearOrMonth(this.currentYear, this.currentMonth - 2)
        this.currentYear = last.Year
        this.currentMonth = last.Month
        console.log(last)
      }
    }
  },
}
</script>
<style>
  .main{
   position: relative;
   width: 588rpx;
   height: 672rpx;
   background-color: var(--base-color);
   border-radius: 16rpx;
   box-shadow: 0 20rpx 20rpx rgba(0, 0, 0, 0.7);
   text-align: center;
   border: 1rpx solid transparent;
   font-weight: bold;
   font-size: var(--size-44);
   color: var(--font-color);
  }
  .header{
    display: inline-block;
    height: 84rpx;
    width: 360rpx;
    line-height: 84rpx;
    font-size: 48rpx;
    box-sizing: border-box;
    /* border-bottom: 6rpx dashed var(--red-color);  */
  }
  .header span:first-child{
    margin-right: 32rpx;
  }
  .cancle{
    position:absolute;
    right: 24rpx;
    top: 24rpx;
  }
  .cancle-img{
    width: 48rpx;
    height: 48rpx;
  }
  .week{
    width: 84rpx;
    height: 84rpx;
    float: left;
    line-height: 84rpx;
    /* border-bottom: 4rpx dashed var(--font-color);  */
    box-sizing: border-box;
  }
  .one-day{
    width: 84rpx;
    height: 84rpx;
    float: left;
    line-height: 84rpx;
  }
  .swiper{
    height: 600rpx;
  }
</style>