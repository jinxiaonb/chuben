const path = require('path');

const HTMLWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

//引入多页面文件列表
const config = require("./config");
//生成html集合
let HTMLPlugins = [];
//入口文件集合
let Entries = {};

//console.log(config);
//生成多页面集合
config.pcDirs.forEach((page) => {
	const htmlPlugin = new HTMLWebpackPlugin({
		filename: `${page}.html`,
		template: path.resolve(__dirname, `./src/pc/${page}/${page}.html`),
		chunks: [page, 'commons', 'manifest'],
	});
	HTMLPlugins.push(htmlPlugin);
	Entries[page] = path.resolve(__dirname, `./src/pc/${page}/${page}.js`);
});

module.exports = {
	entry: Entries,

	output: {
		filename: 'js/[name].js?v=[hash]',
		path: path.resolve(__dirname, "./dist/pc")
	},

	resolveLoader: {
		moduleExtensions: ['-loader']
	},

	module: {
		rules: [{
			test: /\.(css|less|scss)$/,
			use: [
				MiniCssExtractPlugin.loader,
				"css"
			]
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel',
				options: {
					presets: ['env']
				}
			}
		}, {
			test: /\.vue$/,
			exclude: /node_modules/,
			loader: 'vue'
		}, {
			test: /\.(png|svg|jpg|jpeg|gif|ogg|mp4)$/,
			use: {
				loader: 'file',
				options: {
					//打包生成图片的名字
					name: "[name].[ext]",
					//图片的生成路径
					outputPath: config.imgOutputPath
				}
			}
		}, {
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: ["file"]
		}]
	},
	resolve:{
		alias:{
			'vue$':'vue/dist/vue.common.js',
			'swiper$':'swiper/dist/js/swiper.min.js'
		}
	},

	plugins: [
		new CleanWebpackPlugin(["dist"]),
		new webpack.HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin({
			filename: "css/[name].[hash].css",
			chunkFilename:"[id].css"
		}),
		...HTMLPlugins
	],
	devServer:{
		contentBase: "./", 
		historyApiFallback:true,
		inline:true,
		hot:true
   	},
	optimization: {
		runtimeChunk: {
			name: "manifest"
		},
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: "commons",
					chunks: "all"
				}
				// styles:{
				// 	name:'styles',
				// 	test:/\.css$/,
				// 	chunks:'all',
				// 	enforce:true
				// }
			}
		}
	},
	mode: "development"
}