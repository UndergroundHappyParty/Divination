<<template>
  <view>
    <view v-if ='!isShowPick' class='main'>
      <view class='main-title'><span>{{dataImg.nameEn}}</span></view>
      <view class='main-title'><span>{{dataImg.nameZn}}</span></view>
      <view>
        <view class='main-reserve'>预约时间:</view>
        <view class='main-bottom'>
            <view class='mian-choice' @click='handleChoice'>
              <view><span>{{date.year}}</span></view>
              <view><span>{{date.month|changeDate}}</span></view>
              <view><span>{{date.day|changeDate}}</span></view>
            </view>
          <view class='main-border'>
            <view class='main-ok' @click='handleOk'>
              <img v-if='isLodaing' class='loading' src='/static/30.gif'>
              <span  v-if='!isLodaing'>确 定</span>
            </view>
            <view @click='handleCancle'><span>取 消</span></view>
          </view>
        </view>
      </view>
    </view>
    <dataPick v-if ='isShowPick' class='data-pick' @cancle='isShowPick = false'></dataPick>
  </view>
</template>
<script>
import dataPick from './dataPick'
export default {
  data() {
    return {
      isLodaing: false,
      isShowPick: false,
      date: {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate()
      }
    }
  },
  props: {
    dataImg: {
      type: Object,
      default: ''
    }
  },
  components: {
    dataPick
  },
  mounted() {
  },
  filters: {
    changeDate(num) {
      let str = String(num)
      return ('00' + str).substring(str.length)
    }
  },
  methods: {
    handleCancle() {
      this.$emit('cancle')
    },
    handleOk() {
      this.isLodaing = true
      setTimeout(() => {
        this.isLodaing=false
      }, 2000);
    },
    handleChoice() {
      this.isShowPick = true
    }
  }, 
}
</script>
<style>
 .main{
   position: relative;
   width: 580rpx;
   height: 800rpx;
   background-color: var(--base-color);
   border-radius: 16rpx;
   box-shadow: 0 20rpx 20rpx rgba(0, 0, 0, 0.7);
   text-align: center;
   border: 1rpx solid transparent;
   font-weight: bold;
   font-size: var(--size-44);
   color: var(--font-color);
 }
 .main-title{
   margin-top: 14rpx;
 }
 .main-title:first-child{
   margin-top: 86rpx;
 }
 .main-reserve{
   text-align: left;
   font-size: 28rpx;
   margin: 32rpx auto 32rpx 64rpx;
 }
 .main-bottom{
   display: inline-block;
   width: 400rpx;
 }
 .mian-choice{
   font-size: 44rpx;
 }
 .main-border view{
   padding: 14rpx 20rpx;
   margin-top: 32rpx;
   border: 4rpx dashed #fff;
   border-radius: 30rpx;
   font-size: 64rpx;
   height: 70rpx;
   line-height: 70rpx;
 }
 .mian-choice view{
   display: inline-block;
   padding: 14rpx 20rpx;
   border: 4rpx dashed #fff;
   border-radius: 30rpx;
   height: 70rpx;
   line-height: 70rpx;
 }
 .mian-choice view:first-child{
   float: left;
 }
  .mian-choice view:last-child{
   float: right;
 }
 .main-ok{
   border-color: #d43030 !important;
   color: #d43030 ;
 }
 .loading{
   width: 64rpx;
   height: 64rpx;
   /* margin-right: 32rpx; */
 }
 .data-pick{
   position: absolute;
   z-index: 3;
	 left: 50%;
	 top: 50%;
	 transform: translate(-50%, -50%);
 }
</style>
