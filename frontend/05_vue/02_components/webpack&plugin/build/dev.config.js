const { merge } = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = merge(baseConfig, {
	// 添加开发时自动编译的服务插件
	devServer: {
		static: {
			directory: __dirname + '/dist',
		},
		open: true,
	},
})
