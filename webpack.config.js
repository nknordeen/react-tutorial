module.exports = {
	entry: ['./public/scripts/app.es6.js', 'react-dom'],
	output: {
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.es6.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},

	resolve: {
		extensions: ['', '.js']
	}
}