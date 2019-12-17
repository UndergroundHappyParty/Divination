<template>
  <view class="main" :class="{ zeroBgColor: isActive }">{{content|clearZero}}</view>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
      today: new Date().getDate()
    }
  },
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  filters: {
    clearZero(x) {
      if (x[0] == 'x') return x.substring(1)
      return x
    }
  },
  mounted() {
    this.defineIsActive()
  },
  methods: {
    defineIsActive() {
      if (this.content[0] == 'x') {
        this.isActive = true
      }
    }
  },
}
</script>
<style>
 .main{
   width: 84rpx;
   height: 84rpx;
 }
 .zeroBgColor{
   color:#8a8a8a59
 }
</style>
