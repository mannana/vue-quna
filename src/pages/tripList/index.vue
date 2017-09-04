
<template>
  <div class="main" v-if="hasData">
      <div class="header">
           <router-link to="/"><i class="iconfont back">&#xe615;</i></router-link>
          <span class="title">{{data.title}}</span>
      </div>
      <div class="item" v-for="item in items">
          <div class="img-box" @click="handleClick">
              <img class="img" :src="item.imgUrl" :data-id="item.id" :alt="item.name" :title="item.name" />
          </div>
          <div class="info">
              <p class="name">{{ item.name }}</p>
              <p class="discription">{{ item.discription }}</p>
              <div class="price-box">
                 <p v-if="item.price"><i class="symbol">&yen;</i><em class="price">{{item.price}}</em><span>起</span></p>
                 <p v-else>查看详情</p>
              </div>
          </div>
      </div>
      <div v-show="isShow" @click="handleClick" @touchmove.prevent class="mark-info">
          <p class="select-title">{{select(selectItem).name}}</p>
          <p class="select-discription">{{select(selectItem).discription}}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'trip',
    data () {
        return {
            isShow:false,
            selectItem:"",
            hasData:false,
            data:{},
            items:[]
        }
    },
    components:{},
    methods:{
        handleClick(e) {
            this.isShow=!this.isShow;
            this.selectItem=e.target.getAttribute("data-id");
        },
        select(id){
            id=id?id:1;
            for(var i=0;i<this.items.length;i++){
                if(this.items[i].id==id){
                    return this.items[i];
                }
            }
        }
    },
    created(){
        this.$http.get('/static/tripList.json').then(response => {
            let data = response.body.data;
            let id=location.hash.slice(location.hash.indexOf("=")+1);
            let key="items"+id;
            this.data=data[key];
            this.items=this.data.items;
            this.hasData=true;
        }, response => {
          console.log("ajax error");
        });
    },
    computed:{

    }

}
</script>

<style>
@import "../../assets/font/iconfont.css";
.main{
    background: #f5f5f5;
}
.mark-info{
    position: fixed;
    width:100%;
    height:100%;
    top:0;
    right: 0;
    bottom: 0;
    left:0;
    background: rgba(2, 5, 5,0.6);
    color: #fefefe;
    z-index: 100;
}
.back{
    position: absolute;
    top: 0;
    left:0;
    padding-left: .22rem;
    line-height: .88rem;
    font-size: .36rem;
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
    background: #00bcd4;
}
.item{
    background: #fff;
    margin-bottom: .2rem;
}
.img-box{
    overflow: hidden;
    height: 0;
    width: 100%;
    padding-bottom: 43.37288%;
}
.img{
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
