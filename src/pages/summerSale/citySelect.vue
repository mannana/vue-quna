<template>
    <div class="menu-outer"  v-bind:class="{ expand: isShow}" role="menuOuter" >
        <div class="menu-container" @click="handleClick" role="menuContainer">
            <div class="menu-current" role="menuCurrent">{{cityItems[selectedIndex-1].name}}</div>
        </div>
    <ul v-show="isShow"  class="menu-list clrfix" @click="handleSelect">
        <li v-for="item in cityItems" :class="{selected:item.id==selectedIndex}" class="menu-item" :index="item.id" key="item.id">{{item.name}}</li>
    </ul>
</div>
</template>
<script>
export default {
    name:"city",
    created(){
    },
    methods:{
        handleClick(){
            this.isShow=!this.isShow;
        },
        handleSelect(e){
            if(e.target.tagName == "LI"){
                this.selectedIndex=e.target.getAttribute("index");
            }

        }
    },
    data(){
        return {
            isShow:false,
            selectedIndex:"1",
            cityItems:[{
                id: 1,
                name: "北京"
            },{
                id: 2,
                name: "上海"
            },{
                id: 3,
                name: "天津"
            },{
                id: 4,
                name: "天津"
            },{
                id: 5,
                name: "四川"
            },{
                id: 6,
                name: "广东"
            },{
                id: 7,
                name: "浙江"
            },{
                id: 8,
                name: "山东"
            },{
                id: 9,
                name: "江苏"
            },{
                id: 10,
                name: "海南"
            },{
                id: 11,
                name: "广西"
            },{
                id: 12,
                name: "河北"
            },{
                id: 13,
                name: "吉林"
            },{
                id: 14,
                name: "陕西"
            },{
                id: 15,
                name: "福建"
            },{
                id: 16,
                name: "内蒙古"
            },{
                id: 17,
                name: "山西"
            },{
                id: 18,
                name: "甘肃"
            },{
                id: 19,
                name: "湖北"
            },{
                id: 20,
                name: "江西"
            },{
                id: 21,
                name: "贵州"
            },{
                id: 22,
                name: "安徽"
            },{
                id: 23,
                name: "云南"
            },{
                id: 24,
                name: "辽宁"
            },{
                id: 25,
                name: "黑龙江"
            },{
                id: 26,
                name: "湖南"
            },{
                id: 27,
                name: "河南"
            },{
                id: 28,
                name: "宁夏"
            },{
                id: 29,
                name: "西藏"
            },{
                id: 30,
                name: "新疆"
            }]
        }
    }
}
</script>
<style>
.menu-outer {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 0;
    line-height: 0;
}
.clrfix:after {
    content: "\0020";
    display: block;
    visibility: hidden;
    height: 0;
    clear: both;
}
.menu-container {
    position: absolute;
    top: -.3rem;
    right: .2rem;
    min-width: .56rem;
    height: .56rem;
    padding-right: .46rem;
    background: rgba(0,0,0,.5);
    border-radius: .56rem;
}
.menu-current {
    padding-left: .16rem;
    color: #fff;
    font-size: .28rem;
    line-height: .56rem;
    text-align: right;
}
.menu-container {
    position: absolute;
    top: -.3rem;
    right: .2rem;
    min-width: .56rem;
    height: .56rem;
    padding-right: .46rem;
    background: rgba(0,0,0,.5);
    border-radius: .56rem;
}
.menu-container::after {
    content: '\0020';
    overflow: hidden;
    position: absolute;
    top: 50%;
    right: .16rem;
    margin-top: -.12rem;
    width: .16rem;
    height: .16rem;
    border-width: 0 0 .02rem .02rem;
    border-style: solid;
    border-color: #fff;
    transform-origin: 25% 70%;
    transform: rotate(-45deg);
}

.expand .menu-container::after {
    transform: rotate(-225deg);
}
.menu-list {
    position: absolute;
    top: .2rem;
    left: 0;
    min-height: .6rem;
    padding: .1rem .1rem .2rem;
    background: rgba(0,0,0,.5);
}
.menu-item {
    width: 23%;
    margin: .1rem 1%;
    float: left;
    margin-top: .1rem;
    line-height: .6rem;
    background: #fff;
    text-align: center;
    border-radius: .3rem;
}

.selected{
    background: #3fc22b;
    color: #fff;
}
.menu-inner {
    display: block;
    margin: 0 .1rem;
    height: .6rem;
    color: #000;
    font-size: .24rem;
    line-height: .6rem;
    text-align: center;

}
.menu-selected {
    background: #3fc22b;
    color: #fff;
}
</style>
