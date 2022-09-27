import Vue from 'vue'
import Vuex from 'vuex'
import INCREMENT from './mutationsTypes'

// 1. 安装 Vuex
Vue.use(Vuex)

// 2. 创建 Vuex 实例

// 创建子模块，其会被添加到 rootStore
const moduleHome = {
  state: {
    name: 'iris'
  },
  mutations: {
    //childStore 的方法必须保持唯一性，否则在 $store.commit 时不能找到对应的方法
    updateName(state, paylaod) {
      state.name = paylaod.newName
    }
  },
  actions: {
    // childStore context 和 rootStore 的含义不一样，childStore 中的 context 含有 rootStore 的属性
    asyncUpdateName(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateName', payload)
          resolve(context)
        }, 1000)
      })
    }
    // 使用对象解构语法拆包 context
    // destruction({state, commit, rootState}) {}
  },
  getters: {
    // childStore 中的参数可以有 rootState
    // 拼接名字
    fullName(state) {
      return firstName => state.name + ' ' + firstName
    },
    // 在名字的后面加上 rootState 的 counter 属性
    nameConvert(state, getters, rootState) {
      return firstName => getters.fullName(firstName) + rootState.counter
    }
  },
  // 可再定义下一级 store
  modules: {}
}

const store = new Vuex.Store({
  // state 中初始化的数据是响应式的（后续变动时页面相应的引用位置也会改变	，）
  state: {
    counter: 0,
    students: [
      {
        name: 'iris',
        age: 18
      },
      {
        name: '一叶秋',
        age: 19
      },
      {
        name: '李淳罡',
        age: 20
      },
      {
        name: '王仙芝',
        age: 110
      }
    ],
    info: {
      name: 'iris',
      age: 18,
      gender: 'female'
    }
  },
  // 更新 state 的唯一方式（只能进行同步操作）（直接更新时 dev-tool 跟踪不到，后续使用也会出现问题）
  mutations: {
    // mutations的常量类型。为了避免在 commit 的时候出现提交时传递的与 mutations 内定义的不一致，可使用常量来规避
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    // 添加学生
    // 参数 student 被称为载荷（payload）
    // 普通提交的处理事件
    // addStudent(state, student) {
    // 	state.students.push(student)
    // },
    // 特殊提交的处理事件
    addStudent(state, payload) {
      state.students.push(payload.student)
    },
    updateInfo(state) {
      state.info.name = 'shadow'
      // 在 mutations 内部进行异步操作时 vue-devtools 不能跟踪
      // 错误演示
      // setTimeout(() => {
      //   state.info.name = 'shadow'
      // }, 1000)

      // 因为 state 中的数据在初始化时是响应的，但后续添加的数据不再响应
      // state.info.address = '云深不知处'
      // Vue 提供了可以将后续数据改为响应的方法
      // 添加数据（对象使用 key 操作，数组使用 index 操作）
      // Vue.set(state.info, 'address', '云深不知处')
      // 删除数据
      // delete state.info.name 无效
      // Vue.delete(state.info, 'gender')
    }
  },
  // 对 state 中的数据操作有异步操作时，需要将异步操作转移到 actions 中
  actions: {
    asyncUpdateInfo(context, payload) {
      // setTimeout(() => {
      //   context.commit('updateInfo')
      // 	// 在提交完成后进行的异步操作，可由 payload 传递具体的回调函数过来进行操作
      //   console.log(payload.msg)
      //   payload.success()
      // }, 1000)

      // Promise 处理异步操作
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload)
          resolve('异步操作已完成')
        }, 1000)
      })
    }
  },
  // 当 state 中的数据需要进行处理才展示时，可使用该属性，类似于 computed 属性
  // 函数中的 state、getters 参数在调用时会自动传参
  getters: {
    // counter ** 2
    square(state) {
      return state.counter ** 2
    },
    // 获取年龄大于 18 的学生
    outEighteen(state) {
      return state.students.filter(s => s.age > 18)
    },
    // 获取年龄大于 18 的学生数
    outEighteenNumber(state, getters) {
      return getters.outEighteen.length
    },
    // 筛选指定年龄的学生
    accordAge(state) {
      // 当 getters 中的方法需要传递参数时，需要 return 一个函数去接收参数
      return age => state.students.filter(s => s.age === age)
    }
  },
  // 可将 store 分多个模块，每个模块下是一个新的 store
  modules: {
    moduleHome
  }
})

// 3. 导出 store
export default store
