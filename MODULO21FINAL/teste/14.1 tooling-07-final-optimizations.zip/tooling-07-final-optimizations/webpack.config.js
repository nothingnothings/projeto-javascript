const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: '/assets/scripts/' ///////////////O PROBLEMA ERA UM MALDITO '/' NESSA PARTE DO CÓDIGO..... O '/' ESTAVA FODENDO __TUDO___.
  },
  devtool: 'eval-cheap-module-source-map',
  // devServer: {
  //   contentBase: './'
  // }
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
  ]
};