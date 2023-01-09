import { initProducts } from './product-management';

function addProduct(event) {
  import('./product-management.js').then(mod => { ///////código de import dinâmico MAL OPTIMIZADO... ele é completamente irrelevante, pois nosso IMPORT ESTÁTICO (logo acima, aquele import de 'initProducts', AINDA ACABA IMPORTANDO A INTEGRALIDADE DO ARQUIVO 'product-management.js'... (ou seja, não podemos importar APENAS 1 ÚNICA FUNÇÃO SEM IMPORTAR O ARQUIVO INTEIRO, O CONJUNTO INTEIRO QUE CONTÉM ESSA FUNÇÃO..))
    mod.addProduct(event);
  })
}

const addProductForm = document.getElementById('new-product');

initProducts();

addProductForm.addEventListener('submit', addProduct);
