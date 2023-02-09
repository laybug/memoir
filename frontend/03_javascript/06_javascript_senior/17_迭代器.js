/***** 迭代器 *****/

// 实现一个迭代器
// function createIterator(iterableObj) {
//   let index = 0
//   return {
//     next() {
//       if (index < iterableObj.length) {
//         return { done: false, value: iterableObj[index++] }
//       } else {
//         return { done: true, value: undefined }
//       }
//     }
//   }
// }

// let arr = ['妞妞', '可乐', '冬瓜']

// const iterator = createIterator(arr)

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// /**
//  * { done: false, value: '妞妞' }
//  * { done: false, value: '可乐' }
//  * { done: false, value: '冬瓜' }
//  * { done: true, value: undefined }
//  */

// 可迭代对象
// let iterableObj = {
//   friends: ['杜籽疼', '范建', '夏建仁', '秦寿生'],
//   [Symbol.iterator]() {
//     let index = 0
//     return {
//       next: () => {
//         if (index < this.friends.length) {
//           return { done: false, value: this.friends[index++] }
//         } else {
//           return { done: true, value: undefined }
//         }
//       }
//     }
//   }
// }

// let friends = ['姬从良', ...iterableObj]
// console.log(friends) // log: [ '姬从良', '杜籽疼', '范建', '夏建仁', '秦寿生' ]

// for (const item of iterableObj) {
//   console.log(item)
// }
// /** log:
//  * 杜籽疼
//  * 范建
//  * 夏建仁
//  * 秦寿生
//  */

// let [, name1, name2] = iterableObj

// console.log(name1, name2) // log: 范建 夏建仁

// let obj = { name: 'shadow', age: 1 }

// // 此处的对象操作并不时因为对象具有迭代器，而是在 ES9 中对对象新增的特性
// let { name, age } = obj
// let obj1 = { ...obj, gender: 'male' }

// console.log(name, age) // log: shadow 1
// console.log(obj1) // { name: 'shadow', age: 1, gender: 'male' }

// // 自定义可迭代类
// class Willow {
//   constructor(name, address, friends) {
//     this.name = name
//     this.address = address
//     this.friends = friends
//   }

//   push(friend) {
//     this.friends.push(friend)
//   }

//   [Symbol.iterator]() {
//     let index = 0
//     return {
//       next: () => {
//         if (index < this.friends.length) {
//           return { done: false, value: this.friends[index++] }
//         } else {
//           return { done: true, value: undefined }
//         }
//       },
//       return: () => {
//         console.log('迭代器终止啦。。。')
//         return { done: true, value: undefined }
//       }
//     }
//   }
// }

// let willow = new Willow('柳神', '异界', ['石昊', '小塔', '毛球', '小红'])

// for (const item of willow) {
//   console.log(item)
// }

// /** log:
//  * 石昊
//  * 小塔
//  * 毛球
//  * 小红
//  */

// for (const item of willow) {
//   if (item === '小塔') break // log: 迭代器终止啦。。。
// }
