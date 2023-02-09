// new Promise 时需传入 executor : (reslove, reject) => {...}

class OwPromise {
  // 标记 OwPromise 的状态
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'

  constructor(executor) {
    // 在开始执行 executor 前，此 OwPromise 实例的状态一直为 ”pending“
    this.OwPromiseState = OwPromise.PENDING
    // 保存在执行 resolve 或 reject 时传入的参数，后续传到 onFulfilled 或 onRejected 中
    this.OwPromiseResult = null
    // 当 this.OwPromiseState 为 “pending” 时，将 onFulfilled 保存起来，待到执行 resolve 时再取出进行执行
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    // 处于 “pending” 状态时若出现错误，则调用 reject
    try {
      executor(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
      this.reject(error)
    }
  }

  // 实例方法 resolve：改变当前 owPromise 实例的状态（pending -> fulfilled）
  resolve(result) {
    if (this.OwPromiseState === OwPromise.PENDING) {
      this.OwPromiseState = OwPromise.FULFILLED
      this.OwPromiseResult = result
      this.onFulfilledCallbacks.forEach(callback => callback())
    }
  }

  // 实例方法 reject：pending -> fulfilled
  reject(reason) {
    if (this.OwPromiseState === OwPromise.PENDING) {
      this.OwPromiseState = OwPromise.REJECTED
      this.OwPromiseResult = reason
      this.onRejectedCallbacks.forEach(callback => callback())
    }
  }

  // 实例方法：接收两个回调函数根据 this.OwromiseState 来判断执行哪一个
  then(onFulfilled, onRejected) {
    // then 方法需要返回一个新的 OwPromise 实例
    return new OwPromise((resolve, reject) => {
      // 当执行 onFulfill 时，若传入的参数不是函数，则直接返回 resolve 传入的值
      onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
      // 当执行 onReject 时，若传入的参数不是函数，则抛出 reject 传入的值
      onRejected =
        typeof onRejected === 'function'
          ? onRejected
          : reason => {
              throw reason
            }
      // 当执行 resolve 或 reject 前就执行了 then 方法，此时 OwPromise 实例的状态还未确定，
      // 需要将回调函数先保存起来，当 OwPromise 实例的状态确定后再执行对应的回调函数
      if (this.OwPromiseState === OwPromise.FULFILLED) {
        // 当前 OwPromise 实例状态为 “fulfilled” 时调用 onFulfilled
        try {
          resolve(onFulfilled(this.OwPromiseResult))
        } catch (error) {
          reject(error)
        }
      } else if (this.OwPromiseState === OwPromise.REJECTED) {
        // 当前 OwPromise 实例状态为 “rejected” 时调用 onRejected
        try {
          resolve(onRejected(this.OwPromiseResult))
        } catch (error) {
          reject(error)
        }
      } else if (this.OwPromiseState === OwPromise.PENDING) {
        this.onFulfilledCallbacks.push(() => {
          try {
            resolve(onFulfilled(this.OwPromiseResult))
          } catch (error) {
            reject(error)
          }
        })
        this.onRejectedCallbacks.push(() => {
          try {
            resolve(onRejected(this.OwPromiseResult))
          } catch (error) {
            reject(error)
          }
        })
      }
    })
  }
}

const owPromise = new OwPromise((resolve, reject) => {
  // 异步测试
  // setTimeout(() => {
  // resolve('resolved')
  reject('rejected')
  // }, 1000)
  // resolve('resolved')
  // reject('rejected')
})

// // 进行链式调用测试
// owPromise
//   .then(
//     res => {
//       console.log('res1:', res)
//       return 'iris'
//     },
//     err => {
//       console.log('err1:', err)
//       return 'shadow'
//     }
//   )
//   .then(
//     res => console.log('res1_2:', res),
//     err => console.log('err1_2:', err)
//   )

// // 进行抛错捕获测试
// owPromise
//   .then(
//     res => {
//       console.log('res2:', res)
//       throw Error('出错啦')
//     },
//     err => {
//       console.log('err2:', err)
//     }
//   )
//   .then(
//     res => console.log('res2_2:', res),
//     err => console.log('err2_2:', err)
//   )

// // 进行 then 方法多次调用测试
// owPromise.then(
//   res => {
//     console.log('res3:', res)
//   },
//   err => {
//     console.log('err3:', err)
//   }
// )

// 参数检测：then方法中传入的参数是否为函数
// owPromise
//   .then([], err => {
//     console.log('err', err)
//   })
//   .then(res => console.log(res))

owPromise
  .then(res => {
    console.log('err', res)
  }, 'noOnRejectedCallback')
  .then([], err => console.log(err))

console.log('++++++++++++')
