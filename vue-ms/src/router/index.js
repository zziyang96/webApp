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
const admin = () => import('@/components/admin')
const useredit = () => import('@/components/useredit')
const useradd = () => import('@/components/useradd')
const materials = () => import('@/components/materials')
const materialslist = () => import('@/components/materialslist')
const materialsadd = () => import('@/components/materialsadd')
// const systemmain = () => import('@/components/systemmain')



Vue.use(Router)

const router = new Router({
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
          path: '',
          name: 'home',
          component: home
        },
        {
          path: '/userlist',
          name: 'userlist',
          component: userlist,
          children:[
            {
              path: 'useredit',
              name: 'useredit',
              component: useredit
            },]
        },
        {
          path: '/admin',
          name: 'admin',
          component: admin
        },
        {
          path: '/useredit',
          name: 'useredit',
          component: useredit
        },
        {
          path: '/useradd',
          name: 'useradd',
          component: useradd
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
        },
        // {
        //   path: '/systemmain',
        //   name: 'systemmain',
        //   component: systemmain
        // }
      ]
    },
    {
      path:'*',
      redirect: '/login'
    }
  ]
})

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  console.log(to.path)
  next()
})

export default router
