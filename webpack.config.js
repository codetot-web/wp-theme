const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const devMode = process.env.NODE_ENV === 'development'

module.exports = {
	entry: {
		frontend: path.resolve(process.cwd(), './src/frontend.js')
	},
	output: {
		path: path.resolve(__dirname, 'assets'),
		filename: !devMode ? './js/[name].min.js' : './js/[name].js',
		clean: true
	},
	watch: devMode,
	devtool: 'eval-cheap-source-map',
	resolve: {
		alias: {
			lib: path.resolve(process.cwd(), './src/js/lib/'),
			components: path.resolve(process.cwd(), './src/js/components/')
		},
		extensions: ['.js', '.jsx'],
		modules: ['node_modules']
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				resolve: {
					extensions: ['.js', '.jsx']
				},
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(sa|sc)ss$/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					devMode
						? {
								loader: 'css-loader',
								options: {
									sourceMap: true
								}
						  }
						: 'css-loader',
					'sass-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								parser: 'postcss-scss',
								plugins: [require('autoprefixer')]
							}
						}
					}
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: devMode ? './css/[name].css' : './css/[name].min.css'
		}),
		// Lint CSS.
		new StyleLintPlugin({
			context: path.resolve(process.cwd(), './src/scss/'),
			files: '**/*.scss'
		}),
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 3000,
			watch: true,
			proxy: {
				target: 'http://team.test/',
				proxyReq: [
					(proxyReq) => {
						proxyReq.setHeader(
							'X-Codetot-Child-Theme-Header',
							process.env.NODE_ENV
						)
					}
				]
			}
		})
	],
	externals: {
		jQuery: 'jQuery'
	}
}
