// // 纯函数 // //
// 数组中的 slice 和 splice
// var arr = ['shadow', 'iris', 'fariy', 'equinox']

// var res1 = arr.slice(2)
// console.log(res1)
// console.log(arr)

// var res2 = arr.splice(2)
// console.log(res2)
// console.log(arr)

// // 柯里化 // //
// function currying(fn) {
//   // 记录原函数的所有参数
//   var totalArgs = []

//   function curried(...args) {
//     totalArgs = totalArgs.concat(args)

//     // 若原函数的参数全部传入则返回结果，没有传完时则返回函数继续接受余下参数
//     if (totalArgs.length >= fn.length) {
//       return fn.apply(this, totalArgs)
//     } else {
//       return curried
//     }
//   }

//   return curried
// }
// function foo(el1, el2, el3) {
//   console.log(this)
//   return el1 + el2 + el3
// }

// var curriedFoo = currying(foo)

// var baseFn = curriedFoo(1)(2)
// var res = baseFn.call('shadow', 3)
// console.log(res)

// // 组合函数 // //
function compose(...fns) {
  // 检查传入的参数是否均为函数
  if (fns.find(item => typeof item !== 'function')) throw new TypeError('Expect arguments are functions.')

  var length = fns.length
  return function (...args) {
    var index = 0
    // 获取第一个函数的结果
    var result = length ? fns[index].apply(this, args) : args

    while (++index < length) result = fns[index].call(this, result)

    return result
  }

  // 此写法返回的结果是一个数组
  // return (...args) => fns.reduce((pre, current) => [current.apply(this, pre)], args)
}

function add(a, b) {
  return a + b
}

function multiply(x) {
  return x * 2
}

function square(m) {
  return m ** 2
}

var composeFn = compose(add, multiply, square)

var res = composeFn(1, 1)

console.log(res)
