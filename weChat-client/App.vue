<script>
export default {
	onLaunch: function() {
		this.ToastThenLoading()
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	},
	ToastThenLoading(){
		let isShowLoading = false;
		let isShowToast = false;
		const {
		  showLoading,
		  hideLoading,
		  showToast,
		  hideToast
		} = wx;
		Object.defineProperty(wx, 'showLoading', {
		  configurable: true, // 是否可以配置
		  enumerable: true, // 是否可迭代
		  writable: true, // 是否可重写
		  value(...param) {
		    if (isShowToast) { // Toast优先级更高
		      return;
		    }
		    isShowLoading = true;
		    console.log('--------showLoading--------')
		    return showLoading.apply(this, param); // 原样移交函数参数和this
		  }
		});
		Object.defineProperty(wx, 'hideLoading', {
		  configurable: true, // 是否可以配置
		  enumerable: true, // 是否可迭代
		  writable: true, // 是否可重写
		  value(...param) {
		    if (isShowToast) { // Toast优先级更高
		      return;
		    }
		    isShowLoading = false;
		    console.log('--------hideLoading--------')
		    return hideLoading.apply(this, param); // 原样移交函数参数和this
		  }
		});
		Object.defineProperty(wx, 'showToast', {
		  configurable: true, // 是否可以配置
		  enumerable: true, // 是否可迭代
		  writable: true, // 是否可重写
		  value(...param) {
		    if (isShowLoading) { // Toast优先级更高
		      wx.hideLoading();
		    }
		    isShowToast = true;
		    console.error('--------showToast--------')
		    return showToast.apply(this, param); // 原样移交函数参数和this
		  }
		});
		Object.defineProperty(wx, 'hideToast', {
		  configurable: true, // 是否可以配置
		  enumerable: true, // 是否可迭代
		  writable: true, // 是否可重写
		  value(...param) {
		    isShowToast = false;
		    console.error('--------hideToast--------')
		    return hideToast.apply(this, param); // 原样移交函数参数和this
		  }
		});
	}
};
</script>

<style lang="scss">
/*每个页面公共css */
@import url('./assets/css/reset.css');
@import url('./assets/css/common.scss');
view {
	font-family: PingFangSC-Regular, PingFang SC;
}

</style>
