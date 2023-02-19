/***** commonJS 导出 *****/
const name = 'shadow'
const age = 1

function sub(param1, param2) {
  return param1 - param2
}

// 导出方式 1
// exports.name = name
// exports.age = age
// exports.sub = sub

// 导出方式 2
// module.exports = {
//   name,
//   age,
//   sub
// }

// commonJS 内部实现为
// module.exports = {}
// exports = moudule.exports

// 以下方式是不能导出的，因为 exports 被赋值了新的对象，不再指向 module.exports 所指向的对象了
// exports = { name, age, sub }

/***** ESModule 导出 *****/

// 导出方式 1
// export { name, age, sub }

// 导出方式 2 （通配符导出）。常用于包内 index 文件对其它文件的导出
// export * from 'filepath'

// 导出方式 3（默认导出）
// 1. export { name as default, age, sub }
export default name
