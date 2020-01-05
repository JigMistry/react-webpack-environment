const path = require('path');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.common.config.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(webpackBaseConfig, {
	// plugins: [...webpackBaseConfig.plugins, new Dotenv({
	// 	path: path.resolve(__dirname, '../.env.development'),
	// })]
});
