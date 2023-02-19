// 面试题 1

// setTimeout(function () {
//   console.log('setTimeout1')
//   new Promise(function (resolve) {
//     resolve()
//   }).then(function () {
//     new Promise(function (resolve) {
//       resolve()
//     }).then(function () {
//       console.log('then4')
//     })
//     console.log('then2')
//   })
// })

// new Promise(function (resolve) {
//   console.log('promise1')
//   resolve()
// }).then(function () {
//   console.log('then1')
// })

// setTimeout(function () {
//   console.log('setTimeout2')
// })

// console.log(2)

// queueMicrotask(() => {
//   console.log('queueMicrotask1')
// })

// new Promise(function (resolve) {
//   resolve()
// }).then(function () {
//   console.log('then3')
// })

/** log:
 * promise1
 * 2
 * then1
 * queueMicrotsk1
 * then3
 * setTimeout1
 * then2
 * then4
 * setTimeout2
 */

// 面试题 2

// async function bar() {
//   console.log('22222')
//   return new Promise(resolve => {
//     resolve()
//   })
// }

// async function foo() {
//   console.log('11111')
//   await bar()
//   console.log('33333')
// }

// foo()
// console.log('44444')

/** log:
 * 11111
 * 22222
 * 44444
 * 33333
 */

// async function async1() {
//   console.log('async1 start')
//   await async2()
//   console.log('async1 end')
// }

// async function async2() {
//   console.log('async2')
// }

// console.log('script start')

// setTimeout(function () {
//   console.log('setTimeout')
// }, 0)

// async1()

// new Promise(function (resolve) {
//   console.log('promise1')
//   resolve()
// }).then(function () {
//   console.log('promise2')
// })

// console.log('script end')

/** log:
 * script start
 * async1 start
 * async2
 * promise1
 * script end
 * async1 end
 * promise2
 * setTimeout
 */

// 面试题 3

// Promise.resolve()
//   .then(() => {
//     console.log(0)
//     // 1. 返回一个值
//     // return 4
//     // 2. 返回一个 thenable 对象
//     // return {
//     //   then: function (resolve) {
//     //     resolve(4)
//     //   }
//     // }
//     // 3. 返回一个 Promise
//     return Promise.resolve(4)
//   })
//   .then(res => {
//     console.log(res)
//   })

// Promise.resolve()
//   .then(() => {
//     console.log(1)
//   })
//   .then(() => {
//     console.log(2)
//   })
//   .then(() => {
//     console.log(3)
//   })
//   .then(() => {
//     console.log(5)
//   })
//   .then(() => {
//     console.log(6)
//   })

/** log:
 * // 1.
 * 0
 * 1
 * 4
 * 2
 * 3
 * 5
 * 6
 *
 * // 2.
 * 0
 * 1
 * 2
 * 4
 * 3
 * 5
 * 6
 *
 * // 3.
 * 0
 * 1
 * 2
 * 3
 * 4
 * 5
 * 6
 */

// // 面试题 4

async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}

async function async2() {
  console.log('async2')
}

console.log('script start')

setTimeout(function () {
  console.log('setTimeout0')
}, 0)

setTimeout(function () {
  console.log('setTimeout2')
}, 300)

setImmediate(() => console.log('setImmediate'))

process.nextTick(() => console.log('nextTick1'))

async1()

process.nextTick(() => console.log('nextTick2'))

new Promise(function (resolve) {
  console.log('promise1')
  resolve()
  console.log('promise2')
}).then(function () {
  console.log('promise3')
})

console.log('script end')

/** log:
 * script start
 * async1 start
 * async2
 * promise1
 * promise2
 * script end
 * nextTick1
 * nextTick2
 * async1 end
 * promise3
 * setTimeout0
 * setImmediate
 * setTimeout2
 */
