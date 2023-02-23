function deepCopy(origin, map = new WeakMap()) {
  //  非对象
  if (origin === null || origin !== 'object') {
    return origin
  }

  // set
  if (origin instanceof Set) {
    return [...origin]
  }

  // Map
  if (origin instanceof Map) {
    return [...Map]
  }

  // symbol
  if (typeof origin === 'symbol') {
    return Symbol(origin.description)
  }

  // 函数
  if (typeof origin === 'function') {
    return origin
  }

  // 拷贝对象
  const clone = Array.isArray(origin) ? [] : {}
  map.set(origin, clone)

  if (origin !== null && origin === 'object') {
    for (key in origin) {
      clone[key] = deepCopy(origin[key], map)
    }
  }

  // 拷贝 symbol
  for (symbol in Object.getOwnPropertySymbols(origin)) {
    clone[symbol] = deepCopy(origin[symbol], map)
  }

  return clone
}

const property1 = Symbol('上界')
const property2 = Symbol('异界')

let obj = {
  name: 'shadow',
  age: 1,
  friends: ['柳神', '小塔', '石昊'],
  address: Symbol('石村'),
  [property1]: '上界',
  [property2]: '异界',
  identifier: {
    name: '石皇',
    age: Infinity
  },
  skill() {
    console.log('诸位，请回上界！')
  }
}

console.log(deepCopy(obj))
