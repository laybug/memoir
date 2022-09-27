// ES6 语法导入模块
import { add, multiple } from './js/mathTools'

console.log(add(1, 2))

console.log(multiple(2, 3))

// commonJS 语法导入模块
const { user, age, gender } = require('./js/lump.js')

console.log(user, age, gender)

// 导入 css
require('./css/normal.css')

// 导入 less
require('./css/special.less')
