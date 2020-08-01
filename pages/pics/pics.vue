<template>
	<view class="pics">
		<scroll-view scroll-y="true" class="left">
			<view
				@click="leftClick(index, item.id)"
				:class="active === index ? 'active' : ''"
				v-for="(item, index) in cates"
				:key="item.id">
				{{item.title}}
			</view>
		</scroll-view>
		<scroll-view scroll-y="true" class="right">
			<view
				class="item"
				v-for="item in secondData"
				:key="item.id">
				<image @click="priviewImg(item.img_url)" :src="item.img_url" mode=""></image>
				<text>{{item.title}}</text>
			</view>
			<text v-if="secondData.length === 0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates: [],
				active: 0,
				secondData: []
			}
		},
		methods: {
			async getPicsCate () {
				const res = await this.$http({
					url: '/api/getimgcategory'
				})
				this.cates = res.data.message
				this.leftClick(0, this.cates[0].id)
			},
			async leftClick (index, id) {
				this.active = index
				const res = await this.$http({
					url: '/api/getimages/' + id
				})
				this.secondData = res.data.message
			},
			priviewImg (cur) {
				const urls = this.secondData.map(item => {
					return item.img_url
				})
				uni.previewImage({
					urls,
					current: cur
				})
			}
		},
		onLoad() {
			this.getPicsCate()
		}
	}
</script>

<style lang="scss">
page {
	height: 100%;
}
.pics {
	height: 100%;
	display: flex;
	.left {
		width: 200rpx;
		height: 100%;
		border-right: 1px solid #eee;
		view {
			height: 60px;
			line-height: 60px;
			color: #333;
			text-align: center;
			font-size: 30rpx;
			border-top: 1px solid #eee;
		}
		.active {
			background: $shop-color;
			color: #fff;
		}
	}
	.right {
		height: 100%;
		width: 530rpx;
		margin: 10rpx auto;
		.item {
			image {
				width: 520rpx;
				height: 520rpx;
				border-radius: 5px;
			}
			text {
				font-size: 30rpx;
				line-height: 60rpx;
			}
		}
	}
}
</style>
