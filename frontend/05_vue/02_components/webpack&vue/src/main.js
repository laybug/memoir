// 导入 css
require('./css/normal.css')

// 导入 less
require('./css/special.less')

// 导入 vue
import Vue from 'vue'

// new Vue({
// 	el: '#app',
// 	data: {
// 		message: 'hello webpack!',
// 	},
// })

// 在 vue 实例中使用 template 属性会替换 el 挂载的 DOM
// new Vue({
// 	el: '#app',
// 	template: `
// 	<div>
// 		<h2>{{message}}</h2>
// 	</div>
// 	`,
// 	data: {
// 		message: 'hello webpack!',
// 	},
// })

// 将上述 template 可封装成为一个组件
// const App = {
// 	template: `
// 	<div>
// 		<h2>{{message}}</h2>
// 		<p>我是 Vue 实例的 template 的进一步封装</p>
// 	</div>
// 	`,
// 	data() {
// 		return {
// 			message: 'hello webpack!',
// 		}
// 	},
// }

// new Vue({
// 	el: '#app',
// 	template: '<App />',
// 	components: {
// 		App,
// 	},
// })

// 我们直接使用 .vue 文件进行封装
import App from './vue/App.vue'

new Vue({
	el: '#app',
	template: '<App />',
	components: {
		App,
	},
})
