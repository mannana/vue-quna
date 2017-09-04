<template>
	
	<div>
		<dl v-for="citys in cityData">
			<dt class="initials">{{citys[0]}}</dt>
			<dd class="city-name" v-for="city in citys[1].city">
				<router-link to='/'>
					<span @click="handleClickStore">{{city.cityarea}}</span>
				</router-link>
			</dd> 
		</dl>
		<div class="right-initials">
			<span  v-for="citys in cityData">{{citys[0]}}</span>
		</div>
	</div>

</template>
<script>
	import Vue from 'vue'
	import vueResource from 'vue-resource'

	Vue.use(vueResource)

	export default {

		data() {

			return {
				someData:{}
			}
		},

		created() {
			var _this = this;
			this.$http.get('./static/city.json').then(response => {
			    this.someData = response.body.data;       
			}, response => {});
		},

		computed:{
			cityData:function() {
				return this.$store.state.flag ?this.someData.foreign  :this.someData.inlandCity
			}
		},

		methods: {
			handleClickStore(e) {
				console.log(e.target.innerHTML)
				var newCity = e.target.innerHTML
				localStorage.newCity = newCity
				this.$store.commit("changeCurrentCity",{
					city:newCity
				})
			}
		}
	}
</script>

<style scoped>
	html,body{
		height:100%;
		font-size:50px;
	}
	.initials{
		line-height:.54rem;
		padding-left:.3rem;
		color:#616161;
		font-size:.26rem;
		background:#f5f5f5;
	}
	.city-name,.initials{
		border-bottom:1px solid #e4e5e6;

	}
	.city-name{
		background: #fff;

	}
	.city-name span{
		line-height:.76rem;
		padding-left:.2rem;
		font-size:.28rem;
		color:#212121;
	}
	.right-initials{
		position:fixed;
		right:0;
		top:50%;
		transform:translateY(-50%);
	}
	.right-initials span{
		display:block;
		width: .32rem;
    	line-height: .32rem;
    	margin-right: -.05rem;
		color: #00afc7;
		font-size: .24rem;
		
	}
</style>