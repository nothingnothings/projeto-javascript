const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    shop: './src/non-optimized/shop.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'projetonovo','dist', 'assets', 'scripts'),
    publicPath: 'assets/scripts/',
    // chunkFileName:
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './projetonovo/dist'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                { useBuiltIns: 'usage', corejs: { version: 3 } }
              ]
            ]
          }
        }
      }
    ]
  },
  plugins: [new CleanPlugin.CleanWebpackPlugin()]
};
