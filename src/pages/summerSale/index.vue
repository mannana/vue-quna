<template>
  <div class="main" @scroll="handleScroll">
      <div class="header">
          <router-link to="/"><i class="iconfont back">&#xe615;</i></router-link>
          <span class="title">暑期大放价</span>
          <router-link to="/">
              <div class="index">
                  <i class="iconfont index-icon">&#xe607;</i>
                  <span>首页</span>
              </div>
          </router-link>
      </div>
      <div class="content">
          <div class="img-box">
              <img class="topic-img" alt="暑期大放价 " src="//img1.qunarzz.com/piao/fusion/1707/5c/d2562a5021bff502.jpg">
          </div>
          <City></City>
          <majorList :majorList="items"></majorList>
          <recommenList :recommenList="items"></recommenList>
      </div>
  </div>
</template>

<script>
import City from "./citySelect"
import majorList from "./majorList"
import recommenList from "./recommendList"
export default {
    name: 'summerSale',
    components:{
        majorList,
        recommenList,
        City
    },
    created() {
        this.$http.get('/static/summerSale.json').then(response => {
            let data = response.body.data;
            this.items=data.items;
        }, response => {
          console.log("ajax error");
        });
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed(){
        window.removeEventListener("scroll", this.handleScroll)
    },
    methods:{
        handleScroll(){
            let scrollTop=document.body.scrollTop,
                filterContainer=document.getElementById("filter-container"),
                Container=document.getElementById("recommen-content"),
                offsetTop=Container.offsetTop;
            if(scrollTop>=offsetTop){
                filterContainer.className="filter-fixed";
            }else{
                filterContainer.className="filter-container";
            }
        }
    },
    computed:{},
    data () {
        return {
            isPage:true,
            items:[]
        }
    }
}
</script>

<style>
@import "../../assets/font/iconfont.css";
.main{
    background: #28a3e1;
    overflow: hidden;
}
.back{
    width: .88rem;
    position: absolute;
    top: 0;
    left:0;
    line-height: .88rem;
    font-size: .34rem;
}
.index{
    width:.88rem;
    height: .88rem;
    position: absolute;
    right: 0;
    top: .1rem;
    font-size: .24rem;
}
.index-icon{
    width: 100%;
    font-size: .5rem;
    display: inline-block;
    color: #fff;
}
.title{
    font-size: .32rem;
    line-height: .88rem;
}
.header{
    width:100%;
    height: .88rem;
    color: #fff;
    text-align: center;
    background: #1ba9ba;
    border-bottom: #1b7a8b .02rem solid;
}
.item{
    background: #fff;
    margin-bottom: .2rem;
}
.img-box{
    overflow: hidden;
    height: 0;
    width: 100%;
    padding-bottom: 78.4%;
}
.topic-img{
    width: 100%;
    vertical-align: middle;
}
.info{
    padding:.15rem .22rem .2rem;
    position: relative;
}
.name{
    color: #212121;
    font-size: .36rem;
    line-height: .54rem;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.discription{
    color: #616161;
    line-height: .45rem;
    font-size: .26rem;
    margin: 0;
    padding: 0;
}
.price-box{
    position: absolute;
    top: .25rem;
    right: .2rem;
    color: #616161;
    font-size: .22rem;
}
.symbol{
    color: #ff8300;
    font-size: .18rem;
}
.price{
    color: #ff8300;
    font-size: .4rem;
    margin: 0 .04rem;
    font-weight: bold;
}
.select-title{
    font-size: .4rem;
    text-align: center;
    margin-top: .5rem;
}
.select-discription{
    font-size: .28rem;
    margin-top: .3rem;
    text-align: center;
}
.router-link-active{
    color: #fff;
}
</style>
