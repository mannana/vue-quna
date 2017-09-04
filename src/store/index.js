import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state: { 
		"city": "南京",
		"number": "1",
		"newCity": (localStorage.length ? localStorage.newCity : "北京"),
    	"flag": false,
    	"inputSearch": ''
	},
	getters: {
		"perfectCity": function(state) {
			return state.city + "^<>^"
		}
	},
	mutations: { 
		changeCity: function(state, payload){
			state.city = payload.city;
			this.$store.commit("changeCity");
		},
		changePageNum:function(state, payload) {
			state.number =payload.pageNum;
		},
		changeCurrentCity: function (state, newLoad) {
      		state.newCity = newLoad.city;
   		},
	    switchData: function (state, flag) {
	     	state.flag = flag;
	    },
	    changeInputSearch: function (state, value) {
	     	state.inputSearch = value;
	    }
	}
})
