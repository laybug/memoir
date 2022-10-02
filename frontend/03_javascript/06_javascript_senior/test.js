function outer(name) {
  var addr = '云深不知处'

  return function () {
    debugger
    console.log(name)
  }
}

var inner = outer('shadow')
