class Bus {
  constructor() {
    this.bus = {}
  }

  on(tag, callback, thisArg) {
    // 不存在时，新建 tag
    this.bus[tag] ||= []
    // 已存在 tag 时，加入新的 callback
    this.bus[tag].push({ callback, thisArg })
  }

  emit(tag, ...payload) {
    if (this.bus[tag]) {
      this.bus[tag].forEach(handler => {
        handler.callback.apply(handler.thisArg, payload)
      })
    } else {
      return
    }
  }

  off(tag, callback) {
    this.bus[tag] = this.bus[tag].filter(hander => hander.callback !== callback)
  }
}

function event1(params) {
  console.log('山猫，我是老鹰 🦅 。', this, params)
}

function event2(params) {
  console.log('山猫，我是山鸡 🐔 。', this, params)
}

const bus = new Bus()

bus.on('shadow', event1, 'iris')
bus.on('shadow', event2, 'ladybug')
bus.emit('shadow', ['可乐', '妞妞'])

bus.off('shadow', event2)
bus.emit('shadow', ['冬瓜', '豆豆'])
