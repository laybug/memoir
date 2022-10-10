var obj = {
  name: 'shadow',
  introduce: function () {
    console.log('My name is ' + obj.name)
  }
}

class Dog {
  constructor(name) {
    this.name = name
  }

  introduce() {
    console.log('My name is ' + this.name)
  }
}

var dog = new Dog('iris')

function show(o) {
  o.introduce()
}

show(obj) // My name is shadow
show(dog) // My name is iris

function sum(el1, el2) {
  console.log(el1 + el2)
}

sum(1, 2) // 3
sum('sha', 'dow') // shadow
