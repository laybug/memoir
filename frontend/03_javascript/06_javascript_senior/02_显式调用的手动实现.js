// // // call // //
// // /*
// // 1. call 方法可以显式绑定 this
// // 2. call 方法可以传递参数
// // 3. call 方法可以忽略显式绑定
// // */

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
//   var res = thisArg.fn(...restArgs)

//   delete thisArg.fn

//   return res
// }

// function foo(el1, el2) {
//   console.log('foo 被调用。this ->', this)
//   return el1 + el2
// }

// // 系统 call
// foo.call('shadow', 1, 2)

// // 自定义 call
// foo.owcall()
// foo.owcall(0)

// var res = foo.owcall('abc', 1, 2)
// console.log(res)

// foo.owcall(undefined)
// foo.owcall(null)

// var res1 = foo.owcall('shadow')
// console.log(res1)

// // // applay // //
// /*
// 1. 与 call 方法思路基本一致；
// 2. 不同之处在于原函数传入的参数使用数组进行接收
// */

// Function.prototype.owapplay = function (thisArg, restArgs) {
//   var fn = this

//   thisArg = thisArg === undefined || thisArg === null ? window : Object(thisArg)

//   restArgs = restArgs ? restArgs : []

//   thisArg.fn = fn

//   var res = thisArg.fn(...restArgs)

//   delete thisArg.fn

//   return res
// }

// function foo(el1, el2) {
//   console.log('foo 被调用。this ->', this)
//   return el1 + el2
// }

// var res = foo.owapplay('shadow')
// console.log(res)

// // // bind // //
// /*
// 1. bind 返回一个新的函数
// 2. bind 可以断续传参
// */

// Function.prototype.owbind = function (thisArg, ...restArgs) {
//   var fn = this

//   thisArg = thisArg !== undefined && thisArg !== undefined ? Object(thisArg) : window

//   restArgs = restArgs ? restArgs : []

//   return function (...restArgs1) {
//     thisArg.fn = fn

//     // 释放内存
//     fn = null

//     var res = thisArg.fn(...restArgs.concat(restArgs1))

//     delete thisArg.fn
//     return res
//   }
// }

// function foo1(params1, params2, params3, params4) {
//   return params1 + params2 + params3 + params4
// }

// // 系统 bind
// var proxyFn = foo1.bind('shadow', 1, 2)
// var res = proxyFn(3, 4)

// console.log(res)

// // 自定义 bind
// var owProxyFn = foo1.owbind('shadow', 1, 2)
// var res = owProxyFn(3, 4)
// console.log(res)

// function foo2(params1, params2) {
//   console.log(params1 + params2)
// }

// var owProxyFn1 = foo2.owbind('iris', 1, 2)
// owProxyFn1()

// var owProxyFn1 = foo2.owbind('iris')
// owProxyFn1(1, 2)

// // // map // //
// Array.prototype.owMap = function (callback) {
//   var maptedArr = []

//   for (var i = 0; i < this.length; i++) {
//     maptedArr.push(callback(this[i]))
//   }

//   return maptedArr
// }

// var arr = [1, 2, 3, 4, 5]

// var maptedArr = arr.owMap(item => item * 2)
// console.log(maptedArr)

// // reduce // //
Array.prototype.owReduce = function (callback, initial) {
  var start = initial === undefined ? 1 : 0
  initial = initial === undefined ? this[0] : initial

  var end = this.length

  for (var i = start; i < end; i++) {
    initial = callback(initial, this[i])
  }

  return initial
}

var arr = [1, 2, 3, 4, 5]

var res1 = arr.owReduce((previousVlue, currentValue) => previousVlue * currentValue + 1, 0)
var res2 = arr.reduce((previousVlue, currentValue) => previousVlue * currentValue + 1, 0)

console.log(res1, res2)
