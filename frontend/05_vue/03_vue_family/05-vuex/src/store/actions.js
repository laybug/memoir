export default {
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
}
