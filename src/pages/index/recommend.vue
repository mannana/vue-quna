<template>
	<div class="recommend-container">
		<p class="recommend-title">热门推荐</p>
		<ul class="recommend-list">
			<li class="recommend-item border-bottom" v-for="item in recommendInfo" key="item.id">
				<div class="item-img">
					<img :src="item.imgUrl">
				</div>
				<div class="item-msg">
					<p class="item-msg-title">{{item.itemTitle}}</p>
					<p class="item-msg-intro">{{item.itemIntro}}</p>
					<p class="item-msg-price-info">
						<span class="price-currency">&yen;</span><i class="price-num">{{item.itemPrice}}</i><span>起</span>
					</p>
				</div>
			</li>
		</ul>
		<p to="" class="watch-more">查看所有产品</p>
	</div>
</template>

<script>
	export default {
		props:["recommendInfo"],
		data () {
			return {
				
			}
		}
	}
</script>

<style scoped>
	@import "../../assets/css/common/border.css";
	.recommend-title {
		overflow: hidden;
		background: #f5f5f5;
		height: .8rem;
		font-size: .28rem;
		line-height: .8rem;
		padding-left: .26rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.recommend-item {
		position: relative;
		height: 1.8rem;
	}
	.recommend-item::after {
		background-color: #f5f5f5; 
	}
	.item-img {
		position: absolute;
		left: .2rem;
		top: .2rem;
		width: 1.4rem;
		height: 1.4rem;
	}
	.item-img img {
		width: 100%;
		height: 100%;
	}
	.item-msg{	
		overflow: hidden;
		margin-left: 1.8rem;	
		padding-top: .2rem;		
		line-height: .4rem;	
		white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.item-msg-title {	
		height: .4rem;				
	    color: #212121;
	    font-size: .3rem;
	}
	.item-msg-intro {
		overflow: hidden;
		height: .4rem;
		margin-bottom: .1rem;
		color: #9e9e9e;		
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.item-msg-price-info {
		height: .4rem;
		font-size: .24rem;
		color: #9e9e9e;
	}
	.price-currency {
		color: #ff8300;
	}
	.price-num {
		font-size: .36rem;
		padding: 0 .04rem;
		color: #ff8300;
	}
	.watch-more {
		height: .88rem;
		line-height: .88rem;
		font-size: .28rem;
		text-align: center;
		color: #00afc7;
	}
</style>