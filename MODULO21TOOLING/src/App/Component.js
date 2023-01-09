export class Component {
  constructor(hostElementId, insertBefore = false) {
    if (hostElementId) {
      this.hostElement = document.getElementById(hostElementId);
    } else {
      this.hostElement = document.body;
    }
    this.insertBefore = insertBefore;
  }

  attach() {
    //console.log('The tooltip...');

    //document.body.append(tooltipElement);
    // document.body.append(this.element); ////CÓDIGO MENOS FLEXÍVEL do que a versão inferior (que nos permite inserir tooltips/elementos em qualquer lugar do código...)

    this.hostElement.insertAdjacentElement(
      ////////MÉTODO 'insertAdjacentElement' EXIGE 2 PARâMETROS: 1) posição em que será inserido o elemento... (que, nesse caso, é transmitida por uma ternary expression...). 2) ELEMENTO QUE SERÁ INSERIDO NAQUELE LOCAL....
      this.insertBefore ? 'beforebegin' : 'beforeend',
      //this.insertBefore ? 'afterbegin' : 'beforeend',
      this.element
    );
  }

  detach() {
    /////FIELD METHODS SYNTHAX. Faz com que um método seja adicionado por meio de uma arrow function. Vantagem: O COMPORTAMENTO DE 'this' é exatamente como queremos, ele se refere ao 'Tooltip', pois as arrow functions nem ao menos conhecem 'this', portanto os definem como sendo o rootElement... DESVANTAGEM: maior gasto de memória/pior performance --> o método 'dettach' é recriado cada vez que criamos um novo tooltip.

    //this.element.remove(); //versão que não funciona em browsers mais antigos

    this.element.parentElement.removeChild(this.element); ////versão que funciona em browsers mais antigos.
  }
}