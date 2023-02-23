/***** json *****/
// let willow = {
//   name: 'willow',
//   age: 'infinity',
//   friends: ['石昊', '小塔'],
//   skill() {
//     console.log('诸位，请回上界！')
//   }
//   // 若存在 toJSON 方法，会将 toJSON 方法的返回值作为序列化的值
//   // toJSON: function () {
//   //   return '镇压！'
//   // }
// }

// let willowStringify = JSON.stringify(
//   willow,
//   (key, value) => {
//     if (key == 'friends') {
//       return ['石昊', '小塔', '小红']
//     }
//     return value
//   },
//   2
// )

// localStorage.setItem('willow', willowStringify)

// let willowParse = JSON.parse(willowStringify, (key, value) => {
//   if (key === 'friends') {
//     return ['石昊', '小塔']
//   }
//   return value
// })

// console.log(willowParse)

/***** storage *****/
class OwCache {
  constructor(isLoacl = true) {
    this.storage = isLoacl ? localStorage : sessionStorage
  }

  setItem(key, value) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  getItem(key) {
    return JSON.parse(this.storage.getItem(key))
  }

  removeItem(key) {
    this.storage.removeItem(key)
  }

  key(index) {
    return this.storage.key(index)
  }

  clear() {
    this.storage.clear()
  }

  length() {
    return this.storage.length
  }
}

const localCache = new OwCache()
const sessionCahe = new OwCache(false)

localCache.setItem('shadow', { name: 'shadow', age: 1 })
console.log(localCache.getItem('shadow'))
// localCache.removeItem('shadow')
console.log(localCache.key(0))
console.log(localCache.length())
localCache.clear()
