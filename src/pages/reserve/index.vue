<template>
	<view class="content">
		<view v-if="reserveShow">
			<reserve class="reserve" @cancle='reserveShow = false' :dataImg='imgList[current]'></reserve>
			<view class="bg-Color-gray"></view>
		</view>
		<img @click="handleLeft" v-show="current !== 0" src="/static/right.png" class="left-img">
		<img @click="handleRight" v-show="current !== 3" src="/static/right.png" class="right-img">
		<swiper class="swiper" @change='swiperChange' :current='current'>
			<swiper-item v-for="item in imgList" :key='item.id'>
					<imgView :imgData='item' @handleClick='showReserve'></imgView>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import imgView from './components/imgView'
import reserve from './components/reserve'
const baseUrl = 'http://175.24.101.239:7001/public/img'
// const baseUrl = 'http://[2001:250:6803:330c:18a7:6eb:c4bd:d3e1]:7001/public/img'
	export default {
		data() {
			return {
				current: 0,
				reserveShow: false,	
				imgList: [
					{
						id: 1,
						url: baseUrl + '/SpirituelleReise.png',
						nameEn: 'Spirituelle Reise',
						nameZn: '灵性之旅',
						cost: '9.00'
					},{
						id: 2,
						url: baseUrl + '/Meditationsliebe.png',
						nameEn: 'Meditationsliebe',
						nameZn: '冥想之爱·爱情占卜',
						cost: '1.00'
					},{
						id: 3,
						url: baseUrl + '/DHdT.png',
						nameEn: 'Das Herz des Teufels',
						nameZn: '恶魔之心·事业占卜',
						cost: '1.00'
					},{
						id: 4,
						url: baseUrl + '/AngleReich.png',
						nameEn: 'Angles Reich',
						nameZn: '天使之境·课业占卜',
						cost: '0.10'
					}
				]
			}
		},
		components: {
			imgView,
			reserve
		},
		methods: {
			swiperChange(e) {
				this.current = e.detail.current
			},
			handleLeft() {
				console.log('handleLeft')
				this.current--
			},
			handleRight() {
				console.log('handleRight')
				this.current++
			},
			showReserve(data) {
				console.log(data)
				this.reserveShow = true
			}
		}
	}
</script>
<style>
	.content{
		position: relative;
	}
	.item{
		text-align: center;
	}
	.swiper{
		height: 1300rpx;
	}
	.right-img{
		z-index: 1;
		position: fixed;
		width: 48rpx;
		height: 48rpx;
		right: 4rpx;
		top: 50%;
		border: 4rpx solid transparent;
	}
	.left-img{
		z-index: 1;
		position: fixed;
		width: 48rpx;
		height: 48rpx;
		left: 4rpx;
		top: 50%;
		transform: rotateY(180deg);
		border: 4rpx solid transparent;
	}
	.reserve{
		position: absolute;
		z-index: 3;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	.bg-Color-gray{
		position: absolute;
		z-index: 2;
		background-color: rgba(148, 148, 148, 0.432);
		width: 100%;
		height: 100%;
	}
</style>