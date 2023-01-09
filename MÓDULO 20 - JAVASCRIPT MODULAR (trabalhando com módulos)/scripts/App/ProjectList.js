



import {ProjectItem as itemProjeto} from './ProjectItem.js';

//import {DOMHelper} from '../Utility/DOMHelper.js';


//import * as DOMH from '../Utility/DOMHelper.js'; 

import {DOMHelper} from '../Utility/DOMHelper.js';



export class ProjectList {


    projects = [];
    
    constructor(type) {




        this.type = type;
        const prjItems = document.querySelectorAll(`#${type}-projects li`);
        for (const prjItem of prjItems) {
            this.projects.push(new itemProjeto(prjItem.id, this.switchProject.bind(this), this.type)); //////DEPENDENCY.
        }
        //console.log(projectItems);
        console.log(this.projects);
        this.connectDroppable();
    }



    setSwitchHandlerFunction(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction;
    }

    connectDroppable() {
        const list = document.querySelector(`#${this.type}-projects ul`);

        list.addEventListener('dragenter', event => {  ///////O EVENTO 'DRAGENTER' é opcional...
        if(event.dataTransfer.types[0] === 'text/plain') {
            list.parentElement.classList.add('droppable');
            event.preventDefault(); ////PREVENTDEFAULT AQUI É OPCIONAL, ao contrário do 'preventDefault' em DRAGOVER, que ___não é opcional___. AINDA ASSIM, colocamos ele aqui, só para garantir.
        }
        
        });
    






        list.addEventListener('dragover', event => {     ////////O EVENTO 'DRAGOVER', PARA A DEFINIÇÃO DE 'DROPZONES' DE INTERAÇÕES DRAG AND CLICK, ___NÃO É OPCIONAL___; NÃO É OPCIONAL COMO O 'dragenter'...
        if(event.dataTransfer.types[0] === 'text/plain') {
        event.preventDefault();
    }
        });

        list.addEventListener('dragleave', event => {
            if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {
            list.parentElement.classList.remove('droppable');
            }}
        );


        list.addEventListener('drop', event => {
            const prjId = event.dataTransfer.getData('text/plain'); 
            if(this.projects.find(p => p.id === prjId)) { ///////HIPÓTESE EM QUE O USUÁRIO SOLTA O PROJECTITEM na mesma lista de onde o tirou...
                list.parentElement.classList.remove('droppable');
                return;
            }
            document.getElementById(prjId)
                .querySelector('button:last-of-type')
                .click(); //////ESSE CÓDIGO DE 'CLICK()' VAI FAZER COM QUE A LÓGICA DE TRANSPORTE DE PROJECTITEMS POR ENTRE AS LISTAS SEJA ___rEUTILIZADO___ (pq é como se tivéssemos simulado um 'click' no botão switch/activate do projectItem selecionado com esse seletor....).
            list.parentElement.classList.remove('droppable');
            event.preventDefault(); //optional, not really required.
        })
        
        }




    addProject(project) {
        //console.log(this);


        this.projects.push(project); //////faz com que o projeto '''verdadeiro''', oculto e nos bastidores, seja adicionado à essa outra lista...
        DOMHelper.moveElement(project.id, `#${this.type}-projects ul`); ////////faz com que o DOM NODE, o elemento '''aparente e falso'''', reflita as mudanças que ocorreram nos bastidores do javascript...
        project.update(this.switchProject.bind(this), this.type); ///////FUNÇÃO ''IRMÃ'' DA VERSÃO VISTA NA PARTE QUE CRIA O PROJECTITEM, ou seja, naquele for of loop que contém o 'switchHandler' de 'this.switchProject.bind(this))'...
    }           


    switchProject(projectId) {
    //const projectIndex = this.projects.findIndex(p => p.id === projectId);
    this.switchHandler(this.projects.find(p => p.id === projectId));   ///EXEMPLO DE CALLBACK FUNCTION.
    this.projects = this.projects.filter(p => p.id !== projectId);
    //this.projects.splice(projectIndex, 1);
    }

}






console.log(DEFAULT_VALUE);