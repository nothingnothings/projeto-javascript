const path = require('path');
const webpack = require('webpack');




module.exports = {
  mode: 'development',
  entry: {
    'SharePlace': './src/SharePlace.js',
    'MyPlace': './src/MyPlace.js'
},


  output: {
      //filename: 'app.js', 
      filename: '[name].js',

      path: path.resolve(__dirname, 'dist', 'assets', 'scripts'),
      publicPath: '/assets/scripts'
  },


  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            
            //include: [path.resolve(__dirname, 'src')],
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', {useBuiltIns: 'usage', corejs: 3} ]]
            }
          }, 
            
    ]
  },

  target: 'web', 

  devtool: 'eval-cheap-module-source-map',


  devServer: {
    contentBase: './dist'
  }
}