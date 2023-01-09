const path = require('path');











module.exports = {
  mode: 'development',

  entry: './src/app.js',  ////CORRIGI
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: '/assets/scripts' ////CORRIGI. O PROBLEMA ERA O '/'.
    
  },
  module: { /////////CÓDIGO QUE IMPLEMENTA/CONFIGURA O 'BABEL-LOADER'..
    rules: [
      { 
       
        test: /\.m?js$/,
       
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  },


  devtool: 'eval-cheap-module-source-map',
  //  devServer: {
  //    contentBase: './'   ////////Eu tirei isso e o plugin de 'clean-webpack-plugin' para fazer tudo funcionar...
  //  },


  plugins: [
    //new CleanPlugin.CleanWebpackPlugin()
  ]
};