// // // call 方法的实现 // //

// /*
// 1. call 方法可以显式绑定 this
// 2. call 方法可以传递参数
// 3. call 方法可以忽略显式绑定
// */

// 自定义 call 方法
// function foo(params1, params2) {
//   console.log('foo 被调用。this ->', this)
//   return params1 + params2
// }

// function foo1() {
//   console.log('foo1 被调用。this ->', this)
// }

// // 系统函数实现
// // foo.call('shadow', 1, 2)

// Function.prototype.owcall = function (thisArg, ...restArgs) {
//   // 在使用 owcall 方法进行调用时，隐式绑定了函数本身为 this
//   var fn = this

//   // 判断传入的 thisArg 是否为 null 或 undefined
//   thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window

//   //判断传入的 restArgs 是否可遍历
//   restArgs = restArgs ? restArgs : []

//   // 向 thisArg 中添加属性并指向 fn
//   thisArg.fn = fn

//   // 使用 thisArg 调用 fn 即可改变 this 的指向
//   return thisArg.fn(...restArgs)

//   delete thisArg.fn
// }

// foo.owcall()
// foo.owcall(0)

// var result = foo.owcall('abc', 1, 2)
// console.log(result)

// foo.owcall(undefined)
// foo.owcall(null)

// var res = foo1.owcall('shadow')

// // bind 方法实现 // //
/* 
1. bind 返回一个新的函数
2. bind 可以断续传参
*/

function foo(params1, params2, params3, params4) {
  return params1 + params2 + params3 + params4
}

// 系统函数实现
var proxyFn = foo.bind('shadow', 1, 2)
var res = proxyFn(3, 4)

console.log(res)

// 自定义 bind 方法
Function.prototype.owbind = function (thisArg, ...restArgs) {
  var fn = this

  thisArg = thisArg !== undefined && thisArg !== undefined ? Object(thisArg) : window

  restArgs = restArgs ? restArgs : []

  return function (...restArgs1) {
    thisArg.fn = fn
    // 释放内存
    fn = null
    return thisArg.fn(...restArgs.concat(restArgs1))
  }
}

var owProxyFn = foo.owbind('shadow', 1, 2)
var res = owProxyFn(3, 4)
console.log(res)

function foo1(params1, params2) {
  console.log(params1 + params2)
}

// var owProxyFn1 = foo1.owbind('iris', 1, 2)
// owProxyFn1()

var owProxyFn1 = foo1.owbind('iris')
owProxyFn1(1, 2)
