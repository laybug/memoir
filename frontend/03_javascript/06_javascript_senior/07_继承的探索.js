// // 通过原型对象继承 // //

// function Animal() {
//   this.name = 'shadow'
//   this.age = 1.5
//   this.friends = []
// }

// Animal.prototype.running = function () {
//   console.log(this.name + ' is running!')
// }

// function Dog(addr) {
//   this.addr = addr
// }

// // 将父类的属性和方法均继承过来
// Dog.prototype = new Animal()

// Dog.prototype.eatting = function () {
//   console.log(this.name + ' is eatting!')
// }

// var dog1 = new Dog('天那边')
// var dog2 = new Dog('云生不知处')

// console.log(dog1.name) // shadow
// dog1.running() // shadow is running!
// dog1.eatting() // shadow is eatting!
// dog2.friends.push('杜籽藤')
// console.log(dog1.friends) // [ '杜籽藤' ]
// console.log(dog2.friends) // [ '杜籽藤' ]

// // 通过原型对象 + 构造函数继承 // //

// function Animal(name, age, fiends) {
//   this.name = name
//   this.age = age
//   this.friends = fiends
// }

// Animal.prototype.running = function () {
//   console.log(this.name + ' is running!')
// }

// function Dog(name, age, fiends, addr) {
//   Animal.call(this, name, age, fiends)
//   this.addr = addr
// }

// // 将父类的属性和方法均继承过来
// Dog.prototype = new Animal()

// Dog.prototype.eatting = function () {
//   console.log(this.name + ' is eatting!')
// }

// var dog1 = new Dog('iris', 1.2, ['tony', 'shadow'], '天那边')
// var dog2 = new Dog('shadow', 1, ['iris', 'james'], '云生不知处')

// console.log(dog1.name) // iris
// console.log(dog2.name) // shadow
// dog1.running() // iris is running!
// dog2.eatting() // shadow is eatting!
// dog2.friends.push('杜籽藤')
// console.log(dog1.friends) // [ 'tony', 'shadow' ]
// console.log(dog2.friends) // [ 'iris', 'james', '杜籽藤' ]

// console.log(dog1.__proto__) // Animal { name: undefined, age: undefined, friends: undefined }

// // 原型式继承函数 // //

// 实现继承的关键点在于子类如何将父类中原型对象中的属性和方法继承过来 —— 在父类的原型对象和子类的原型对象之间创建一个用于连接两者的桥接对象（子类的新原型对象）

// var obj = { name: 'shadow' }

// // 方式一
// function object(o) {
//   function bridging() {}
//   bridging.prototype = o
//   return new bridging()
// }

// console.log(object(obj).__proto__) // { name: 'shadow' }

// // 方式二
// function object(o) {
//   var bridgingObj = {}
//   Object.setPrototypeOf(bridgingObj, o)
//   return bridgingObj
// }

// console.log(object(obj).__proto__) // { name: 'shadow' }

// // 方式三
// function object(o) {
//   var bridgingObj = Object.create(o)
//   return bridgingObj
// }

// console.log(object(obj).__proto__) // { name: 'shadow' }

// // 实现继承的终极方案 // //
function inherit(subType, superType) {
  // 创建一个 [[prototype]] 指向父类原型对象的桥接对象
  function bridging() {}
  bridging.prototype = superType.prototype

  // 将子类的原型对象指桥接对象
  subType.prototype = new bridging()

  Object.defineProperty(subType.prototype, 'constructor', {
    value: subType,
    writable: true,
    configurable: true
  })
}

// function inherit(subType, superType) {
//   subType.prototype = Object.create(superType.prototype, {
//     constructor: {
//       value: subType,
//       writable: true,
//       configurable: true
//     }
//   })
// }

function Animal(name, age, fiends) {
  this.name = name
  this.age = age
  this.friends = fiends
}

Animal.prototype.running = function () {
  console.log(this.name + ' is running!')
}

function Dog(name, age, fiends, addr) {
  Animal.call(this, name, age, fiends)
  this.addr = addr
}

inherit(Dog, Animal)

Dog.prototype.eatting = function () {
  console.log(this.name + ' is eatting!')
}

var dog = new Dog('shadow', 1, ['iris', 'fariy'], '云深不知处')

// console.log(dog)
// dog.eatting()
// dog.running()

// // 对象的方法补充 // //

// hasOwnProperty 判断对象自身是否具有某个属性（不包括原型对象）
var proto = { name: 'shadow' }

function inherit1(o) {
  function bridging() {}
  bridging.prototype = o
  return new bridging()
}

var obj = inherit1(proto)

obj.age = 1

console.log(obj.hasOwnProperty('age')) // true
console.log(obj.__proto__) // { name: 'shadow' }
console.log(obj.hasOwnProperty('name')) // false

// in 判断某个对象是否具有每个属性
console.log('name' in obj) // true

// instanceof 判断某个构造函数（类）是否出现在某个实例对象的原型链上
console.log(dog instanceof Animal) // true
console.log(dog instanceof Dog) // true

// isPrototypeOf 判断某个对象是否出现在某个实例对象的原型链上
console.log(proto.isPrototypeOf(obj)) // true
