// 1. 导入 Vue 和 Router
import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User'

// 路由懒加载，可实现访问对应路由时才去请求对应的组件
// 打包生成的 js 文件说明
// 1. vender.js 第三方的框架、插件等相关
// 2. manifest.js 管理各个文件间的依赖和底层支撑相关
// 3. app.js 业务代码（自己的代码）。在业务逻辑繁杂时，使用懒加载的方式，即可将业务代码分开打包（一个路由对于一个 js 文件）

const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

const About = () => import('../components/About')
const User = () => import('../components/User')

// 2. 使用 Router
Vue.use(Router)

// 3. 配置 Router
const routes = [
  // 配置默认路由
  {
    path: '/',
    name: 'default',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      // {
      // 	path: '',
      // 	name: 'homeDefault',
      // 	redirect: 'news'
      // },
      {
        path: 'news',
        name: 'homeNews',
        component: HomeNews
      },
      {
        path: 'message',
        name: 'homeMessage',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:userId',
    name: 'user',
    component: User,
    meta: {
      title: '用户'
    }
  }
]

const router = new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

//全局导航守卫
// 当页面跳转时进行检测，进而完成对应的操作
// 页面跳转前的操作
router.beforeEach((to, from, next) => {
  // to 即为每个 route 对象
  document.title = to.matched[0].meta.title
  // console.log(to)
  // console.log('前置守卫')
  next()
})

// 页面跳转后的操作
router.afterEach((to, from) => {
  // console.log('后置钩子')
})

export default router
