import axios from 'axios'

// 封装方式一
// export function request(config, success, failure) {
//   // 创建 axios 实例
//   const instance = axios.create({
//     baseURL: 'http://152.136.185.210:7878/api/hy66',
//     timeout: 5000
//   })

//   // 发送请求
//   // instance(config)
//   //   .then(res => {
//   //     success(res)
//   //   })
//   //   .catch(err => failure(err))
// }

// 封装方式二
// export function request(config) {
//   const instance = axios.create({
//     baseURL: 'http://152.136.185.210:7878/api/hy66',
//     timeout: 5000
//   })

//   return new Promise((resolve, reject) => {
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => reject(err))
//   })
// }

// 封装方式三
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })

  // 拦截器
  // 请求时拦截
  instance.interceptors.request.use(
    config => {
      // console.log(config)
      // 拦截时可进行的操作
      // 1. 检查 config 是否符合服务器要求或添加一些 config 信息
      // 2. 在发送前，在界面展示一个等待的图标
      // 3. 某些网络请求（登录），需要携带一些特殊信息（如 token）
      // 拦截操作完成后需要把请求配置返回
      return config
    },
    err => {
      // console.log(err)
      // 将错误信息传到下一级
      return Promise.reject(err)
    }
  )

  // 响应时拦截
  instance.interceptors.response.use(
    res => {
      // 响应拦截的操作
      // console.log(res)
      return res.data
    },
    err => {
      console.log(err)
      // 将错误信息传到下一级
      return Promise.reject(err)
    }
  )

  return instance(config)
}
