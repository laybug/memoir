// 能自动响应数据变化的代码机制称之为是响应式的

// 将每个需要响应的对象加入到 objMap 中
let objMap = new WeakMap()

// 当前需要添加到依赖集中的依赖（函数）
let activeReactiveDep = null

// 依赖类：用于收集需要实现响应的对象的属性所对应的依赖
class Dep {
  constructor() {
    // 使用一个集合收集依赖
    this.reactiveDeps = new Set()
  }

  // 添加需要响应的依赖
  add() {
    activeReactiveDep && this.reactiveDeps.add(activeReactiveDep)
  }

  // 通知依赖进行响应
  notify() {
    this.reactiveDeps.forEach(dep => {
      dep()
    })
  }
}

// 获取依赖集：劫持数据时找到正确的依赖集进行依赖的收集
function getDep(obj, key) {
  // 获取对象
  let targetMap = objMap.get(obj)
  // 当对象不存在时将其加入到 objMap 中
  if (!targetMap) {
    targetMap = new Map()
    objMap.set(obj, targetMap)
  }

  // 获取依赖集
  let deps = targetMap.get(key)
  if (!deps) {
    deps = new Dep()
    targetMap.set(key, deps)
  }

  return deps
}

// 代理工厂：为需要实现响应的对象生成代理对象
function reactive(obj) {
  // 使用代理实现 accessor
  return new Proxy(obj1, {
    get(target, key, receiver) {
      // 根据 target 和 key 可唯一确定一个 deps
      const deps = getDep(target, key)
      deps.add()
      return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
      Reflect.set(target, key, value, receiver)
      const deps = getDep(target, key)
      deps.notify()
    }
  })
}

const obj1 = {
  name: 'shadow',
  age: 1
}

const obj2 = {
  name: 'iris',
  age: 1.1
}

// 监听器：当有函数使用到对象属性时，将改函数添加到依赖集中
function watcher(fn) {
  activeReactiveDep = fn
  fn()
  activeReactiveDep = null
}

let obj1Proxy = reactive(obj1)
let obj2Proxy = reactive(obj2)

watcher(function fn1() {
  console.log('----dep1----')
  obj1Proxy.name
})

watcher(function fn2() {
  console.log('----dep2----')
  obj1Proxy.name
  obj1Proxy.age
})

watcher(function fn3() {
  console.log('----dep3----')
  obj1Proxy.name
  obj2Proxy.age
})

obj1Proxy.name = 'iris'

console.log(obj1Proxy.name)
