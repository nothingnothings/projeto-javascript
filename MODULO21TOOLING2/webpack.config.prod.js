/* eslint-disable array-bracket-newline */
/* eslint-disable quote-props */
//esse é o arquivo de configuração de PRODUCTION do webpack... é usado para configurar a fase de PRODUCTION, e não de DEVELOPMENT... 
const path = require('path');
const {CleanWebpackPlugin} = require('webpack'); ///adicionado automaticamente pela instalação do 'clean-webpack-plugin'?
//const CleanPlugin = require('clean-webpack-plugin');  /////CÓDIGO ANTIGÃO, NÃO MAIS USADO, substituído pelo logo acima.




module.exports = {


    devServer: {
        contentBase: './dist' 
    
    },
    devtool: 'cheap-source-map', ////É isso que muda tudo; essa definição de source map É USADA PARA A PRODUCTION PHASE... é menos usado para debugging, e mais para 'minificar'/uglify nosso código base/original para que RODE MAIS RÁPIDO. 

    entry: './src/app.js',
    
    mode: 'production',
   

    node: {
        
    },
    output: {
        //filename: 'app.js',  //versão 'PADRÃO' de filename. Isso fará com que o browser sempre utilize as versões CACHEADAS de nossos arquivos quando o usuário entrar nas nossas páginas...
        filename: 'app.js', ///VERSÃO 'ALTERNATIVA' de filename. Isso deixará "pseudoaleatórios" os nomes de nossos arquivos, resultando no fenômeno que fará o browser SEMPRE RE-BAIXAR NOSSOS ARQUIVOS QUANDO O USUÁRIO ENTRAR NOS NOSSOS SITES. (é o contrário do 'filename' padrão, que admite o uso de versões CACHEADAS/cópias armazenadas no storage do browser de nosso site...) OBS: ESSA COISA DE FILENAMES COM 'contenthash', essa keyword 'contenthash', SÓ DEVE SER USADA NO webpack de PRODUÇÃO (webpack.config.prod.js), pois no development é INÚTIL (em development, não teremos essa variável dos USUÁRIOS ENTRANDO NOS NOSSOS SITES).
        path: path.resolve(__dirname, 'dist')
        //, publicPath: 'assets/scripts'
  
    },
    plugins: [
        //new CleanPlugin.CleanWebpackPlugin()
        //o código acima causou problemas no nosso código: ele acaba deletando o index.html junto com outros arquivos de production, o que faz com que sejamos incapazes de executar nosso servidor.
        //new CleanPlugin.CleanWebpackPlugin(),
        new CleanWebpackPlugin({cleanStaleWebpackAssets: false})
    ],

    resolve: {
        extensions: ['.js']
    }
    

  

  
};