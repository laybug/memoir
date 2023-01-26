// // ES7 // //

// array.includes()

// const arr = ['shadow', 1, 'male']

// const res = arr.includes('shadow')

// console.log(res)

// // 与 indexOf 的区别
// const names = ['杜籽藤', '范统', 2, undefined, NaN]

// const res1 = names.indexOf(NaN)
// console.log(res1) // -1

// const res2 = names.includes(NaN)
// console.log(res2) // true

// // ES8 // //
// // Object values
// const info = {
//   name: 'shdadow',
//   age: 1,
//   gender: 'male'
// }

// const values = Object.values(info)
// console.log(values) // [('shdadow', 1, 'male')]

// Object entries
// const info = { name: 'shdadow', age: 1, gender: 'male' }

// const entries = Object.entries(info)
// console.log(entries) // [ [ 'name', 'shdadow' ], [ 'age', 1 ], [ 'gender', 'male' ] ]

// Object descriptor
// const info = {
//   name: 'shdadow',
//   age: 1,
//   gender: 'male'
// }

// console.log(Object.getOwnPropertyDescriptor(info, 'name'))
// // {
// //   value: 'shdadow',
// //   writable: true,
// //   enumerable: true,
// //   configurable: true
// // }

// String Padding
// const bankCard = '999_999_999'
// const veil1 = bankCard.slice(-3)
// const veil2 = bankCard.slice(0, 3)
// const hide1 = veil1.padStart(9, '*')
// const hide2 = veil2.padEnd(9, '*')
// console.log(hide1) // ******999
// console.log(hide2) //999******

// trailing commas
// function foo(param1, param2,) {
//   console.log('最后一个参数的结尾可跟随 “,”')
// }

// foo(1, 2,)

// // ES10 // ///

// flat flatMap
// const names = ['shadow', 'fariy', ['杜籽藤', '范统'], '夏建仁', ['二哈', ['可乐', '妞妞']]]
// const oneDemensional1 = names.flat(2)

// console.log(oneDemensional1) // ['shadow', 'fariy','杜籽藤', '范统','夏建仁', '二哈','可乐', '妞妞']

// const introduction = ['who im i ?', "i don't known."]
// const oneDemensional2 = introduction.flatMap(item => item.split(' '))
// const oneDemensional3 = introduction.map(item => item.split(' '))

// console.log(oneDemensional2) // [ 'who', 'im', 'i', '?', 'i', "don't", 'known.' ]
// console.log(oneDemensional3) // [ [ 'who', 'im', 'i', '?' ], [ 'i', "don't", 'known.' ] ]

// Object fromEntries
// 将一个 entries （以二元数组组成的数组）转化为一个对象
// const queryString = 'name=shadow&age=1&gender=male'
// const entries = new URLSearchParams(queryString)
// console.log(entries) // URLSearchParams { 'name' => 'shadow', 'age' => '1', 'gender' => 'male' }

// const queryObj = Object.fromEntries(entries)
// console.log(queryObj) // { name: 'shadow', age: '1', gender: 'male' }

// const symbol = Symbol('我是描述')
// console.log(symbol.description) // 我是描述

// // ES11 // //

// BigInt
// console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991

// const bigInt1 = BigInt(1218)
// const bigInt2 = 207n

// const res1 = bigInt1 + bigInt2
// // const res2 = bigInt1 + 12 // // TypeError: Cannot mix BigInt and other types, use explicit conversions
// const res2 = bigInt1 + BigInt(12)

// console.log(res1) // 1425n
// console.log(res2) // 1230n

// Nullish Coalescing Operator
// const name1 = undefined
// const name2 = 0

// const name11 = name1 || 'shadow'
// const name12 = name2 || 'shadow'

// const name21 = name1 ?? 'shadow'
// const name22 = name2 ?? 'shadow'

// console.log(name11, name12) // shadow shadow
// console.log(name21, name22) // shadow 0

// Optional Chaining
// const info = {
//   name: 'shadow',
//   friends: {
//     name: '杜籽藤',
//     girlfriend: {
//       name: '杜琪衍'
//     }
//   }
// }

// const name1 = info?.friends?.girlfriend?.name

// console.log(name1) // 杜琪衍

// delete info?.friends?.girlfriend

// const name2 = info?.friends?.girlfriend?.name

// // 当某个属性不存在时，返回 undefined 并跳过属性的获取
// console.log(name2) // undefined

// globalThis

// console.log(globalThis === global) // true
// console.log(globalThis === window) // true

// for...in 标准化

// 在未进行标准化时，不同的浏览器对 for...in 的实现不一致，循环遍历所得到的可能是值，也可能是下标。
// 进行标准化后，for...in 循环遍历得到的是值。

// const info = {
//   name: 'shdadow',
//   age: 1,
//   gender: 'male'
// }

// for (item in info) {
//   console.log(item)
// }

// // name
// // age
// // gender

// // ES12 // //

// finalizationRegistry

// 当监听某个对象被销毁时触发回调函数。

// const finalizationRegistry = new FinalizationRegistry(value => {
//   console.log(`${value} is destroyed.`)
// })

// let info = {
//   name: 'shadow',
//   age: 1
// }

// finalizationRegistry.register(info, 'info')

// info = null

// WeakRef

// 对某个对使用弱引用。

// const finalizationRegistry = new FinalizationRegistry(alias => {
//   console.log(`${alias} is destroyed.`)
// })

// let info = {
//   name: 'shadow',
//   age: 1
// }

// finalizationRegistry.register(info, 'info')

// const profile = new WeakRef(info)

// // 使用 deref 获取绑定的 target
// console.log(profile.deref().name)

// info = null

// // 绑定的 target 回收后返回 undefined
// setTimeout(() => {
//   console.log(profile.deref().name) // Uncaught TypeError: Cannot read properties of undefined (reading 'name')
// }, 10000)

// Logical Assignment Operator

// // ||=

// let resume = undefined

// resume ||= 'shadow'

// console.log(resume) // shadow

// // &&=
// let info = {
//   name: 'shadow'
// }

// info &&= info.name

// console.log(info) // shadow

// // ??=
// let summary = 0

// summary ??= 'shadow'

// console.log(summary) // 0

// Numeric Separater

// const num = 121_812_121_812

// console.log(num) //121812121812

// String replaceAll
let str = '今天天气好晴朗！处处好风光呀好风光！'

let replaceAllStr = str.replaceAll('好', 'nice')

console.log(replaceAllStr) // 今天天气nice晴朗！处处nice风光呀nice风光！
