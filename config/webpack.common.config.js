const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry : {
		main: path.resolve(__dirname, '../src/index.js'),
		vendor: path.resolve(__dirname, '../src/vendor.js'),
	},
	output : {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            "@babel/preset-react"
                        ],
                        plugins : [
                          '@babel/plugin-proposal-class-properties'
                      	]	
                    }
                }
            },
            {
            	test: [/.css$|.scss$/],
            	exclude: /(node_modules)/,
                use: [
                	MiniCssExtractPlugin.loader,
                	'css-loader', 
                	'sass-loader'
                ]
            }
        ]
	},
	resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src')
        },
        modules: [
            'node_modules',
            path.resolve(__dirname, '../src')
        ],
        extensions: ['.js', '.jsx']
    },
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/index.html'),
			inject: true,
			minify: {
                removeComments: true,
                collapseWhitespace: false
            }
		}),
		new MiniCssExtractPlugin({
            filename: 'style.[chunkhash].css'
        }),
	]
}