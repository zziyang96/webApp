import Vue from 'vue'
import Router from 'vue-router'

// import components
//import login from '@/components/login'
//import index from '@/components/index'

//异步加载
const login = () => import('@/components/login')
const index = () => import('@/components/index')
const home = () => import('@/components/home')
const userlist = () => import('@/components/userlist')
const useradd = () => import('@/components/useradd')
const passwordedit = () => import('@/components/passwordedit')
const materials = () => import('@/components/materials')
const materialsadd = () => import('@/components/materialsadd')
const materialslist = () => import('@/components/materialslist')



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path:'/main',
      name:'index',
      component: index,
      children:[
        {
          path: 'home',
          name: 'home',
          component: home
        },
        {
          path: '/userlist',
          name: 'userlist',
          component: userlist
        },
        {
          path: '/useradd',
          name: 'useradd',
          component: useradd
        },
        {
          path: '/passwordedit',
          name: 'passwordedit',
          component: passwordedit
        },
        {
          path: '/materials',
          name: 'materials',
          component: materials
        },
        {
          path: '/materialslist',
          name: 'materialslist',
          component: materialslist
        },
        {
          path: '/materialsadd',
          name: 'materialsadd',
          component: materialsadd
        }
      ]
    },
    {
      path:'*',
      redirect: '/login'
    }
  ]
})
