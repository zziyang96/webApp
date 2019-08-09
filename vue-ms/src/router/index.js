import Vue from 'vue'
import Router from 'vue-router'


//异步加载
const login = () => import('@/components/login')
const index = () => import('@/components/index')
const home = () => import('@/components/home')
const userlist = () => import('@/components/userlist')
const admin = () => import('@/components/admin')
const useredit = () => import('@/components/useredit')
const useradd = () => import('@/components/useradd')
const categories = () => import('@/components/categories')
const materialslist = () => import('@/components/materialslist')
const materialsadd = () => import('@/components/materialsadd')
const materialsout = () => import('@/components/materialsout')
const materialsmanage = () => import('@/components/materialsmanage')

const systemmain = () => import('@/components/systemmain')

const register = () => import('@/components/register')
const register_success = () => import('@/components/register_success')



Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/register_success',
      name: 'register_success',
      component: register_success,
    },
    {
      path:'/index',
      name:'index',
      component: index,
      meta: { 
        requireAuth: true
      },
      children:[
        {
          path: '',
          name: 'home',
          component: home,
          meta: { 
            requireAuth: true
          },
        },
        {
          path: '/userlist',
          name: 'userlist',
          component: (resolve) => {
            require(['../components/userlist'], resolve)
          },
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
          component: admin,
          meta: { 
            requireAuth: true
          },
        },
        {
          path: '/useredit',
          name: 'useredit',
          component: useredit,
          meta: { 
            requireAuth: true
          },
        },
        {
          path: '/useradd',
          name: 'useradd',
          component: useradd,
          meta: { 
            requireAuth: true
          },
        },
        {
          path: '/categories',
          name: 'categories',
          component: categories,
          meta: { 
            requireAuth: true
          },
        },
        {
          path: '/materialslist',
          name: 'materialslist',
          component: materialslist,
          meta: { 
            requireAuth: true
          },
          children:[
            {
              path: 'materialsadd',
              name: 'materialsadd',
              component: materialsadd
            },]
        },
        {
          path: '/materialsmanage',
          name: 'materialsmanage',
          component: materialsmanage,
          meta: { 
            requireAuth: true
          },
          children:[
            {
              path: 'materialsadd',
              name: 'materialsadd',
              component: materialsadd
            },]
        },
        {
          path: '/materialsadd',
          name: 'materialsadd',
          component: materialsadd,
          meta: { 
            requireAuth: true
          },
        },
        {
          path: '/materialsout',
          name: 'materialsout',
          component: materialsout,
          meta: { 
            requireAuth: true
          },
        },
        {
          path: '/systemmain',
          name: 'systemmain',
          component: systemmain,
          meta: { 
            requireAuth: true
          },
        }
      ]
    },
    {
      path:'*',
      redirect: '/login'
    }
  ]
})

//  判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) {
      // 判断是否登录
    if (localStorage.getItem('userinfo')) {
      next()
    } else {
      next({
        // 无授权，跳转登录界面
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router
