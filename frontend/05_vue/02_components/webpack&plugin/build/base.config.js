const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const uglifyjsWebapckPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
	entry: './src/main.js',
	output: {
		// 用于指定图片的存放位置、htmlWebpackPlugin 插件插入的 script 标签的 src 地址(作用于后者时需要将其注释，否则可能产生错误不生效)
		// publicPath: 'dist/',
		path: __dirname + '/../dist',
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader'],
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015'],
					},
				},
			},
			{
				test: /\.vue$/,
				use: ['vue-loader'],
			},
		],
	},
	plugins: [
		// 添加版权的插件
		new webpack.BannerPlugin('最终解释权归我所有！ -- iris'),
		// 添加自动将 index.html 页面添加到 dist/ 文件夹并自动生成模版的插件
		new htmlWebpackPlugin({
			template: 'index.html',
		}),
	],
	resolve: {
		alias: {
			vue$: 'vue/dist/vue.esm.js',
		},
	},
	mode: 'development',
}
