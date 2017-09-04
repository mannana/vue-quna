<template>
	<div class="main">
		<div class="main-filter" id="ceiling" @scroll="handleScroll" ref="mainFilter">
			<div class="filter-sort" style="border-right: 1px solid #e7e7e7;">
				<span class="sort-select">全部分类</span>
			</div>
			<div class="filter-sort">
				<span class="sort-select">推荐排序</span>
			</div>
		</div>

		<main-view :contInfo="contentInfo"></main-view>
		<!--往子组件里传数据-->
	</div>

</template>

<script>
	import mainview from "./view.vue"
	export default {
	    name: 'index',
	   		data () {
		    	return {
		      		contentInfo: []
		    	}
		    },
		  	created() {
				this.$http.get('/static/view'+this.$store.state.number+'.json').then(response => {
					var data = response.body.data;
					this.contentInfo = data.contentInfo;
				}, response => {});
				window.addEventListener('scroll', this.handleScroll);
			},
			beforeDestroy() {
				window.removeEventListener("scroll", this.handleScroll)
			},
		    components: {
		    	"main-view": mainview
		   	},
		   	watch:{
		   		'$route'(from,to){
		   			this.$http.get('/static/view'+this.$store.state.number+'.json').then(response => {
						var data = response.body.data;
						this.contentInfo = data.contentInfo;
					}, response => {});
		   		}
		   	},
		   	methods: {
		   		handleScroll() {
		   			let scrollTop = document.body.scrollTop;
		   			var this_=this;
			   			var	mainDom = this_.$refs.mainFilter;
						console.log('mainDom:'+mainDom);
						var	offsetHeight = mainDom.offsetHeight?mainDom.offsetHeight:60;
			   			if (scrollTop>=offsetHeight) {
			   				mainDom.className = "main-filter-scroll"
			   			}else {
			   				mainDom.className = "main-filter"
			   			}
		   		}
		   	}
	}

</script>

<style>
	.main {
		height: 100%;
		position: relative;
	}
	.main-filter {
	    height: .8rem;
	    background: white;
	    width: 100%;
	    border-bottom: 1px solid #e1e2eb;
	    background: #fff;
	}
	.main-filter-scroll{
		height: .8rem;
	    background: white;
	    width: 100%;
	    border-bottom: 1px solid #e1e2eb;
		background: #fff;
		position:fixed;
		top:0;
		z-Index:1;
	}

	.filter-sort {
		float: left;
		width: 49%;
	    overflow: hidden;
	    position: relative;
	    color: #212121;
	    line-height: .5rem;
	    text-align: center;
	    margin: 0.15rem 0;
	}
	.sort-select {
		position: relative;
	}
	.sort-select::after {
		content: "\0020";
	    position: absolute;
	    right: -.25rem;
	    top: .18rem;
	    width: 0;
	    height: 0;
	    margin-top: -.04rem;
	    border-left: .08rem solid transparent;
	    border-right: .08rem solid transparent;
	    border-top: .08rem solid #666;
	}

</style>
