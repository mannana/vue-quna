<template>
    <div class="search-box">
        <input class="search-input" type="text" v-on:focus="handleFocus" v-on:blur="handleBlur" v-on:input="handleInput" v-bind:placeholder="defaultValue" v-bind:style="style" v-model="value">

        <div class="content">
            <div class="city-list">
                <a class="city-item" v-bind:key="item.id" v-for="item in matchCity">{{item.cityarea}}</a>
            </div>
        </div>

    </div>
</template>

<script>
    import resource from "vue-resource";
    import Vue from "vue";
    Vue.use(resource);
    export default {
        name: 'search',
        data () {
            return {
                defaultValue: "输入城市名或拼音",
                style:"text-align:center",
                inputCity:{},
                cityKey:"",
                value:"",
                cityData:{},
                cityNames:[]
            }
        },
        mounted: function() {
            let this_ =  this;
            this.$http.get('./static/city.json').then(response => {
                this_.cityData = response.body;
                let cityArr = [];
                let cityArrI = this_.cityData.data.inlandCity;
                for (var i = cityArrI.length-1; i >= 0; i--) {
                    cityArr = cityArrI[i][1].city;
                    for (var j = cityArr.length - 1; j >= 0; j--) {
                        this_.cityNames.push(cityArr[j]);
                    };
                };
            }, response => {


            });
        },
        methods: {
            handleBlur: function() {
                this.defaultValue = "输入城市名或拼音";
                this.style = "text-align:center";
            },
            handleFocus: function() {
                this.defaultValue = "";
                this.style = "text-align:left";
            },
            handleInput: function(e) {
                this.$emit("onInput", e);
            }
        },
        computed: {
            matchCity: function() {
                if(!this.cityNames[0]) {
                    return
                }
                if(!this.value) {
                    return
                }
                let inputCityArr = [];
                let keyWord = this.value;
                let indexSearch = true;
                let flag = false;
                for (let i = this.cityNames.length - 1; i >= 0; i--) {
                    indexSearch = this.cityNames[i].cityName.toLowerCase().indexOf(keyWord.toLowerCase()) != -1||this.cityNames[i].cityarea.indexOf(keyWord) != -1;
                    if( indexSearch ) {
                        flag = true;
                        inputCityArr.push(this.cityNames[i]);
                        this.inputCity = inputCityArr;
                    }
                };

                if(flag) {
                    return this.inputCity;
                }else {
                    this.inputCity = [{
                        "cityarea": "无搜索匹配城市",
                        "id": 1503535017823
                    }]
                    return this.inputCity;
                }
            }
        }
    }

</script>

<style scoped>


.search-box {
    width: 100%;
    height: .8rem;
    margin-top: .88rem;
    background: #00bcd4;
    font-size: .26rem;
}

.search-input {
    display: block;
    width: 90%;
    height: .66rem;
    margin:0 auto;
    padding-left: .1rem;
    text-align: center;
    border-radius: .05rem;
    border: 1px solid #00bcd4;
    color: #000;
}
.search-box .city-list .city-item {
    display: block;
    line-height: .76rem;
    padding-left: .2rem;
    font-size: .28rem;
    color: #212121;
    border-bottom: 1px solid #e4e5e6;
}
.search-box .content {
    background: #fff;
    margin-top: .2rem;
    z-index: 3;
    margin-top:.2rem;
}
</style>