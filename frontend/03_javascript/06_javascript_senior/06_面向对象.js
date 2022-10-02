// // 创建方式 // //
// 方式一
// var obj = new Object()
// obj.name = 'shadow'
// obj.action = function () {
//   console.log('闻香识女人')
// }

// 方式二
// var obj = {
//   name: 'shadow',
//   action: function () {
//     console.log('闻香识女人')
//   }
// }

// // 描述器 // //
// var obj = {
//   name: 'shadow',
//   addr: '云深不知处'
// }

// Object.defineProperty(obj, 'email', {
//   value: 'email@emal',
//   writable: true,
//   enumerable: true,
//   configurable: false
// })

// Object.defineProperty(obj, 'email', {
//   value: 'shadow@email',
//   writable: false
// })

// console.log(obj)

function foo() {
  return function () {
    var name = 'shadow'
    console.log(name)
  }
}

var fn1 = foo()
var fn2 = foo()

console.log(fn1 === fn2)
