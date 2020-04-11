<template>
	<view class="page">
		<view class="top-bar"><view class="top-bar_right" @click="onClickLogin">注册</view></view>
		<image src="../../static/header/logo.png" class="logo"></image>
		<view class="main">
			<view class="main-title">登录</view>
			<view class="main-subtitle">您好，欢迎来到 LJ</view>
			<input type="text" v-model="mail" placeholder="请输入用户名/邮箱" placeholder-class="placeholder" />
			<input type="password" v-model="password" placeholder="请输入密码" placeholder-class="placeholder" />
			<view class="main-tip">账号或密码错误</view>
			<view class="submit" @click="onClickSubmit">登录</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			mail: '',
			password: ''
		};
	},
	methods: {
		onClickSubmit() {
			this.$Request('/email', { mail: this.mail }, true)
				.then(res => {})
				.catch(err => {
					wx.showToast({
						title: err.msg,
						icon: 'none'
					});
				});
		},
		onClickLogin() {
			uni.navigateTo({
				url: '/pages/register/register'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	display: flex;
	align-items: center;
	justify-items: center;
	flex-direction: column;
	padding-top: var(--status-bar-height);
}

.logo {
	margin: 256rpx auto 0;
	width: 200rpx;
	height: 100rpx;
}
.main {
	padding: 50rpx 62rpx;
	width: 100%;
	&-title {
		color: $uni-text-color;
		font-size: 56rpx;
		line-height: 80rpx;
		font-weight: 500;
	}
	&-subtitle {
		color: rgba(39, 40, 50, 0.5);
		line-height: 56rpx;
		font-size: 40rpx;
	}
	input {
		border-bottom: 2rpx solid rgba(39, 40, 50, 0.08);
		color: $uni-text-color;
		line-height: 40rpx;
		height: 100rpx;
		margin-bottom: 20rpx;
		font-size: $uni-font-size-lg;
		outline: none;
	}
	&-tip {
		line-height: 30rpx;
		font-size: $uni-font-size-sm;
		color: $uni-color-error;
	}
	.submit {
		width: 520rpx;
		height: 96rpx;
		line-height: 96rpx;
		margin: 90rpx auto 0;
		text-align: center;
		background-color: $uni-color-primary;
		color: $uni-text-color;
		font-size: $uni-font-size-lg;
		border-radius: 96rpx;
		font-weight: 500;
	}
}
.placeholder {
	font-size: $uni-font-size-lg;
}
</style>
