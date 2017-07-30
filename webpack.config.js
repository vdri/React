var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');

var BUILD_DIR = path.resolve(__dirname, 'dist');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: {
    app: APP_DIR + '/Main.js' 
  }, 
   
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
 

  module : {
    loaders : [
      {
        test : /\.js?/,
        include : APP_DIR,
        loaders: ["babel-loader"]
      }
 
    ]
  },
 

  devtool: 'source-map',

  plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.bundle.js',
        minChunks:  function(module, count) {
            var context = module.context;
            return context && context.indexOf('node_modules') >= 0;
        },
    }),

    new HtmlWebpackPlugin({
        title: 'My Product App',
        filename: 'index.html', //output file name
        template: './template.html' //input file
      })

    
  ]

};

module.exports = config;