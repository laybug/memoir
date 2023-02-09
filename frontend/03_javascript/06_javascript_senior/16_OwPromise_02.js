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

  // 实例方法 catch：调用 catch ，其实内部实际调用的是 then(undefined, onRejected) 或 then(null, onRejected)
  catch(onRejected) {
    this.then(undefined, onRejected)
  }

  // 实例方法 finally
  finally(callback) {
    this.then(callback, callback)
  }

  // 类方法 resolve
  static resolve(value) {
    // 1. 当其为 Owpeomise 实例时，直接将其返回
    if (value instanceof OwPromise) {
      return value
    } else if (value instanceof Object && 'then' in value) {
      // 2. 当其是 thenable 时，进行状态移交
      return new OwPromise((resolve, reject) => {
        value.then(resolve, reject)
      })
    } else {
      // 3. 当其为值时，以值作为 resolve 方法的参数
      return new OwPromise((resolve, reject) => {
        resolve(value)
      })
    }
  }

  // 类方法 reject
  static reject(reason) {
    return new OwPromise((resolve, reject) => {
      reject(reason)
    })
  }

  // 类方法 all
  static all(promises) {
    return new OwPromise((resolve, reject) => {
      // 参数类型判断
      if (Array.isArray(promises)) {
        let result = []
        let count = 0
        // promises 为空
        if (promises.length === 0) {
          resolve(promises)
        } else {
          promises.forEach(item, index => {
            OwPromise.resolve(item).then(
              value => {
                result[index] = value
                // promises 全部为 resolve
                ++count === promises.length && resolve(result)
              },
              reason => {
                // promises 有一个 reject
                reject(reason)
              }
            )
          })
        }
      } else {
        reject(new TypeError('Argument is not iterable.'))
      }
    })
  }

  // 类方法 allsettled
  static allSettled(promises) {
    return new OwPromise((resolve, reject) => {
      if (Array.isArray(promises)) {
        let result = []
        let count = 0
        if (promises.length === 0) {
          resolve(promises)
        } else {
          promises.forEach((item, index) => {
            OwPromise.resolve(item).then(
              value => {
                result[index] = { status: 'fullfilled', value }
                ++count === promises.length && resolve(result)
              },
              reason => {
                result[index] = { status: 'rejected', reason }
                ++count === promises.length && resolve(result)
              }
            )
          })
        }
      } else {
        reject(new TypeError('Argument is not iterable.'))
      }
    })
  }

  // any
  static any(promises) {
    return new OwPromise((resolve, reject) => {
      if (Array.isArray(promises)) {
        let errors = []
        let count = 0
        if (promises.length === 0) {
          reject(new Error('All promises were rejected.'))
        } else {
          promises.forEach(item => {
            OwPromise.resolve(item).then(
              // promises 有一个 resolve
              value => {
                resolve(value)
              },
              reason => {
                // promises 均为 rejected
                errors[count] = reason
                ++count === promises.length && reject(new AggregateError(errors))
              }
            )
          })
        }
      } else {
        reject(new TypeError('Argument is not iterable.'))
      }
    })
  }

  // 类方法 race
  static race(promises) {
    return new OwPromise((resolve, reject) => {
      if (Array.isArray(promises)) {
        // 若 promises 为空时，返回的 OwPromise 实例的状态永远为 pending
        if (promises.length > 0) {
          promises.forEach(item => {
            OwPromise.resolve(item).then(resolve, reject)
          })
        }
      } else {
        reject(new TypeError('Argument is not iterable.'))
      }
    })
  }
}

let owPromise1 = new OwPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('owPromise1')
  }, 200)
})
let owPromise2 = new OwPromise((resolve, reject) => {
  setTimeout(() => {
    reject('owPromise2')
  }, 100)
})
let owPromise3 = new OwPromise((resolve, reject) => {
  setTimeout(() => {
    reject('owPromise3')
  }, 300)
})

let promises = [owPromise1, owPromise2, owPromise3]

OwPromise.any(promises)
  .then(res => console.log(`any --> res: ${res}`))
  .catch(err => console.log(`any --> err: ${err.errors}`))

OwPromise.allSettled(promises).then(res => {
  res.forEach(item => {
    console.log(item)
  })
})

OwPromise.race(promises)
  .then(res => console.log(`race --> res: ${res}`))
  .catch(err => console.log(`race --> err: ${err}`))
