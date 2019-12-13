<template>
	<view class="content">
		主页主页
		<button @click="handleClick">测试token</button>
	</view>
</template>

<script>
	export default {
		methods: {
			handleClick() {
				this.$api.post('/reserve').then((response) => {
					console.log(response)
				})
			}
		},
	}
</script>
