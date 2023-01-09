
import {Component} from './Component.js';





export class Tooltip extends Component {




    constructor(closeNotifierFunction, text, hostElementId) {
        super(hostElementId);
        //super('active-projects, true); EXEMPLO DA FLEXIBILIDADE DA CLASSE GENÉRICA 'component' ----> por flexibilidade, queremos expressar o caráter de reutilização dessa classe, que pode ser utilizada para posicionar elementos diversos em distintas partes da página (dentro-em cima de um container, embaixo-fora, etc etc, tudo por meio da ternary expression e do parâmetro passado ao super/constructor da classe base 'Component'...)
        this.closeNotifier = closeNotifierFunction;
        this.text = text;
        this.create();

    }

    closeTooltip = () => {      ////DE NOVO, QUEREMOS O COMPORTAMENTO LEGAL DE 'this' dessa 'method fields synthax', proporcionada pelo efeito das arrow functions.
        this.detach();
        this.closeNotifier();
    }


    

    create() {

        const tooltipElement = document.createElement('div');
        tooltipElement.className = 'card';
        const tooltipTemplate = document.getElementById('tooltip');
        //tooltipElement.textContent = 'DUMMY!';/// Código antigo, com o DUMMY. Foi substituído pela versão que utiliza 'EXTRA-DATA-INFO' (datasets, estudo dos datasets...), e com 'text', que é o parâmetro repassado ao constructor da classe Tooltip...
        tooltipElement.textContent = this.text;
        console.log(this.hostElement.getBoundingClientRect());

        /*tooltipElement.innerHTML = `
        <h2>More Info</h2>
        <p>${this.text}</p>
        `;*/



        const hostElPosLeft = this.hostElement.offsetLeft;
        const hostElPosTop = this.hostElement.offsetTop;
        const hostElHeight = this.hostElement.clientHeight;  //NÃO LEVA EM CONTA OS SCROLLBARS E BORDERS...
        const parentElementScrolling = this.hostElement.parentElement.scrollTop;


        const x = hostElPosLeft + 20;

        const y = hostElPosTop + hostElHeight - parentElementScrolling - 10; 

        tooltipElement.style.position = 'absolute';
        tooltipElement.style.left = x + 'px'; ////// "+ 'px'" REALMENTE É NECESSÁRIO.... SEM ELE, ESSA ALTERAÇÃO DE ESTILO CSS NÃO FUNCIONA.
        tooltipElement.style.top = y +'px';
        //tooltipElement.addEventListener('click', this.dettach);
        tooltipElement.addEventListener('click', this.closeTooltip);
        this.element = tooltipElement;  


}




}
