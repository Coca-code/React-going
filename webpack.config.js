var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var APP_PATH = path.resolve(ROOT_PATH, 'app');
module.exports= {
  entry: {
    app: path.resolve(APP_PATH, 'app.jsx')
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },

  //enable dev source map
  devtool: 'eval-source-map',
  //enable dev server
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: APP_PATH
  },
  module: {
    //配置preLoader,将eslint添加进入
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: APP_PATH
      }
    ],

    //配置loader,将Babel添加进入
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: APP_PATH
      }    ]
  },

  //配置插件
  plugins: [
    new HtmlwebpackPlugin({
      title: 'This is coca-code express ...'
    })
  ]
}
