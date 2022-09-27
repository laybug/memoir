import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// axios 基本使用
// axios({
//   url: 'http://152.136.185.210:7878/api/hy66/home/multidata'
// }).then(res => {
//   console.log(res)
// })

// axios({
//   url: 'http://152.136.185.210:7878/api/hy66/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })

// axios 的 all 方法发送并发请求
// axios
//   .all([
//     axios({
//       url: 'http://152.136.185.210:7878/api/hy66/home/multidata'
//     }),
//     axios({
//       url: 'http://152.136.185.210:7878/api/hy66/home/data',
//       params: {
//         type: 'pop',
//         page: 1
//       }
//     })
//   ])
//   .then(
//     axios.spread((res1, res2) => {
//       console.log(res1, res2)
//     })
//   )

// axios 的全局配置
// axios.defaults.baseURL = 'http://152.136.185.210:7878/api/hy66'
// axios.defaults.timeout = 5000

// axios({
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })

// 调用网络请求
import { request } from './network/request'

//封装方式一的调用方式
// request(
//   {
//     url: '/home/multidata'
//   },
//   res => {
//     console.log(res)
//   },
//   err => {
//     console.log(err)
//   }
// )

// 封装方式二、三的调用方式
request({
  url: '/home/multidataaa'
})
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
