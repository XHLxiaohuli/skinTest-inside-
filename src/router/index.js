import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/login'
import commontop from '@/components/commontop'
import huiyuan from '@/components/huiyuan'
import jiance from '@/components/jiance'
import test from  '@/components/test'
import oneWayAnalysisPage from '@/components/oneWayAnalysisPage'
import newProductRecommenderPage from '@/components/newProductRecommenderPage'
import yuanbenfenxibaogao from '@/components/jiuban/index'
import forgetThePassword from '@/components/forgetThePassword'



Vue.use(Router)
Vue.use(login)
Vue.use(huiyuan)
Vue.use(jiance)
Vue.use(test)
Vue.use(oneWayAnalysisPage)
Vue.use(newProductRecommenderPage)
Vue.use(yuanbenfenxibaogao)
Vue.use(forgetThePassword)




export default new Router({
  //mode:  history,
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
      //path: '/', redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/commontop',
      name: 'commontop',
      component: commontop
    }
    ,
    {
      path: '/huiyuan',
      name: 'huiyuan',
      component: huiyuan
    },
    {
      path: '/jiance',
      name: 'jiance',
      component: jiance
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/oneWayAnalysisPage',
      name: 'oneWayAnalysisPage',
      component: oneWayAnalysisPage
    },
    {
      path: '/newProductRecommenderPage',
      name: 'newProductRecommenderPage',
      component: newProductRecommenderPage
    },
    {
      path: '/yuanbenfenxibaogao',
      name: 'yuanbenfenxibaogao',
      component: yuanbenfenxibaogao
    },
    {
      path: '/forgetThePassword',
      name: 'forgetThePassword',
      component: forgetThePassword
    }


  ]
})
