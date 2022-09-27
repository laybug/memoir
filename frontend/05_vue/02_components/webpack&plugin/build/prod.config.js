const { merge } = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = merge(baseConfig, {
	plugins: [
		// 添加丑化 js 的插件
		// new uglifyjsWebapckPlugin(),
	],
})
