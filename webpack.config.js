const path = require('path');

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
  	inline: true,
  	contentBase: './public',
  	port: 8000
  },
  module: {
  	loaders: [
  		{
  			test: /\.js$/,
  			loader: 'babel-loader',
  			exclude: /node_modules/,
  			query: {
  				cacheDirectory: true,
  				presets:["env", "react"]
  			}
  		},
  		{ 
	    	test: /\.(css|scss)$/, 
	    	use: [
	          	{ loader: "style-loader" },
	          	{ loader: "css-loader",
		          	options: {
	                    sourceMap: true
	                } 
            	},
            	{loader: "sass-loader"}
	        ]
	    },
	    {
	        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
	        loader: 'url-loader'
	    },
	    {
	        test: /\.(png|jpg|gif)$/,
	        loader: 'file-loader',
	        options: {
			    name: '[sha512:hash:base64:7].[ext]'
			}
	        
	    }
  	]
  },
  devtool: "source-map"
};