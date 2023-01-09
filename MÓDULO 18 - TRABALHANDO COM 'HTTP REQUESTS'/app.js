

const listElement = document.querySelector('.posts');

const postTemplate = document.getElementById('single-post');



const form = document.querySelector('#new-post form');




const fetchButton = document.querySelector('#available-posts button'); 


const postList = document.querySelector('ul');








/* Versão velha (e BÁSICA) do código.


const xhr = new XMLHttpRequest();






xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');



xhr.onload = function() {

  const listOfPosts = JSON.parse(xhr.response);
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector('h2').textContent = post.title.toUpperCase();
    postEl.querySelector('p').textContent = post.body;
    listElement.append(postEl);
  }






  console.log(listOfPosts); 

}


xhr.send();

*/





/*
VERSÃO ___ANTIGA___ dessa função, dessa função que criamos para FAZER O GET de posts e run de outros métodos http (por meio de um REQUEST de tipo 'GET')...
MAIS ABAIXO VOCÊ 

VÊ A VERSÃO MDOERNA, QUE usa a API 'fetch()'...

function sendHttpRequest(method, url, data) {


  const promise = new Promise(
    (resolve, reject) => {
  
  
  
        const xhr = new XMLHttpRequest();
  
    xhr.open(method, url); 

    xhr.responseType = 'json';
  
  xhr.onload = function() {
      resolve(xhr.response); 
  /////////O CÓDIGO AQUI FICA BEM MAIS LIMPO, ''LEAN'', pois o código todo que estava aqui foi movido para a função 'fetchPosts'.
    };


    xhr.onerror = function() { ////'onerror' -----------> EVENT LISTENER que trigga sempre que houver um 'erro'... por isso 'onerror'.
      console.log(xhr.response);
      console.log(xhr.status); 
  }


  xhr.send(JSON.stringify(data));
    });
  
  
  
  return promise; 
  }


  */
  


//VERSÃO MODERNA DO 'sendhttprequest'.....
  function sendHttpRequest(method, url, data) {

    



      return fetch(url, {
        method: method,
        body: JSON.stringify(data),  ////////esse valor de 'JSON.stringify(data)' deve ser alterado para apenas 'data' SE QUISERMOS UTILIZAR 'FORM DATA'...
        headers: {  /////////esses headers DEVERÃO SER REMOVIDOS caso optemos por usar 'FORM DATA'...
          'Content-Type': 'application/json' ////////////ESSA É A MANEIRA PELA QUAL ADICIONAMOS HEADERS AOS NOSSOS REQUESTS...
        }
      }).then(response => {
        console.log('clicked');
        if(response.status >= 200 && response.status < 300) {
          return response.json();
        } else {
          return response.json().then(errData => {
            console.log(errData);
            throw new Error('Something went wrong - server-side.');
          });
        }
        
      })
      .catch(error => {
        console.log(error);
        throw new Error('Something went wrong!');
      })
    

  


      /*















*/
  };



























  
  
  
/*versão 'PADRÃO' DO CÓDIGO DE 'PROMISIFYING' de fetchPosts (VERSÃO QUE NÃO USA ASYNC/AWAIT)...*/
  /*
  function fetchPosts() {
    
    sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts').then(
      
      responseData => {
  const listOfPosts = responseData; ////////////EIS O CÓDIGO EM QUESTÃO.
      for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector('h2').textContent = post.title.toUpperCase();
      postEl.querySelector('p').textContent = post.body;
      postEl.querySelector('li').id = post.id;
      listElement.append(postEl);
  
    }
  })
} */
  




async function fetchPosts() {



  try{
    const responseData = await sendHttpRequest(
      'GET', 
      'https://jsonplaceholder.typicode.com/posts'
    ); //////EIS O CÓDIGO EM QUESTÃO.
  const listOfPosts = responseData;  
      for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector('h2').textContent = post.title.toUpperCase();
      postEl.querySelector('p').textContent = post.body;
      postEl.querySelector('li').id = post.id;
      listElement.append(postEl);
    }
  } catch(error) {
    console.log('Something went wrong...');
  }
  }


















async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId
  };

/*                                VER AULA SOBRE 'FORM DATA', um DATA TYPE DE JAVASCRIPT QUE PODE SER ÚTIL PARA ENVIAR INFORMAÇÕES DOS USUÁRIOS A SERVIDORES...
  const fd = new FormData(form); /////'form' ========= 'const form = document.querySelector('#new-post form');'
  fd.append('title', title);
  fd.append('body', content);
  fd.append('userId', userId);
*/



  sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);


}








  

//fetchPosts();









createPost('DUMMY', 'A dummy post!');







/*fetchButton.addEventListener('click', event => {      ////////////USAMOS ESSA SINTAXE DO ''EVENTO COMO SEGUNDO PARÂMETRO'' PARA CONSEGUIR SELECIONAR APENAS O BOTÃO (E NÃO A SEÇÃO INTEIRA) COM AQUELE IF CHECK DO tagName... (que sempre retorna seu resultado em maiúsculas, por isso o check de 'BUTTON'.)
  
  
  if (event.target.tagName === 'BUTTON') {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const enteredTitle = event.currentTarget.querySelector('#title').value;
      const enteredContent = event.currentTarget.querySelector('#content').value;
    })
   
    fetchPosts();
  }
});
*/

fetchButton.addEventListener('click', fetchPosts);
form.addEventListener('submit', event => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector('#title').value;
  const enteredContent = event.currentTarget.querySelector('#content').value;

  createPost(enteredTitle, enteredContent);
  
  
});











postList.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON') {
      console.log('Clicked on Button!');
      const postId = event.target.closest('li').id;
      const visualPost = event.target.closest('li');
      console.log(postId);
      sendHttpRequest('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`);
      visualPost.remove();      ////////////ISSO VAI REMOVER O 'LI' DE NOSSO DOM E DA INTERFACE VISUAL DO USUÁRIO...
  }
})









/*VERSÃO ALTERNATIVA DO CÓDIGO 'PROMISIFADO' de 'fetchPosts. ESSA VERSÃO UTILIZA 'async/await'. BTW: ambas versões funcionam */



/*










const listElement = document.querySelector('.posts');

const postTemplate = document.getElementById('single-post');







function sendHttpRequest(method, url) {


  const promise = new Promise(
    (resolve, reject) => {
  
  
  
        const xhr = new XMLHttpRequest();
  
    xhr.open(method, url); 

    xhr.responseType = 'json';
  
  xhr.onload = function() {
      resolve(xhr.response); 
    }
  xhr.send();
    });
  
  
  
  return promise; 
  }






async function fetchPosts() {
  const responseData = await sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts'); //////EIS O CÓDIGO EM QUESTÃO.
const listOfPosts = responseData;  
    for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector('h2').textContent = post.title.toUpperCase();
    postEl.querySelector('p').textContent = post.body;
    listElement.append(postEl);
  });
}












*/