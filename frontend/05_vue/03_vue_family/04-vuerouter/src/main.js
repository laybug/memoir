import Vue from 'vue'
import App from './App'
// 若导入的文件是文件夹中的 index 页面，则路径只需写到文件夹即可，“index” 可省略
import router from './router/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App),
})

// 后端路由和前端渲染
// 涉及到网页的发展阶段 1. 后端路由渲染 2. 前后端分离 3. 前端路由（SPA，simple page web application）

// 1. 后端路由
// 网站全部由一个人负责，在客户端请求 URL 时，由后端处理 URL 和页面的映射关系。借助 jsp（java server page）、PHP等技术 在服务端就已经将页面
// 和数据库中的数据结合处理完成，然后将处理好的页面发送到客户端

// 2. 前后端分离
// 随着 ajax 的出现，请求数据可由其负责。客户端请求的 URL 和对应的页面在静态资源服务器上完成，后端专注于提供 API 的服务器（一套 API 即可适用于
// 网页、app 等）

// 3. 单页面富应用
// 网页只有一个页面（html + css + js），客户端请求 URL 时，将整套资源从静态资源服务器上请求下来。在进行页面跳转时，不再向服务器请求，而是借助前
// 端路由进行 URL 和对应页面之间的映射关系
