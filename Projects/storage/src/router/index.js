import Vue from 'vue'
import Router from 'vue-router'

//引入组件
import login from '@/components/login'


//使用路由
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})
