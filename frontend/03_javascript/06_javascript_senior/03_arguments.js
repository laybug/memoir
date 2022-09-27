function foo(el1, el2, el3, el4) {
  // // 将伪数组转换为真正的数组 // //

  // 方法 1
  var newArr = Array.prototype.slice.call(arguments, 1, 8)
  // 此处的分析为：当使用 Array.prototype.slice(arguments) 来进行调用时，this 指向 Array.prototype，所以要使用 call 方法，显式绑定 arguments 本身

  // 方法 2
  // var newArr = [].slice.call(arguments)

  // 方法 3
  // var newArr = [...arguments]

  return newArr.reverse()
}

var res = foo(1, 2, 3, 4, 5, 6)
console.log(res)

// 将伪数组转换为真正的数组的方法 1 的手动实现
Array.prototype.owslice = function (start, end) {
  pretendArr = this
  var realArr = []
  end = end < pretendArr.length ? end : pretendArr.length
  for (var i = start; i < end; i++) {
    realArr.push(pretendArr[i])
  }
  return realArr
}

function foo1(el1, el2, el3, el4) {
  var newArr = Array.prototype.owslice.call(arguments, 1, 8)

  return newArr.reverse()
}

var res = foo1(1, 2, 3, 4, 5, 6)
console.log(res)
