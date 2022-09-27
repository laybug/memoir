export default {
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
}
