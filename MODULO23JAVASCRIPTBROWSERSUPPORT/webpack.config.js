

const path = require('path');






module.exports = {
  mode: 'development',
  entry: './src/app.js',

  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: '/assets/scripts'
  },

  

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      
      //include: [path.resolve(__dirname, 'src')],
      loader: 'babel-loader',
      options: {
        presets: [['@babel/preset-env', {useBuiltIns: 'usage', corejs: 3} ]]
      }
    }, 
      ]
    }
  ,


 target: 'web', /////////////ESSE É O FIX PARA O LIVE-RELOADING QUE NÃO ESTAVA FUNCIONANDO....


    devtool: 'eval-cheap-module-source-map'
}



//presets: [['@babel/preset-env', {useBuiltIns: 'entry', corejs: 3} ]] //////OPÇÃO PARA QUANDO VOCÊ ESTIVER COM UM PROJETO QUE USE 'THIRD PARTY PACKAGES'... (que sempre precisam de polyfills que as ajudem a funcionar em browsers mais antigos).