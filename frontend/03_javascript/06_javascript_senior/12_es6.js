// // 对象字面量增强 // //
// var nick = 'shadow'

// var obj = {
//   nick,
//   introduce() {
//     console.log('My name is ' + nick)
//   },
//   [nick + '0']() {
//     console.log('My nick is ...')
//   }
// }

// obj.introduce()

// obj[nick + '0']() // My nick is ...

// // 解构 // //

// 数组解构
// var arr = ['shadow', 'iris', 'fariy', 'blue']

// var [el1, el2, el3, el4] = arr
// console.log(el1, el2, el3, el4) // shadow iris fariy blue

// // 只进行部分值接收
// var [, el1, , el2] = arr
// console.log(el1, el2) // iris blue

// // 对超出的变量赋默认值
// var [el1, el2, el3, el4, el5 = 'bingo'] = arr
// console.log(el1, el2, el3, el4, el5) // shadow iris fariy blue bingo

// // 解构一部分，打包另一部分
// var [el, ...otherArr] = arr
// console.log(el, otherArr) // shadow [ 'iris', 'fariy', 'blue' ]

// // 对象解构 // //
// var obj = { name: 'shadow', age: 22, gender: 'male' }

// var { name, age, gender } = obj
// console.log(name, age, gender) // shadow 22 male

// var { name, age } = obj
// console.log(name, age) // shadow 22

// var { name, age, gender, height = 168 } = obj
// console.log(name, age, gender, height) // shadow 22 male 168

// var { name, ...info } = obj
// console.log(name, info) // shadow { age: 22, gender: 'male' }

// // 块级作用域 // //

// 'use strict' // 使用严格模式时，function 不能突破块级作用域
// {
//   let nick = 'shadow'
//   function introduce() {
//     console.log('hello')
//   }
// }
// console.log(nick) // ReferenceError: nick is not defined
// introduce()

// // 块级作用域和 const // //

// // 此处的变量声明不可使用 const ，因为 i++ 语句发生了变量的修改
// let names = ['杜籽藤', '范统', '夏建仁']
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i])
// }

// // 适用于 const 的 for 循环
// for (const name of names) {
//   console.log(name)
// }

// // 模板字符串 // //
// // 模板字符串内可嵌入表达式：变量的引用，简单的运算，函数的调用

// let name = 'shadow'

// function getAge() {
//   return 12
// }

// let profile = `My name is ${name}, i'm ${getAge() * 2} years old.`

// console.log(profile)

// //标签模板字符串 // //
// // 应用于以另一种方式对函数进行调用
// function foo(param1, param2, param3) {
//   console.log(param1, param2, param3)
// }

// const name = 'shadow'
// const age = 24

// // 使用此方式调用时，第一个形参接收一个以“${}”分割的数组，之后的参数依次接收模版字符串中引用的变量值
// foo`I${name} am${age} shadow.` // [ 'I', ' am', ' shadow.' ] shadow 24

// // 默认参数 // //
// // 默认参数的位置应置于最后一个参数位置上，否则会影响函数参数的长度
// function foo(param1, param2, param3 = 'shadow', param4) {
//   console.log(foo.length)
// }

// foo('name', 'age', undefined, 'adress')

// console.log(foo.length) // 2

// // 展开运算符 // //
// // 1. 运用于函数参数的传递
// const info = ['shadow', 24, '天那边']
// function foo(name, age, address) {
//   console.log(`My name is ${name}, i'm ${age} years old, i'm in ${address}.`)
// }

// foo(...info)

// // 2. 运用于数组的构造
// const technic = '汪汪汪'
// const profile = [...info, ...technic]
// console.log(profile) // [ 'shadow', 24, '天那边', '汪', '汪', '汪' ]

// // 3. 运用于对象的构造
// const resume = { name: 'shadow', age: 24, frinds: ['杜籽藤', '范统', '夏建仁'] }
// const introduction = { ...resume, ...technic }

// console.log(introduction) // {'0': '汪','1': '汪','2': '汪',name: 'shadow',age: 24,frinds: [ '杜籽藤', '范统', '夏建仁' ]}

// // 展开语法其实是浅拷贝
// introduction.frinds.push('杜琪衍')
// console.log(resume) // { name: 'shadow', age: 24, frinds: [ '杜籽藤', '范统', '夏建仁', '杜琪衍' ] }

// // 数值表示 // //
// // 二进制
// const x = 0b100

// // 八进制
// const y = 0o100

// // 十六进制
// const z = 0x100

// console.log(x, y, z) // 4 64 256

// // 大数值的友好展示
// let bigNum = 999_999_999_999 // 999999999999
// console.log(bigNum)

// // Symbol //
// Symbol 是新的基本数据类型，可生成一个独一无二的符号用于对象的 key

// // 可传入一个参数对 key 进行描述
// const name = Symbol('objName')
// console.log(name.description) // objName

// const age = Symbol()

// const address = Symbol()

// const gender = Symbol()

// // 以 symbol 类型作为 key 的对象创建方式
// const info = {
//   [name]: 'shadow',
//   [age]: 18
// }

// // 新增属性
// info[address] = '天那边'
// Object.defineProperty(info, gender, {
//   value: '男',
//   writable: true,
//   configurable: true
// })

// // 获取以 Symbol 作为 key 的值
// const values = Object.getOwnPropertySymbols(info)
// for (const value of values) {
//   console.log(info[value])
// }

// // 创建相同值的 Symbol
// const key1 = Symbol.for('symbol')
// const key2 = Symbol.for('symbol')
// console.log(key1 === key2) // true

// // 获取 key1 的 key
// const key = Symbol.keyFor(key1)
// console.log(key) // symbol

// // Set // //
// // // 新增数据结构，类似数组，但存储的元素不可重复
// let set = new Set()
// set.add('shadow')
// set.add(24)

// // set 中常用的属性和方法
// console.log(set.size) // 2

// const res1 = set.has(24)
// console.log(res1) // true

// const res2 = set.delete(24)
// console.log(res2) // true

// set.clear()
// console.log(set) // Set(0) {}

// // 将数组转换为 set
// let arrToset = new Set(['shadow', 24, '天那边'])

// // set 支持 forEach 和 for...of 方法
// arrToset.forEach(item => {
//   console.log(item)
// })

// for (let item of arrToset) {
//   console.log(item)
// }

// // 数组去重
// let arr = ['sahdow', 24, 'fariy', 'sahdow', 12, 24]

// let tempSet = new Set(arr)

// let deduplicationArr1 = Array.from(tempSet)
// let deduplicationArr2 = [...tempSet]

// console.log(deduplicationArr1) // [ 'sahdow', 24, 'fariy', 12 ]
// console.log(deduplicationArr2) // [ 'sahdow', 24, 'fariy', 12 ]

// // WeakSet // //
// // 只能存储对象，不能存储基本数据类型，对存储对象的引用属于弱引用
// const info = {
//   name: 'shadow',
//   age: 24,
//   friends: ['杜籽藤', '夏建仁']
// }

// const skills = {
//   saying: '汪汪汪🐶',
//   eating: '嗒嗒嗒🐶'
// }

// let weakSet = new WeakSet()

// // weakSet.add('天那边') // Invalid value used in weak set
// weakSet.add(info)
// weakSet.add(skills)

// const res1 = weakSet.has(info)
// console.log(res1) // true

// const res2 = weakSet.delete(info)
// console.log(res2) // true

// // weakSet 不能遍历，没有 forEach 方法

// // WeakSet 应用场景
// // 禁止使用实例本身 this 以外的 this 去调用实例方法（禁止显示改变 this 指向）
// const instanceThis = new WeakSet()

// class Person {
//   constructor() {
//     instanceThis.add(this)
//   }

//   sayHello() {
//     if (instanceThis.has(this)) {
//       console.log('你好呀！')
//     } else {
//       console.log('你个贼人，滚蛋！')
//     }
//   }
// }

// const person = new Person()

// person.sayHello() // 你好呀！

// person.sayHello.call('shadow') // 你个贼人，滚蛋！

// // Map // //
// 存储数据之间的映射关系
// 在对象中不允许使用对象作为属性名，但 Map 可以

// const info = {
//   name: 'shadow'
// }

// const skills = {
//   saying: '汪汪汪🐶',
//   eating: '嗒嗒嗒🐶'
// }

// const profile = { [info]: 'resume' }

// console.log(profile) // { '[object Object]': 'resume' }
// profile['[object Object]'] = 'introduction'
// console.log(profile) // { '[object Object]': 'introduction' }

// let map = new Map()
// map.set(info, 'summary') // Map(1) { { name: 'shadow' } => 'summary' }
// console.log(map)

// // 传入参数创建 Map
// let map1 = new Map([
//   [info, 'summary'],
//   [skills, 'property']
// ])

// // 常见属性和方法
// console.log(map1.size)

// const res1 = map1.get(skills)
// console.log(res1)

// const res2 = map1.has(info)
// console.log(res2)

// // Map 支持遍历
// map1.forEach(item => {
//   console.log(item)
// })

// const res3 = map1.delete(info)
// console.log(res3);

// map1.clear()
// console.log(map1) // Map(0) {}

// // WeakMap // //
const info = { name: 'shadow' }

const weakMap = new WeakMap()
// weakMap.set('name', 'shadow') // Invalid value used as weak map key
weakMap.set(info, 'resume')

// 常用方法
const res1 = weakMap.get(info)
console.log(res1)

const res2 = weakMap.has(info)
console.log(res2)

// WeakMap 不支持遍历


const res3 = weakMap.delete(info)
console.log(res3)
