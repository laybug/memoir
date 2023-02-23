function debounce(func, delay, immediate = false, resultCallback) {
  // 在外层外层计时器，方便定时器存在与否的判断和清除
  let timer = null
  // 辅助判断是否需要允许第一次的事件触发（不随便修改外界传入的参数）
  let isInvoke = true

  // 事件函数
  function _debounce(...args) {
    // 允许第一次事件触发
    if (immediate && isInvoke) {
      const result = func.apply(this, args)
      resultCallback && resultCallback(result)
      // 修改辅助变量，以便进行下一次事件的正确处理
      isInvoke = false
    } else {
      // 若已设置了计时器，清除前一次的计时，重新开始新一次的计时
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
        const result = func.apply(this, args)
        resultCallback && resultCallback(result)
      }, delay)
    }
  }

  return _debounce
}
