//const button = document.querySelector('button');

//const buttons = document.querySelectorAll('button');



const button = document.querySelector('button');

/*button.onclick = () => {console.log('test');};  */ //COMO DEFINIÇÃO DO VALOR DESSE 'onclick', desse evento, PODEM TAMBÉM SER UTILIZADAS FUNÇÕES NOMEADAS, ANONYMOUS FUNCTIONS COMUNS (sem arrow functions) E ARROW FUNCTIONS...


button.addEventListener('click', event => {
    event.stopPropagation(); ////////ISSO AFASTA O COMPORTAMENTO DE 'BUBBLING UP' DOS EVENTOS; O EVENTO NÃO CAUSARÁ TRIGGERS DE EVENTLISTENERS EM ELEMENTOS QUE ESTÃO ACIMA DESSE ELEMENTO 'BUTTON' EM QUE O EVENTO 'CLICK' OCORREU... (ou seja, os ancestrais 'div' e 'section', que englobam 'button', NÃO TERÃO SEUS ADDEVENTLISTENERS TRIGGADOS, eles não escutarão a ocorrência do evento 'click' em 'button'...)
    console.log('CLICKED BUTTON');
    console.log(event);
    console.log(this);
})






const div = document.querySelector('div');



div.addEventListener('click', event => {
    console.log('CLICKED DIV');
    console.log(event);                                                                                                                                                                                                          /*(section -> div -> button) */
}  /*, true*/)  //////////'TRUE' COMO TERCEIRO PARÂMETRO DE UM EVENTLISTENER: AFASTA A INCIDÊNCIA DO COMPORTAMENTO PADRÃO DE EXECUÇÃO DOS EVENTLISTENERS... nossa engine javascript passa, então, a executar eventlisteners em um sentido EXTERNO-> INTERNO (ao contrário do comportamento padrão, que é de sentido interno -> externo, ou seja 'button' -> 'div' -> 'section')


/*const buttonClickHandler = () => {
    alert('Button was clicked');
}*/

/*const buttonClickHandler = event => {
    console.log(event);
}*/



/*const buttonClickHandler = event => {
    event.target.disabled = true; //////TODOS EVENTOS TEM ESSA PROPRIEDADE 'DISABLED', que se for definida como 'true', acaba DESABILITANDO O ELEMENTO QUE CAUSA O EVENTO/O ELEMENTO SOBRE O QUAL O EVENTO INCIDE...
    console.log(event);

} */


/*const buttonClickHandler = event => {
    console.log(event);
}*/





//button.onclick = buttonClickHandler;  /////Segunda alternativa para adicionar eventos no nosso código. Não é tão boa, mas faz essencialmente a mesma coisa que os 'EventListeners'... NÃO É TÃO BOA QUANTO À TERCEIRA MANEIRA (addEVentListeners) PQ NÃO NOS DEIXA ATIVAR 2 FUNÇÕES/MÉTODOS A PARTIR DO MESMO EVENTO... 








/*button.addEventListener('click', buttonClickHandler);  //////////CÓDIGO BOM (terceira alternativa de adicionar eventlisteners, a melhor delas), mas que deixamos de lado para executar o que está logo abaixo, que nos MOSTRA COMO USAR (na verdade, como DEIXAR DE USAR E USAR UMA FUNÇÃO-OBJETO ARMAZENADA ANTERIORMENTE EM UMA CONST como 2o argumento do eventListener....).




setTimeout( 
    () => {
        button.removeEventListener('click', buttonClickHandler);
    }, 
    2000
); */






///button.addEventListener('click', buttonClickHandler);  /////TERCEIRA (e melhor) alternativa para adicionar eventos no nosso código.













const form = document.querySelector('form'); 




form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(event);
}) 













////////////FAÇA SEMPRE ISSO: armazene uma 'bound function' (a função com o bind de this) DENTRO DE UMA CONSTANTE PARA QUE DEPOIS VOCÊ POSSA USAR ESSE 'ENDEREÇO' DA CONSTANTE NOS ADD/REMOVE EVENTLISTENERS.... (caso você escreve diretamente o' bind()' de 'this'/outros argumentos dentro do 2o argumneto do add/removeeventListener, O CÓDIGO NÃO FUNCIONARÁ).

//FAÇA ISSO:
 /* const boundFn = buttonClickHandler.bind(this); */



//button.addEventListener('click', boundFn);



/*buttons.forEach(btn => {
    btn.addEventListener('click', buttonClickHandler);
})
*/



/*buttons.forEach(btn => {
    btn.addEventListener('mouseenter', buttonClickHandler);
})*/






/*setTimeout( 
    () => {
        buttons.removeEventListener('click', boundFn);
    }, 
    2000
);

*/






/*window.addEventListener('scroll',
event => {
    console.log(event);
});
*/


//NÃO FAÇA ISSO:

/*



button.addEventListener('click', buttonClickHandler.bind(this));



setTimeout( 
    () => {
        button.removeEventListener('click', buttonClickHandler.bind(this));
    }, 
    2000
);




*/





////////////////////////////////















/*listItems.forEach(             //////////CÓDIGO ERRADO. NÃO FUNCIONA.
    listItem => {
        listItem.addEventListener('click', () => {
            listItem.style.color = 'red'

        }
        )
    }
); */ 







/*const listItems = document.querySelectorAll('li'); 

listItems.forEach(listItem => {  
        listItem.addEventListener('click', event => {
            event.target.classList.toggle('highlight');
        });
    }
); */ /*CÓDIGO CERTO, 
mas ERRADO, 

MOSTRADO PELO PROFESSOR.


POR QUE 'ERRADO'? Porque:






1) é meio incômodo/chato ter que adicionar MÚLTIPLOS EVENTLISTENERS 

dessa forma, com o 'forEach'...



2) OUTRO PROBLEMA É O CONSUMO DE MEMÓRIA:

com esse approach, temos MUITOS EVENTLISTENERS ADICIONADOS NO NOSSO CÓDIGO...







1) é meio incômodo/chato ter que adicionar MÚLTIPLOS EVENTLISTENERS 

dessa forma, com o 'forEach'...



2) OUTRO PROBLEMA É O CONSUMO DE MEMÓRIA:

com esse approach, temos MUITOS EVENTLISTENERS ADICIONADOS NO NOSSO CÓDIGO...





















MAS QUAL SERIA A ALTERNATIVA?





O professor nos explica:





A alternativa USA ESSE 'PADRÃO DE DELEGAÇÃO' ('delegate pattern'), 


é o 'DELEGATE APPROACH '

---------------------------------



Com ele, em vez de nós ADICIONARMOS MÚLTIPLOS EVENTLISTENERS, um em cada listItem, 

NÓS NOS APROVEITAMOS DA 'EVENT PROPAGATION' (o 'bubbling up' dos eventos) PARA ESPALHAR OS EVENTLISTENERS PELOS ELEMENTOS DA PÁGINA...



PARA ISSO, DIZ O PROFESSOR, DEVEMOS GANHAR ACESSO À LISTA INTEIRA DE LIST ITEMS...





ex:




const list = document.querySelector('ul');



-------------------------------------



Feito isso, agora podemos registrar um EVENTLISTENER naquela lista (na lista inteira msm)....s



FAÇO O 'LISTEN TO' A UM CLICKEVENT na lista inteira, JÁ QUE, COMO OS EVENTOS FAZEM 

'BUBBLE UP', NÓS PODEMOS, AFINAL DE CONTAS, FAZER 'LISTEN TO' na lista que segura os 

elementos menores (os '<li>'), POIS O EVENTO 'MOUSECLICK' QUE ACONTECERÁ 

NELES CERTAMENTE IRÁ SE PROPAGAR ATÉ O ELEMENTO '<UL>' (à lista, em outras palavras)...


Podemos fazer 'listen to' do evento 'click' na LISTA EM SI, pois é assim que os eventos 

em javascript se comportam.... o clique no 'list item' IRÁ SE PROPAGAR à LISTA INTEIRA que está 
o segurando...


(esse é comportamento DA MAIORIA dos eventos em javascript.)








Então, escrevemos:





ex:




const list = document.querySelector('ul');




list.addEventListener('click', 




)



------------------------------------------




O PROFESSOR ENTÃO COPIA A LÓGICA usada no approach anterior, de usar 'event.target.classList.toggle('highlight')', E A INSERE NESSE ADDEVENTLISTENER DE 'list'...





ex:







const list = document.querySelector('ul');




list.addEventListener('click', 
                        
               event =>  {
                   event.target.classList.toggle('highlight');
               }


)

------------------------------



ESSA LINHA DE CÓDIGO AINDA FUNCIONA EM 'LIST' pq eu 

_________AINDA VOU QUERER USAR_____ O 'EVENT TARGET' E 


AINDA VOU QUERER FAZER O TOGGLE DE '.highlight'....



E ISSO, BTW, É OUTRA DAS VANTAGENS DE 'EVENT.TARGET', DIZ O PROFESSOR:



______________AINDA QUE MEU LISTENER ESTEJA REGISTRADO NA 'LIST' EM SI, O EVENT.TARGET 
            SE REFERIRÁ AO TARGET DE VERDADE (ou seja, ao LIST ITEM em que o click event ocorreu...), 
            AO TARGET EM QUE O USUÁRIO REALMENTE CLICOU...

            *****NESSE EXEMPLO, O TARGET EM QUE O USUÁRIO REALMENTE CLICA É O 'LIST ITEM'...



































EIS AQUI O CÓDIGO:



*/







const list = document.querySelector('ul');



list.addEventListener('click', event => {
    event.target.classList.toggle('highlight');
    form.submit();  ///////TRIGGER PROGRAMÁTICO DE EVENTO. POR MEIO DESSE CHAMADO DO MÉTODO 'SUBMIT()' EM 'form', acabamos VINCULANDO/COMBANDO A OCORRÊNCIA DO EVENTO 'CLICK' EM UM LIST ITEM (settado por meio deste nosso bloco de código aqui) COM A ATIVAÇÃO DO SUBMIT DE 'FORM'...
})                  ///OBS:: CLICAR EM QUALQUER PEDAÇO/PARENTE DE 'LI' AQUI ACABARÁ FAZENDO COM QUE ESSE CLICK SEJA UM CLICK EM 'LI'...









