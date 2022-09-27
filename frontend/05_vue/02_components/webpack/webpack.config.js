// const path = require('path')

module.exports = {
	entry: './src/main.js',
	output: {
		// path: path.resolve(__dirname, 'dist'),
		// publicPath: 'dist/',
		path: __dirname + '/dist',
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
				test: /\.(png|jpg|jpeg|gif)$/,
				type: 'asset',
				parser: {
					dataUrlCondition: {
						maxSize: 271 * 1024,
					},
				},
				generator: {
					filename: 'img/[name]_[hash:10][ext]',
				},
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
		],
	},
}
