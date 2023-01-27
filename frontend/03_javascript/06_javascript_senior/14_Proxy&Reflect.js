// // Proxy // //

// Object.defineProperty() 实现对象的 accessor
// const obj = {
//   name: 'shadow',
//   age: 1
// }

// Object.keys(obj).forEach(key => {
//   let value = obj[key]
//   Object.defineProperty(obj, key, {
//     get() {
//       console.log(`快看！${key} 被访问啦！`)
//       return value
//       // 若以 return obj[key] 的方式取值会形成死循环
//     },
//     set(newValue) {
//       console.log(`天呐！${key} 被赋值咯！`)
//       value = newValue
//     }
//   })
// })

// obj.name // log: 快看！name 被访问啦！
// obj.age = 1.1 // log: 天呐！age 被赋值咯！

// hander

// const obj = {
//   name: 'shadow',
//   age: 1,
//   gender: 'male'
// }

// const hander = {
//   get(target, key) {
//     console.log(`看呐！${key} 被访问了！`)
//     return target[key]
//   },
//   set(target, key, value) {
//     console.log(`看呐！${key} 被赋值了！`)
//     target[key] = value
//   },
//   // 判断某个属性是否存在对象中
//   has(target, key) {
//     console.log(`你猜 ${key} 有没有在`, target, '中？')
//     return key in target
//   },
//   deleteProperty(target, key) {
//     console.log(`哦豁，${key} 没在啦！`)
//     delete target[key]
//   }
// }

// const objProxy = new Proxy(obj, hander)

// console.log(obj.name)
// /**
//  * 看呐！name 被访问了！
//  * shadow
//  */

// objProxy.age = 1.1 // log: 看呐！age 被赋值了！

// console.log('age' in objProxy) // log: 你猜 age 有没有在 { name: 'shadow', age: 1.1, gender: 'male' } 中？

// delete objProxy.gender // log: 哦豁，gender 没在啦！

// console.log(objProxy.gender)
// /**
//  * 看呐！gender 被访问了！
//  * undefined
//  */

/***** handler.apply & hander.construct */

// 应用于函数对象的捕获器
// function foo(name) {
//   console.log(`foo function --> ${name}`)
// }

// const fooProxy = new Proxy(foo, {
//   // 当函数以 apply、call 方式调用时触发
//   apply(target, thisArg, argArray) {
//     console.log(`呜呜～～，被 ${thisArg} 调用了！`)
//     return target.apply(thisArg, argArray)
//   },
//   // 当函数以 new 方式调用时触发
//   construct(target, argArray, newTarget) {
//     console.log('玩命生产中...')
//     return new target(argArray)
//   }
// })

// fooProxy.call('shadow', 'iris') // log: 呜呜～～，被 shadow 调用了！
// fooProxy.apply('shadow', ['iris']) // log: 呜呜～～，被 shadow 调用了！
// new fooProxy('iris') // 玩命生产中...

/***** Reflect *****/

// Reflect.get
const obj = {
  name: 'shadow',
  age: 1
}

console.log(Reflect.get(obj, 'name')) // log: shadow
Reflect.set(obj, 'age', 1.1)
console.log(Reflect.get(obj, 'age')) // log: 1.1

// Reflect.construct
class Foo {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  sayHello() {
    console.log('Hi!')
  }
}

class Bar {
  constructor(name, age) {
    this.name
    this.age
  }
  technic() {
    console.log('我才是带滴哟～')
  }
}

const foo = Reflect.construct(Foo, ['shadow', 1], Bar)

console.log(foo.__proto__ === Foo) // log: false
console.log(foo instanceof Bar) // log: true

console.log(foo.name) // log: foo.sayHello() // foo.sayHello is not a function
foo.technic() // log: 我才是带滴哟～

/***** Proxy & Reflect ******/

// const obj = {
//   _name: 'shadow',
//   get name() {
//     console.log('---obj---')
//     return this._name
//   },
//   set name(newValue) {
//     this._name = newValue
//   }
// }

// const objProxy = new Proxy(obj, {
//   get(target, key, receiver) {
//     // get 中的 receiver 为形参数，可指代代理对象或继承于代理对象的对象
//     console.log('---objProxy---')
//     console.log(receiver === obj1) // log: true
//     // 与 target[key] 比较，Reflect.get 可借助 receiver 来改变 target 中 getter 的 this 指向
//     return Reflect.get(target, key, receiver)
//   },
//   set(target, key, value, receiver) {
//     Reflect.set(target, key, value, receiver)
//   }
// })

// const obj1 = {
//   info: 'Inherit from objProxy.'
// }

// // 将 obj1 的原型指向 objProxy
// Object.setPrototypeOf(obj1, objProxy)

// obj1.name // 等同于 Reflect.get(obj1, 'name')
// /**
//  * log:
//  * ---objProxy---
//  * true
//  * ---obj---
//  * ---objProxy---
//  * true
//  */
