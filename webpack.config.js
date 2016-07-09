var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path'); //helps manipulate path names more easily

// webpack setup
module.exports = {
	devtool: debug ? "inline-source-map" : null, //gives line numbers of errors for debugging
	entry: [ 
		'webpack-dev-server/client?http://127.0.0.1:8080/',
		'webpack/hot/only-dev-server',
		'./src'
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		modulesDirectories: ['node_modules', 'src'],
		extensions: ['', '.js', '.scss']
	},
	module: {
		loaders: [
		{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
		},
		{
			test: /\.scss$/,
			loaders: [
			'style',
			'css',
			'autoprefixer?browsers=last 3 versions',
			'sass?outputStyle=expanded'
			]
		}
		]
	},
	plugins: debug ? [] : [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
};
