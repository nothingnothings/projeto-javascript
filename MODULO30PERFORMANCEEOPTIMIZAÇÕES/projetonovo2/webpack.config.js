const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');
//const { asyncIterator } = require('core-js/fn/symbol');

module.exports = {
  //mode: 'development',
  mode: 'production',  //ESSA É A MANEIRA DE FAZER RODAR O CÓDIGO DE PRODUÇÃO DE NOSSO PROJETO NO SERVIDOR DE DESENVOLVIMENTO DO WEBPACK (em vez do comum, que é rodar o código de DESENVOLVIMENTo no servidor de desenvolvimento/development do webpack...)

  entry: {
    shop: './src/optimized/shop.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'assets', 'scripts'),
    publicPath: 'assets/scripts/'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist'
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
