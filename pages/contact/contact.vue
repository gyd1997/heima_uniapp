<template>
	<view class="contact">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg" mode=""></image>
		<view class="info">
			<view @click="phone">
				联系电话：400-188-1888（点击拨打）
			</view>
			<view>校区地址：浙江省杭州市下沙经济开发区4号大街187号盛泰时代山</view>
		</view>
		<map
			class="map"
			:longitude="longtitude"
			:latitude="latitude"
			:markers="marker"
			:scale="scale">
		</map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longtitude: 120.363172,
				latitude: 30.312212,
				marker: [
					{
						longtitude: 120.363172,
						latitude: 30.312212,
						iconPath: '/static/logo.png',
						width: 30,
						height: 30
					}
				],
				scale: 13
			}
		},
		methods: {
			phone() {
				uni.makePhoneCall({
					phoneNumber: '13259458595'
				})
			}
		}
	}
</script>

<style lang="scss">
.contact {
	.img {
		width: 750rpx;
		height: 320rpx;
	}
	.info {
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		view {
			line-height: 80rpx;
			border-bottom: 1px solid #eee;
		}
	}
	.map {
		width: 750rpx;
		height: 750rpx;
	}
}
</style>
