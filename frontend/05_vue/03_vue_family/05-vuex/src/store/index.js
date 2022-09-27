import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleHome from './modules/moduleHome'

// 1. 安装 Vuex
Vue.use(Vuex)

// 2. 创建 Vuex 实例

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
  mutations,
  // 对 state 中的数据操作有异步操作时，需要将异步操作转移到 actions 中
  actions,
  // 当 state 中的数据需要进行处理才展示时，可使用该属性，类似于 computed 属性
  // 函数中的 state、getters 参数在调用时会自动传参
  getters,
  // 可将 store 分多个模块，每个模块下是一个新的 store
  modules: {
    moduleHome
  }
})

// 3. 导出 store
export default store
