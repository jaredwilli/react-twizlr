const webpack = require('webpack');

module.exports = {
	module: {
		loaders: []
	},
	watch: true,
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('test')
		})
	]
};
