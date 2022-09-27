import { sum } from './16-lump1.js'

// 导入默认导出值，不需要使用对象（{}）
import defaultVlue from './16-lump1.js'

// 出所有导出值并起别名
import * as lump1 from './16-lump1.js'

let moduleName = 'lump2'

if (moduleName == 'lump2') {
	console.log('lump2 ------->')
}

console.log(sum([1, 2, 3, 4]))

console.log(defaultVlue)

console.log(lump1.user)

console.log(lump1.sum([1, 2, 5, 7, 9]))

console.log(lump1.age)
