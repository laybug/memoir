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

// // Object 的其它方法 // //
'use strict'
var obj = {
  name: 'shadow',
  addr: '云深不知处'
}

// 1. 阻止对象的新属性进行扩展
// Object.preventExtensions(obj)

// // TypeError: Cannot add property email, object is not extensible
// obj.email = 'shadow@email'

// console.log(obj)

// 2. 密封对象，不允许配置（删除对象）
// Object.seal(obj)

// // Cannot delete property 'addr' of #<Object>
// delete obj.addr

// 3.冻结对象，不允许修改对象的属性
// Object.freeze(obj)

// // TypeError: Cannot assign to read only property 'addr' of object '#<Object>'
// obj.addr = '天那边'

// 4. 获取对象的属性的描述器
// console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
// {
//   value: 'shadow',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// // 创建单一对象的方式 // //
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

// // 创建多个对象的方案 // //
// 方案一：工厂模式
// function createDog(name, age) {
//   var dog = {}
//   dog.name = name
//   dog.age = age

//   dog.action = function () {
//     console.log('闻香识女人')
//   }

//   return dog
// }

// var dog1 = createDog('shadow', 1)
// var dog2 = createDog('iris', 1)
// console.log(dog1, dog2)

// 方案二：构造函数
// function Dog(name, age) {
//   this.name = name
//   this.age = age
//   this.action = function () {
//     console.log('闻香识女人')
//   }

//   // 构造函数中返回出现返回值时，会将 this 覆盖
// }

// var dog = new Dog('shadow', 1)

// console.log(dog)

// // constructor + prototype // //
function Dog(name, age) {
  this.name = name
  this.age = age
}

// // 函数原型对象中存在 constructor 属性指向 函数本身，但其 enumerable 特性为 false ，在终端输出时不可见，修改为 true 时即可见
// console.log(Dog.prototype) // {}

// console.log(Object.getOwnPropertyDescriptor(Dog.prototype, 'constructor'))
// // {
// //   value: [Function: Dog],
// //   writable: true,
// //   enumerable: false,
// //   configurable: true
// // }

// Object.defineProperty(Dog.prototype, 'constructor', {
//   enumerable: true
// })

// console.log(Dog.prototype) // { constructor: [Function: Dog] }

// 使用构造函数创建对象时，可将方法添加到函数的原型中以节省更多的空间
// 重写函数原型（当方法很多时可避免多次使用 funcName.prototype ）
Dog.prototype = {
  action: function () {
    console.log('闻香识女人')
  }
}

// 添加 constructor 属性指向函数本身
Object.defineProperty(Dog.prototype, 'constructor', {
  value: Dog,
  writable: true,
  configurable: true
})

var dog = new Dog('shadow', 1)
console.log(dog.name) // shadow
dog.action() // 闻香识女人
// console.log(Object.getOwnPropertyDescriptor(Dog.prototype, 'constructor'))
console.log(Dog.prototype.constructor.prototype.constructor)
