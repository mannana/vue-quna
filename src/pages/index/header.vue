<template>
    <header class="header">
        <a class="header-left iconfont">&#xe615;</a>
        <div class="header-title">
            <span class="single-line">
                <i class="iconfont icon-search">&#xe632;</i>
                <span class="tip">输入城市/景点/游玩主题</span>
            </span>
        </div>
        <div class="header-right">
            <router-link to='/city'>
                <span class="nav-city">{{$store.state.newCity}}
                    <span class="triangle"></span>
                    <i class="downarrow"></i>
                </span>
            </router-link>
        </div>
    </header>
</template>

<script>
export default {
    data () {
        return {}
    }
}
</script>

<style scoped>
@import "../../assets/font/iconfont.css";
.header {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: .88rem;
    background: #00bcd4;
    text-align: center;
    color: #fff;
}
.iconfont {
    color: #e4e7ea;
}
.icon-search {
    margin-left: -0.54rem;
}
.header-left {
    float: left;
    display: block;
    width: .4rem;
    line-height: .88rem;
    padding-right: 0.28rem;
    padding-left: 0.12rem;
    color: #fff;
    font-size: .34rem;
    text-align: left;
    font-weight: bold;
}
.header-title {
    float: left;
    position: relative;
    width: 68%;
    height: .6rem;
    margin: .14rem 0;
    background: #fff;
    line-height: .6rem;
    border-radius: .06rem;
}
.header-right {
    position: absolute;
    top: 0;
    right: 0;
    line-height: .88rem;
    width: 1.5rem;
    text-align: center;
}
.triangle {
    content: "";
    width: 0;
    height: 0;
    border-width: .14rem;
    border-style: solid dashed dashed dashed;
    border-color: #fff transparent transparent transparent;
    position: absolute;
    top: 19px;
    right: .24rem;
}
.single-line {
    display: block;
}
.single-line .tip {
    height: .6rem;
    color: #e4e7ea;
}
.nav-city {
    overflow: hidden;
    display: inline-block;
    color: #fff;
    max-width: .72rem;
    padding-right: .16rem;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
