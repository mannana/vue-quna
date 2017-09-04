<template>
	<div class="weekend-container">
		<p class="weekend-container-title">周末去哪儿</p>
		<ul>
			<li v-for="item in weekendInfo" key="item.id" >
			<router-link :to="item.link + '?id=' + item.id">
				<div class="weekend-img-container">
					<img class="weekend-img" :src="item.imgUrl" :alt="item.title">
				</div>
				<p class="weekend-title">{{item.title}}</p>
				<p class="weekend-introduce">{{item.intro}}</p>
				</router-link>
			</li>
		</ul>
		<p class="weekend-notice">
			<span class="iconfont attention">&#xe603;</span><b class="ticket-price">票面价</b>是指通过景区指定窗口售卖的纸质门票上标注的价格
		</p>
	</div>
</template>

<script>
	export default {
		props:["weekendInfo"],
		data() {
			return {
			}
		}
	}	
</script>

<style scoped>
	@import "../../assets/font/iconfont.css";
	.weekend-container-title {
		overflow: hidden;
		height: .8rem;
		line-height: .8rem;
		background: #f5f5f5;
		padding-left: .26rem;
		font-size: .28rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.weekend-img-container {
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 37.1%;
	}
	.weekend-img {
		width: 100%;
	}
	.weekend-title {
		overflow: hidden;
		line-height: .48rem;
		padding: .2rem 0 0 .24rem;
		font-size: .28rem;
		color: #212121;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.weekend-introduce {
		overflow: hidden;
		line-height: .48rem;
		padding: 0 0 .2rem .24rem;
		font-size: .24rem;	
		color: #616161;	
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.weekend-notice {
		line-height: .32rem;
		padding: .14rem .1rem;
		font-size: .24rem;	
		color: #616161;
		border-top: .1rem solid #f5f5f5;
	} 
	.weekend-notice .attention {
		margin-right: .08rem;
		font-size: .24rem;
		color: #abb4b4;
	}
	.weekend-notice .ticket-price {
		font-weight: bold;
	}
</style>