// 生成器函数
// function* foo(action) {
//   console.log(action + 'is playing...')

//   let name1 = '柳神'
//   console.log(`------${name1}专场------`)
//   let name2 = yield name1

//   console.log(`------${name2}专场------`)
//   let name3 = yield name2

//   console.log(`------${name3}专场------`)
//   yield name3
// }

// let generator = foo('《完美世界》')

// // console.log(generator.next())
// // console.log(generator.next('石昊'))
// // console.log(generator.next('毛球'))
// // console.log(generator.next())

// /** log:
//  * 完美世界》is playing...
//  * ------柳神专场------
//  * { value: '柳神', done: false }
//  * ------石昊专场------
//  * { value: '石昊', done: false }
//  * ------毛球专场------
//  * { value: '毛球', done: false }
//  * { value: undefined, done: true }
//  */

// // return 方法可使生成器终止，停止执行后续代码
// // console.log(generator.next())
// // console.log(generator.return())
// // console.log(generator.next())
// /** log:
//  * 《完美世界》is playing...
//  * ------柳神专场------
//  * { value: '柳神', done: false }
//  * { value: undefined, done: true }
//  * { value: undefined, done: true }
//  */

// // throw 可抛出异常，若没做 try ... catch 处理，则会终止后续代码，若做了 try ... catch 则会继续执行
// console.log(generator.next())
// console.log(generator.throw('都结束啦～～～'))
