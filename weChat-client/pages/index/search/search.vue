<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar_left">
				<input type="text" placeholder="搜索用户/群" />
				<image src="../../../static/search.png" mode="aspectFill" class="search"></image>
			</view>
			<view class="top-bar_right all-center">取消</view>
		</view>

		<view class="wrapper">
			<view class="user-wrapper">
				<view class="user-title">用户</view>
				<view class="user-content">
					<image src="../../../static/1.jpg" mode="aspectFill" class="user-content_avatar"></image>
					<view class="user-content_name diandiandian">开发的实力</view>
					<view class="user-content_action">发消息</view>
				</view>
			</view>
			<view class="user-wrapper">
				<view class="user-title">群组</view>
				<view class="user-content">
					<image src="../../../static/1.jpg" mode="aspectFill" class="user-content_avatar"></image>
					<view class="user-content_name diandiandian">开发的实力</view>
					<view class="user-content_action">发消息</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="scss">
.top-bar {
	box-shadow: 0rpx 2rpx 0px 0px rgba(0, 0, 0, 0.1);
	position: static;
	&_left {
		flex: 6;
		position: relative;
		input {
			background-color: $uni-bg-color;
			border-radius: 10rpx;
			height: 60rpx;
			padding: 0 60rpx 0 20rpx;
			line-height: 40rpx;
			font-size: $uni-font-size-base;
		}
		.search {
			position: absolute;
			right: 12rpx;
			top: 50%;
			transform: translateY(-50%);
			width: 40rpx;
			height: 40rpx;
		}
	}
	&_right {
		flex: 1;
		height: 100%;
		column-rule: $uni-text-color;
		font-size: $uni-font-size-base;
	}
}
.wrapper {
	width: 100%;
	padding: 32rpx;
}
.user-title {
	color: $uni-text-color;
	font-size: 44rpx;
	line-height: 60rpx;
	font-weight: 600;
}
.user-content {
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20rpx;
	&_avatar {
		width: $uni-img-size-sm;
		height: $uni-img-size-sm;
		border-radius: $uni-border-radius-sm;
		margin-right: $uni-spacing-row-base;
	}
	&_name {
		flex: 1;
		min-width: 0;
		font-size: 36rpx;
		color: $uni-text-color;
	}
	&_action {
		width: 120rpx;
		line-height: 48rpx;
		border-radius: $uni-border-radius-lg;
		background-color: $uni-color-primary;
		text-align: center;
		font-size: $uni-font-size-sm;
		margin-left: $uni-spacing-row-base;
	}
}
</style>
