// 使用闭包（立即执行函数）的方式分割作用域，将要导出的内容使用一个对象返回
// lump1 = (function () {
// 	let name = '一叶秋'
// 	let age = 22

// 	function technic() {
// 		console.log('两袖青蛇')
// 	}

// 	return { name, age, technic }
// })()

// ES6 的 export 与 import
let moduleName = 'lump1'

let age = 22

let height = 1.88

// 可批量导出
export { age, height }

// 可单独导出
export let user = '一叶秋'

export function sum(array) {
	return array.reduce((preValue, currentValue) => preValue + currentValue, 0)
}

// 默认导出（先定义，再导出）
let password = 'select * from info'

// 一个模块中只能有一个 default
export default { password, height }
