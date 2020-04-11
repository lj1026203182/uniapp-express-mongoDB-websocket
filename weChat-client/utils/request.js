const apiUrl = 'http://localhost:3000'

export default (url, data, showLoading = false) => {
	showLoading && wx.showLoading()
	return new Promise((resolve, reject) => {
		uni.request({
			url: apiUrl + url,
			data: data,
			method: 'POST',
			header: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			success: (res) => {
				if (res.data.code == 0) {
					resolve(res.data)
				} else {
					reject(res.data)
				}
			},
			fail: (err) => {
				reject(err)
			},
			complete: () => {
				wx.hideLoading()
			}
		})
	})
}
