<template>
	<view class="page">
		<view class="top-bar">
			<view class="top-bar_left" @click="onClickBack"><image src="../../static/back.png" mode="aspectFill"></image></view>
			<view class="top-bar_right"><image src="../../static/close.png" mode="aspectFill"></image></view>
		</view>
		<image src="../../static/header/logo.png" class="logo"></image>
		<view class="main">
			<view class="main-title">注册</view>
			<input type="text" v-model="name" placeholder="请输入手机号" placeholder-class="placeholder" />
			<input type="text" v-model="email" placeholder="请输入邮箱" placeholder-class="placeholder" />
			<input type="password" v-model="password" placeholder="请输入密码" placeholder-class="placeholder" />
			<view class="submit" @click="onClickSubmit">注册</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			name: '',
			email: '',
			password: ''
		};
	},
	methods: {
		onClickSubmit() {
			this.$Request('/test', null).then(res => {
				wx.showToast({
					title: res.msg
				});
			});
		},
		onClickBack() {
			uni.navigateBack();
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
.top-bar {
	border: none;
	&_left {
		flex: 1;
		display: flex;
		align-items: center;
		image {
			width: 50rpx;
			height: 50rpx;
		}
	}
	&_right {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		image {
			width: 50rpx;
			height: 50rpx;
		}
	}
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
	font-weight: 500;
}
</style>
