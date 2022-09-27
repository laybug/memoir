export default {
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
