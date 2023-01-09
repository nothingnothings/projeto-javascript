/* eslint-disable array-bracket-newline */
/* eslint-disable quote-props */
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
//const CleanPlugin = require('clean-webpack-plugin'); ///código ANTIGÃO, não mais usado.





module.exports = {


    devServer: {
        contentBase: './src' /////É O LOCAL ONDE SEU ARQUIVO 'ROOT HTML' está posicionado. Geralmente é o MESMO LUGAR EM QUE FICA O 'webpack.config.js'... por isso você coloca './' (OBS: VOCê TAMBÉM PODE OMITIR o valor aqui, pois o default é esse aí msm).
    
    },
    devtool: 'eval-cheap-module-source-map',

    entry: './src/app.js',
    
    mode: 'development',
   

    node: {
        
    },
    output: {
        filename: 'app.js', 
        path: path.resolve(__dirname, 'dist')
        //, publicPath: 'assets/scripts'
  
    },

    plugins: [
        //new CleanPlugin.CleanWebpackPlugin() ////////ISSO VAI APLICAR/ADICIONAR NOSSO PLUGIN DE 'clean-webpack-plugin'... ----> esse plugin nos ajuda a criar menos arquivos em 'output'/no output folder... 
        //o código acima causou problemas no nosso código: ele acaba deletando o index.html junto com outros arquivos de production, o que faz com que sejamos incapazes de executar nosso servidor.
        //new CleanPlugin.CleanWebpackPlugin(),
        new CleanWebpackPlugin({cleanStaleWebpackAssets: false})
    ], ///professor nos ensina que também devemos adicionar isso em 'webpack.config.prod.js'...


    resolve: {
        extensions: ['.js']
    }
    

  

  
};