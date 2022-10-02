// // with // //
// var addr = '天那边'

// var obj = {
//   name: 'shadow',
//   addr: '云深不知处'
// }

// function foo() {
//   with (obj) {
//     console.log(addr) // 云深不知处
//   }
// }

// foo()

// var jsString = "var name = 'shadow'; console.log(name);"

// eval(jsString) // shadow

'use strict'

// // 1. 函数独自调用时 window 默认绑定失效
// function foo() {
//   console.log(this) // undefined
// }

// foo()

// // 2. 参数不允许出现重复定义（非严格模式重复定义时会被重写）
// function foo1(addr, age, addr) {
//   // SyntaxError: Duplicate parameter name not allowed in this context
//   console.log(addr, age, addr)
// }

// foo1('云深不知处', 18, '天那边')

// // 3. 不允许使用 with 语句
// var obj = { name: 'shadow', age: 18 }

// // SyntaxError: Strict mode code may not include a with statement
// with (obj) {
//   console.log(name)
// }

// // 4. 不会意外创建全局变量
// function foo2() {
//   // ReferenceError: message is not defined
//   message = '闻香识女人'
// }

// foo2()

// // 5. eval 不会向全局添加全局变量
// var jsString = "var message = '闻香识女人'"

// eval(jsString)
// // ReferenceError: message is not defined
// console.log(message)

// // 6. 不允许 0 开头的八进制写法
// // SyntaxError: Octal literals are not allowed in strict mode.
// var oct = 01234567

// console.log(oct)

// 7. 试图删除属性描述器包含 configurable: false 的属性时会抛出错误，消除静默错误
var obj = { name: 'shadow' }

Object.defineProperty(obj, 'addr', {
  value: '云深不知处',
  configurable: false
})

// TypeError: Cannot delete property 'addr' of #<Object>
delete obj.addr
