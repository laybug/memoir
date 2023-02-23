function throttle(func, interval, options = { leading: true, trailing: false, resultCallback }) {
  let timer = null
  // 上一次事件触发的时间
  let lastTime = 0

  function _throttle(...args) {
    if (!lastTime && !options.leading) lastTime = Date.now()

    // 计算当前触发事件距离 interval 的剩余时间
    const remainTime = interval - (Date.now() - lastTime)

    if (remainTime <= 0) {
      // remainTime 先于计时器满足 interval 时，清除计时器
      timer && clearTimeout(timer)
      timer = null
      const result = func.apply(this, args)
      options.resultCallback && options.resultCallback(result)
      lastTime = Date.now()
    }

    if (options.trailing && !timer) {
      timer = setTimeout(() => {
        const result = func.apply(this, args)
        options.resultCallback && options.resultCallback(result)
        // 当此处的计时器先于 remainTime 满足 interval 时，将此刻时间赋值给 lastTime
        lastTime = Date.now()
        timer = null
      }, interval)
    }
  }

  return _throttle
}
