class Animal {
  // // 类的构造方法 // //
  constructor(name, age, addr) {
    this.name = name
    this.age = age
    this._addr = addr
  }

  // // 类的实例方法 // //
  eating() {
    console.log(this.name + ' eatting...')
  }

  // // 类的访问器方法 // //
  get addr() {
    console.log('调用了获取地址的方法')
    return this._addr
  }

  set addr(value) {
    console.log('调用了修改地址的方法')
    this._addr = value
  }

  // // 类的静态方法 // //
  static introduce() {
    console.log('My name is ' + this.name)
  }
}

var animal = new Animal('shadow', 1.2, '云深不知处')

console.log(animal.__proto__ === Animal.prototype) // true

Animal.introduce() // My name is Aniaml

console.log(animal.addr)

animal.addr = '天那边'

console.log(animal.addr)

// // 类的继承 // //
class Dog extends Animal {
  constructor(name, age, addr, gender) {
    // 在访问或返回子类的 this 之前，必须调用父类的构造函数（super）
    super(name, age, addr)
    this, (gender = gender)
  }
}

console.log(Dog.prototype.__proto__ === Animal.prototype) // true

Dog.introduce() // My name is Dog
