// 导入 css 文件
require('./css/common.css')

// 导入 less 文件
require('./css/special.less')

// 往页面中写入内容
document.writeln('hello webpack!')

import Vue from 'vue'

import App from './vue/App.vue'

// const App = {
// 	template: `<div><h2>呜呜</h2></div>`,
// }

new Vue({
	el: '#app',
	template: '<App />',
	components: {
		App,
	},
})
