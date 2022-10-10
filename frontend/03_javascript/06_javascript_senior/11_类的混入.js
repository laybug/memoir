class Animal {
  constructor(name) {
    this.name = name
  }

  eatting() {
    console.log(this.name + ' is eatting...')
  }
}

function mixinRunning(BaseClass) {
  return class extends BaseClass {
    running() {
      console.log(this.name + ' is running...')
    }
  }
}

var newAnimal = mixinRunning(Animal)

var animal = new newAnimal('shadow')

animal.running() // shadow is running...
