<template>
    <header class="header">
        <span class="header-left iconfont" @click="handleClickBack">&#xe720;</span>
        <div class="header-city">
            <button  @click="handleClickDomestic" :class="{'header-city-active': isDomestic}">国内</button><button @click="handleClickAbroad" :class="{'header-city-active': !isDomestic}">海外</button>
        </div>
    </header>
</template>

<script>
    export default {
        data () {
          return {
            isDomestic:false
          }
        },
        methods:{
            handleClickDomestic:function() {
               this.isDomestic = false;
               this.$store.commit('switchData',false)
            },
            handleClickAbroad:function() {
                this.isDomestic = true
                this.$store.commit('switchData',true)
            },
            handleClickBack() {
                window.history.back()
            }
        }        
    }
</script>

<style scoped>
    @import "../../assets/font/iconfont.css";
    .header {
        position: fixed;
        z-index: 5;
        top: 0;
        left: 0;
        width: 100%;
        height: .88rem;
        overflow: hidden;
        text-align: center;
        background: #00bcd4;
        color: #fff;
    }
    .header-left {
        display: block;
        float: left;
        width: .4rem;
        padding: 0 .2rem;
        line-height: .88rem;    
        text-align: left;
        color: #fff;
        font-size: .36rem;
    }
    .header-city{
        width: 4.04rem;
        height: .6rem;
        display: inline-block;
        text-align: center;
        margin-top: .16rem;
        border: 1px solid #fff;
        border-radius: .06rem;
    }
    button{
        border: none;
        width: 50%;
        height: 100%;
        background: #fff;
        color: #00bcd4;
        line-height: .6rem;
    }
    button:nth-child(1){
        border-radius: .06rem 0 0 .06rem;
    }
    button:nth-child(2){
        border-radius: 0 .06rem .06rem 0;
    }
    .header-city-active{
        background: #00bcd4;
        color: #fff;
    }


</style>
