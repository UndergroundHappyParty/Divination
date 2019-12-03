<<template>
  <view>
    <view class='main'>
      12313
      <button @click='handleCancle'>取消</button>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    handleCancle() {
      this.$emit('cancle')
    }
  },
}
</script>
<style>
 .main{
   width: 580rpx;
   height: 800rpx;
   background-color: #e2c044;
   border-radius: 4rpx;
   box-shadow: 0 20rpx 20rpx rgba(0, 0, 0, 0.7)
 }
</style>
