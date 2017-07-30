var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');

var BUILD_DIR = path.resolve(__dirname, 'dist');

var CopyWebpackPlugin = require('copy-webpack-plugin');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: {
    app: APP_DIR + '/Main.js' 
  }, 
   
  output: {
    path: BUILD_DIR,
    filename: 'bundle.[chunkhash].js'
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
        filename: 'vendor.bundle.[chunkhash].js',
        minChunks:  function(module, count) {
            var context = module.context;
            return context && context.indexOf('node_modules') >= 0;
        }
    }),
      new webpack.optimize.UglifyJsPlugin({
          compress: {
            screw_ie8: true, // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
            warnings: false,
        }
    }),
    
      new HtmlWebpackPlugin({
        title: 'My Product App',
        filename: 'index.html', //output file name
        template: './template.html' //input file
      }),

      new CopyWebpackPlugin([
      {
        from: "assets",
        to: "assets"
      },
      // {
      //   from: "index.html",
      //   to: "index.html"
      // }
    ])
    
  ]

};

module.exports = config;