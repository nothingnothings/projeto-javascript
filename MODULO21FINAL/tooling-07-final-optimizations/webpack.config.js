const path = require('path');
//const CleanPlugin = require('clean-webpack-plugin');


/*
module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: './assets/scripts'
    
  },
  devtool: 'eval-cheap-module-source-map',
  // devServer: {
  //   contentBase: './'
  // }
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
  ]
};

*/




module.exports = {

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      
      //include: [path.resolve(__dirname, 'src')],
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }, 
      ]
  },





  mode: 'development',
  //entry: './src/app.js',
  entry: './src/app.js',  ////CORRIGI
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: '/assets/scripts' ////CORRIGI. O PROBLEMA ERA O '/'.
    
  },
  devtool: 'eval-cheap-module-source-map',
  //  devServer: {
  //    contentBase: './'   ////////Eu tirei isso e o plugin de 'clean-webpack-plugin' para fazer tudo funcionar...
  //  },


  plugins: [
    //new CleanPlugin.CleanWebpackPlugin()
  ]
};