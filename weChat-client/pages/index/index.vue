<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar_left"><image src="../../static/logo.png"></image></view>
			<view class="top-bar_center all-center"><image src="../../static/header/logo.png"></image></view>
			<view class="top-bar_right">
				<image src="../../static/header/search.png" class="top-bar_right_search" @click="onClickAction(1)"></image>
				<image src="../../static/header/add.png" class="top-bar_right_add" @click="onClickAction(2)"></image>
			</view>
		</view>
		<view class="wrapper">
			<!-- 好友申请 -->
			<view class="apply">
				<view class="friend-wrapper">
					<view class="friend-img">
						<image src="../../static/AddFriend.png" mode="aspectFill"></image>
						<view class="friend-img_tip">2</view>
					</view>
					<view class="friend-content">
						<view class="friend-content_top">
							<view class="friend-content_name diandiandian">好友请求</view>
							<view class="friend-content_time diandiandian">上午7:45</view>
						</view>
						<view class="friend-content_bottom diandiandian">就是你的那额，不用点开始速</view>
					</view>
				</view>
			</view>
			<!-- 好友列表 -->
			<view class="friend-wrapper" v-for="(item, index) in friendList" :key="item.ID">
				<view class="friend-img">
					<image :src="`../../static/${item.Img}`" mode="aspectFill"></image>
					<view class="friend-img_tip" v-if="item.Unread">{{ item.Unread > 99 ? '99+' : item.Unread }}</view>
				</view>
				<view class="friend-content">
					<view class="friend-content_top">
						<view class="friend-content_name diandiandian">{{ item.Name }}</view>
						<view class="friend-content_time diandiandian">{{ currentTime(item.Time) }}</view>
					</view>
					<view class="friend-content_bottom diandiandian">{{ item.LastLog }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import datas from '../../assets/js/datas.js';
import { dateTime } from '../../utils/utils.js';
export default {
	data() {
		return {
			friendList: []
		};
	},
	onLoad() {
		this.getFriends();
	},
	methods: {
		getFriends() {
			setTimeout(() => {
				this.friendList = datas.friend();
			}, 500);
		},
		onClickAction(type) {
			if (type == 1) {
				uni.navigateTo({
					url: 'search/search'
				});
			} else if (type === 2) {
			}
		},
		currentTime() {
			return dateTime(new Date());
		}
	}
};
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	align-items: center;
	justify-items: center;
	flex-direction: column;
	padding-top: var(--status-bar-height);
}
.top-bar {
	background-color: rgba(255, 255, 255, 0.96);
	box-shadow: 0rpx 2rpx 0px 0px rgba(0, 0, 0, 0.1);
}

.wrapper {
	padding-top: 88rpx;
	width: 100%;
}
.friend-wrapper {
	width: 100%;
	height: 136rpx;
	padding: 0 $uni-spacing-row-base;
	display: flex;
	align-items: center;
	justify-content: space-between;
	&:active {
		background-color: $uni-text-color-disable;
		transition: 0.2s;
	}
	.friend-img {
		width: $uni-img-size-base;
		height: $uni-img-size-base;
		margin-right: $uni-spacing-row-base;
		position: relative;
		image {
			border-radius: $uni-border-radius-base;
			width: 100%;
			height: 100%;
			background-color: $uni-color-primary;
		}
		&_tip {
			position: absolute;
			top: -4rpx;
			right: -6rpx;
			font-size: $uni-font-size-base;
			line-height: 36rpx;
			padding: 0 10rpx;
			border-radius: $uni-font-size-base;
			background-color: $uni-color-error;
			color: $uni-text-color-inverse;
		}
	}
	.friend-content {
		flex: 1;
		min-width: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		&_top {
			color: $uni-text-color;
			font-size: $uni-font-size-lg;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		&_name {
			width: 70%;
			font-weight: bold;
		}
		&_time {
			color: $uni-text-color-grey;
			font-size: $uni-font-size-sm;
			width: 30%;
			text-align: right;
		}
		&_bottom {
			font-size: $uni-font-size-base;
			color: $uni-text-color-grey;
		}
	}
}
</style>
