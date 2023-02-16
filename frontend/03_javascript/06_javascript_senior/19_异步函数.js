/***** 异步函数的推导 *****/

// // 网络请求
// function request(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(name)
//     }, 1000)
//   })
// }

// // 需求：将前一个的请求结果作为下一个请求的 url

// // 方案一：
// request('《完美世界》').then(res => {
//   request(res + '-柳神').then(res => {
//     request(res + '-小塔').then(res => {
//       console.log(res + '-石昊')
//     })
//   })
// })

// // 方案二
// request('《完美世界》')
//   .then(res => {
//     return request(res + '-柳神')
//   })
//   .then(res => {
//     return request(res + '-小塔')
//   })
//   .then(res => {
//     console.log(res + '-石昊')
//   })

// // 方案三
// function* generatorRequst() {
//   const name1 = yield request('《完美世界》')
//   const name2 = yield request(name1 + '-柳神')
//   const res = yield request(name2 + '-小塔')
//   console.log(res + '-石昊')
// }

// // const asyncGenerator = asyncRequst()
// // asyncGenerator.next().value.then(res => {
// //   asyncGenerator.next(res).value.then(res => {
// //     asyncGenerator.next(res).value.then(res => {
// //       asyncGenerator.next(res)
// //     })
// //   })
// // })

// // 异步请求自动调用
// function autoRequst(genFn) {
//   const generator = genFn()
//   function autoExe(res) {
//     let result = generator.next(res)
//     if (result.done) {
//       return
//     } else {
//       result.value.then(res => {
//         autoExe(res)
//       })
//     }
//   }
//   autoExe()
// }

// autoRequst(generatorRequst)

// // 方案四
// async function asyncRequest() {
//   const res1 = await request('《完美世界》')
//   const res2 = await request(res1 + '-柳神')
//   const res3 = await request(res2 + '-小塔')
//   console.log(res3 + '-石昊')
// }

// asyncRequest()

/***** 异步函数的执行流程 *****/
// console.log('异步函数准备～')

// async function foo() {
//   console.log('异步函数来啦！')
// }

// foo()

// console.log('异步函数结束！')

/** log:
 * 异步函数准备～
 * 异步函数来啦！
 * 异步函数结束！
 */

/***** 异步函数的不同 *****/
//返回值
// async function foo() {
//   return '我是Promise~'
// }

// const res = foo()

// console.log(res instanceof Promise) // true

// 抛出异常
// 异步函数中抛出的异常会作为 Promise 中 reject 的值

async function foo() {
  throw new Error('error message......')
}

foo()
  .then(res => console.log(res))
  .catch(err => console.log(err))
// log: Error: error message......
