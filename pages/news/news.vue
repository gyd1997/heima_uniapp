<template>
	<view class="news">
		<news-item @itemClick="goDetail" :list="newsList"></news-item>
	</view>
</template>

<script>
	import newsItem from '../../components/news-item/news-item.vue'
	export default {
		data() {
			return {
				newsList: ''
			}
		},
		methods: {
			async getNews () {
				const res = await this.$http({
					url: '/api/getnewslist'
				})
				this.newsList = res.data.message
			},
			goDetail (id) {
				uni.navigateTo({
					url: '/pages/news-detail/news-detail?id=' + id
				})
			}
		},
		onLoad() {
			this.getNews()
		},
		components: {
			newsItem
		}
	}
</script>

<style lang="scss">
.news {

}
</style>
