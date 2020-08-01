const BASE_URL = 'http://localhost:8082'
export const request = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: res => {
				if(res.statusCode !== 200) {
					return uni.showToast({
						title: '获取数据失败'
					})
				}
				resolve(res)
			},
			fail: (err) => {
				return uni.showToast({
					title: '请求数据失败'
				})
				reject()
			}
		})
	})
}