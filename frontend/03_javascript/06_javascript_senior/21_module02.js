/***** commonJS 导入 *****/
// const { name, age, sub } = require('./21_module01')

/***** ESModule 导入 */
// 导入方式 1
// import { name, age, sub } from './21_module01.js'
// console.log(name, age)
// console.log(sub(18, 12))

// 导入方式 2（通配符导入）
// import * as identifier from './21_module01.js'
// console.log(identifier.name)
// console.log(identifier.age)
// console.log(identifier.sub(18, 12))

// 导入方式 3 （默认导入）
import shadow from './21_module01.js'
console.log(shadow)

// module 路径
// console.log(import.meta)
