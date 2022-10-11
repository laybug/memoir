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
