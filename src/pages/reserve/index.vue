<template>
	<view class="content">
		<swiper class="swiper">
			<swiper-item v-for="item in imgList" :key='item.id'>
					<imgView :imgData='item'></imgView>
			</swiper-item>
	</swiper>
	</view>
</template>

<script>
import imgView from './components/imgView'
	export default {
		data() {
			return {
				imgList: [
					{
						id: 1,
						url: '',
						nameEn: 'Spirituelle Reise',
						nameZn: '灵性之旅',
						cost: '9.00'
					},{
						id: 2,
						url: '',
						nameEn: 'Spirituelle Reise',
						nameZn: '灵性之旅',
						cost: '1.00'
					},{
						id: 3,
						url: '',
						nameEn: 'Das Herz des Teufels',
						nameZn: '恶魔之心·事业占卜',
						cost: '1.00'
					},{
						id: 4,
						url: '',
						nameEn: 'Spirituelle Reise',
						nameZn: '灵性之旅',
						cost: '1.00'
					}
				]
			}
		},
		components: {
			imgView
		}
	}
</script>
<style>
	.content{
	}
	.item{
		text-align: center;
	}
	.swiper{
		height: 1300rpx;
	}
</style>