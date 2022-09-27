import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	render: h => h(App),
})

// runtime + compiler 工作机制
// template --parse--> ast(abstract syntax tree) --compile--> render() --> virtual dom --> UI

// runtimeonly 工作机制
// render() --> virtual dom --> UI

// .vue 文件中的 template 会通过 vue-template-compiler 插件渲染成 App对象中的 render 函数
