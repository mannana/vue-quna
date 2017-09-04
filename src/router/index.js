import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import City from '@/pages/city/index'
import Search from '@/pages/search/index'
import explain from '@/pages/explain/index'
import beforSearch from '@/pages/search/before-index'
import TripList from '@/pages/tripList/index'
import SummerSale from '@/pages/summerSale/index'
import Seckill from '@/pages/seckill/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Index',
        component: Index
    }, {
        path: '/city',
        name: 'city',
        component: City
    }, {
        path: '/search/:id',
        name: 'Search',
        component: Search
    },{
    	path:'/explain',
    	name:'explain',
    	component: explain
    },{
        path:'/beforeSearch',
        name:'beforeSearch',
        component:beforSearch
    },{
        path: '/seckill',
        name: 'Seckill',
        component: Seckill
    },{
	    path: '/tripList',
	    name: 'TripList',
	    component: TripList
    },{
	    path: '/summerSale',
	    name: 'SummerSale',
	    component: SummerSale
    }
  ]
})
