const path = require('path');
const pkg = require('./package.json');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const LIB_NAME = pkg.name;

module.exports = {
	entry: {
		[LIB_NAME]: path.resolve(__dirname, 'src')
	},
	output: {
		library: 'ReactTwizlr',
		filename: '[name].js',
		libraryTarget: 'commonjs2',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		loaders: []
	},
    externals: ['react'],
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	]
};
