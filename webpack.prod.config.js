var webpack = require('webpack')
var path = require('path')
var CopyWebpackPlugin = require('copy-webpack-plugin');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin

module.exports = {
	entry: [
		path.resolve(__dirname, 'app/main.jsx'),
	],
	output: {
		path: __dirname + '/build',
		publicPath: '/',
		filename: './bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js[x]?$/, include: path.resolve(__dirname, 'app'), exclude: /node_modules/, loader: 'babel-loader' }
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new uglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new CopyWebpackPlugin([
			{ from: './app/index.html', to: 'index.html' }
		]),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	]
}