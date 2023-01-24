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

// 数组解
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

// 可传入一个参数对 key 进行描述
const name = Symbol('objName')
console.log(name.description) // objName

const age = Symbol()

const address = Symbol()

const gender = Symbol()

// 以 symbol 类型作为 key 的对象创建方式
const info = {
  [name]: 'shadow',
  [age]: 18
}

// 新增属性
info[address] = '天那边'
Object.defineProperty(info, gender, {
  value: '男',
  writable: true,
  configurable: true
})

// 获取以 Symbol 作为 key 的值
const values = Object.getOwnPropertySymbols(info)
for (const value of values) {
  console.log(info[value])
}
