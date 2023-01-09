const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  simpleDevServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000
  }
};
