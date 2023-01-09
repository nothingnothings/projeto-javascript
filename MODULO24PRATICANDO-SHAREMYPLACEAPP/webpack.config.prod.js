const path = require('path');
const webpack = require('webpack');




module.exports = {
  mode: 'production',
  entry: './src/app.js',


  output: {
      filename: '[contenthash].js', 
      path: path.resolve(__dirname, 'assets', 'scripts'),
      publicPath: '/assets/scripts'
  },


  module: {
    rules: []
  },

  target: 'web', 

  devtool: 'eval-cheap-module-source-map',


  devServer: {
    open: true,
    host: 'localhost'
  }
}