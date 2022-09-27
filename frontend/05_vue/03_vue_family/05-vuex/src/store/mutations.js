import INCREMENT from './mutationsTypes'

export default {
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
}
