<template>
	<div class="foot-container">
		<ul class="select">
			<li to="" class="select-item">
				<span class="iconfont icon">&#xe60f;</span>
				<b class="select-item-kind">机票</b>
			</li>
			<li to="" class="select-item">
				<span class="iconfont icon">&#xe611;</span>
				<b class="select-item-kind">酒店</b>
			</li>
			<li to="" class="select-item">
				<span class="iconfont icon">&#xe83f;</span>
				<b class="select-item-kind">公寓</b>
			</li>
			<span class="halving-line">|</span>
			<li to="" class="select-item more">
				<span class="iconfont icon">&#xe635;</span>
				<b class="select-item-kind">更多</b>
			</li>
		</ul>
		<p class="foot-login border-bottom">
			<span to="" class="foot-login-way">登录</span><span to="" class="foot-login-way">我的订单</span><span to="" class="foot-login-way">最近浏览</span><span to="" class="foot-login-way">关于我们</span>
		</p>
		<p class="version-select">
			<span class="version-touch">触屏版</span>
			<span class="version-pc">电脑版</span>
		</p>
		<p class="archival-information">Qunar 京ICP备05021087<span to="">意见反馈</span></p>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	@import "../../assets/css/common/border.css";
	.select {
		padding: .2rem .75rem 0;
		background: #f5f5f5;
		overflow: hidden;
		display: flex;
		justify-content: space-around;
		font-size: .28rem;	
	}
	.select-item {
		line-height: .5rem;
		text-align: center;
		color: #acacac;			
	}
	.select-item .select-item-kind {
		text-decoration: underline;
	}
	.select-item .icon {
		font-size: .4rem;
		vertical-align: top;
	}
	.halving-line {
		color: #acacac;
		line-height: .5rem;
	}
	.more .icon {
		font-size: .28rem;
	}
	.more .select-item-kind {
		text-decoration: none;
	}
	.foot-login {
		line-height: .8rem;
		font-size: .28rem;
		color: #25a4bb;
		background: #f5f5f5; 
	}
	.foot-login::after {
		background-color: #cacaca;
	}
	.foot-login .foot-login-way {
		margin-left: .4rem;
	}
	.version-select {
		padding-top: .2rem;
		text-align: center;
		font-size: .28rem;
		background: #f5f5f5;
		color: #212121;
	}
	.version-pc {
		margin-left: .4rem;
		color: #25a4bb;
	}
	.archival-information {
		padding: .2rem;
		font-size: .28rem;
		text-align: center;
		background: #f5f5f5;
		color: #9e9e9e;
	}
</style>