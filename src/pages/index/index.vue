<template>
	<view class="content">
		<view>
			<p v-for="(value, key) in title" class="title">{{key}}: {{value}}</p>
		</view>
		<button>123</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: null
			}
		},
		onShow() {
			// console.log(this.$api.get('/213').then())
			this.$api.get('/213').then((res) => {
				this.title = res.data
				console.log(res)
			})
		},
		methods: {

		}
	}
</script>

<style>
page{
	background-color: #e2c044;
}
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
