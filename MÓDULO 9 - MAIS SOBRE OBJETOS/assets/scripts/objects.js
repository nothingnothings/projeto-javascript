




const addMovieBtn = document.getElementById('add-movie-btn');


const searchBtn = document.getElementById('search-btn');



const movies = [];


const addMovieHandler = () => {
    //const userInput = document.querySelector('user-input');   -----> código errado, mas BOA TENTATIVA.

    //const title = document.getElementById('title'); //---> isso nos DARÁ O FULL DOM NODE, MAS O PROFESSOR NÃO ESTÁ INTERESSADO NO DOM NODE INTEIRO... Ele está interessado apenas no VALOR abrigado nesse dom node, por isso ele usa a propriedade ".value".
    const title = document.getElementById('title').value;
    const extraInfo = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if (title.trim() === '' || extraInfo.trim() === '' || extraValue.trim() === '') {
        alert('Please input movie into input fields');
        return;
    }

    const newMovie = {
        info: {
            //title,  //Deprecado. Agora temos GETTERS E SETTERS para essa propriedade 'title'. Ver código logo abaixo.

            set title(value) {
                if(value.trim() === '') {
                    this._title = 'DEFAULT';
                    return;
                }
                this._title = value;
            },
            get title() {
                //return this._title.toUpperCase();   ////É UMA FORMA MAIS ELEGANTE DE CONVERTER O 'title' À upperCase. Apesar disso, não o utilizamos aqui, pois ele faria com que outras partes de nosso código ficassem quebradas (partes relacionadas à 'getFormattedTitle()', que contém a conversão de 'toUpperCase' menos sofisticada do que essa dos getters e setters...)
                return this._title;
            },
            [extraInfo]: extraValue,
        },
       
        id: Math.random().toString(), 
        /*getFormattedTitle: function() {  /////--------> ESSA É A SINTAXE MAIS ___LONGA___ QUE ADICIONA MÉTODOS. A mais de baixo é a versão MAIS CURTA (que não é exatamente igual à primeira, nas palavras do professor, apesar da razão de serem diferentes ainda não ser possível de ser compreendida por nós.)
            return this.info.title.toUpperCase();  ////'this', aqui, faz referência a "newMovie", que é o objeto que faz com que a propriedade 'info' seja executada/exista.
        }*/
        
        getFormattedTitle() {     //CÓDIGO  (não mais; veja anotações mais acima, no getter ) DEPRECADO EM RAZÃO DOS 'getters' e 'setters' de title (principalmente o 'getter'), que nos permite, nesse caso específico (em razão do 'return this._title.toUppercase();' do 'getter'.), SEMPRE TER O 'title' afetado por 'toUpperCase()' quando tentamos o acessar/obter (getter).
            return this.info.title.toUpperCase(); //Versão mais curta/shorthand da sintaxe de adicionar métodos a um objeto.
        }   
    };  

    newMovie.info.title = title; /////UTILIZADO PARA FAZER COM QUE OS 'GETTERS' E 'SETTERS' de 'title' FUNCIONEM.
    console.log(newMovie.info.title);  ///LOG DO GETTER.
    
    movies.push(newMovie);
    console.log(newMovie);
    renderMovies();

};


const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list');

    if (movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';


    const filteredMovies = !filter
                            ? movies
                            : movies.filter(movie => movie.info.title.includes(filter));



  



    filteredMovies.forEach(movie => {
        const movieEl = document.createElement('li');
        const {info} = movie;  //ARRAY DESTRUCTURING (usado para resumir código, esse exemplo aqui troca todas as ocorrências de 'movie.info' por 'info', economizando código).
        //const {title} = info; //outro exemplo de array Destructuring. Ver anotações. Esse código faz com que todos os 'info.title' do código sejam substituídos pela versão mais curta, 'title'. isso é visto em 'let text = ...'. 
        //const {title: movieTitle} = info;   //////AINDA OUTRO EXEMPLO DE ARRAY DESTRUCTURING. ESSA É A SINTAXE UTILIZADA PARA CASOS EM QUE VOCÊ QUER A ABREVIAÇÃO DAQUELE PROPERTY NAME, VOCÊ NÃO QUER 'info.title', e sim 'title', a constante 'title', MAS VOCÊ QUER A CONSTANTE 'title' com o valor da propriedade 'title' COM OUTRO NOME... Isso ocorre quando você não quer conflitos entre o nome dessa constante que segurará a propriedade (array destructuring) com OUTRAS VARIÁVEIS QUE POSSUAM NOMES SEMELHANTES. (o nome da constante que segurará title, aqui, será 'movieTitle', e não 'title'.)
        
        
        let { getFormattedTitle} = movie;
        //let text = title + ' - ';
    
       // getFormattedTitle = getFormattedTitle.bind(movie); ////utilizado para conseguir utilizar 'this' efetivamente e sem erros.

        //let text = movie.getFormattedTitle() + ' - ';   //---> 'movie.getFormattedTitle()' é UMA SINTAXE DESNECESSÁRIA. 'movie' no início desse comando é desnecessário, pois 'getFormattedTitle' JÁ FOI EXTRAÍDO E COLOCADO EM UMA CONSTANTE POR MEIO DO OBJECT/METHOD DESTRUCTURING QUE VOCÊ VÊ LOGO ACIMA.  


        let text = getFormattedTitle.apply(movie) + ' - '; //ver anotações sobre call() e apply(), e sua relação com 'bind()'.

        //let text = getFormattedTitle() + ' - ';
        if('info' in movie) {  //Usado para determinar se certa propriedade/key está dentro de um objeto. Aqui checamos se 'info' está dentro de movie.
            console.log('yes');
        }; 



        for (const key in info) {   //ex de for in loop.
            if (key !== 'title' && key !== '_title') {
                text = text + `${key}: ${info[key]}`;  //[key], aqui, vai acessar 
            }
        }
        
        //"${key}" --> esse será O KEYNAME QUE O USUÁRIO INPUTTOU em 'extraInfo'.
        //"${movie.info[key]}" --> é a representação do "extraValue", também inputtado pelo usuário. É UM EXEMPLO DE USO DA "LÓGICA DE ACESSO DINÂMICO A PROPRIEDADES", onde key é derivada DINAMICAMENTE como parte desse FOR IN LOOP.... movie.info é o objeto, e queremos acessar o VALOR para a KEY COM AQUELE NOME que está armazenado na constante 'key'. o uso de [] dentro de um objeto, fazendo referência À UM KEYNAME, FAZ COM QUE O VALOR DO RESPECTIVO KEYNAME SEJA REFERENCIADO, E NÃO O KEYNAME EM SI. Eu tive muita confusão nessa parte da matéria:  o professor, ao digitar "${movie.info[key]", FAZ COM QUE O JAVASCRIPT PRIMEIRAMENTE PEGUE o ___segundo key-value pair____ do objeto "info" (o primeiro key-value pair, o de 'title', é completamente ignorado). Ao pegar esse key-value pair, a REFERÊNCIA EXPRESSA À .info[key] é ___ESPECIAL____. Ela não funciona como pensamos que funciona: ela na verdade faz com que O VALOR DESSA RESPECTIVA KEY SEJA ESCOLHIDO/REFERENCIADO AQUI, e __NÃO__ o seu KEYNAME (até porque isso seria meio inútil/redundante... poderíamos apenas chamar o keyName por seu valor direto, aqui, sem usar os square brackets estranhos). Por isso, quando nós escrevemos "objeto[chaveExemplo]", nós NÃO VAMOS SELECIONAR O KEYNAME DESSE OBJETO, MAS SIM O RESPECTIVO VALOR QUE ESTÁ ASSIGNADO A ELE.
        
        
        
        
        movieEl.textContent = text;
        //movieEl.textContent = movie.info.title;
        movieList.append(movieEl);
    });
};




const searchMovieHandler = () => {
    console.log(this);
    const filterTerm = document.getElementById('filter-title').value; //o ".value", aqui, é INDISPENSÁVEL.
    renderMovies(filterTerm); 
}










addMovieBtn.addEventListener('click', addMovieHandler);


searchBtn.addEventListener('click', searchMovieHandler);

 

//searchBtn.addEventListener('click', ); 