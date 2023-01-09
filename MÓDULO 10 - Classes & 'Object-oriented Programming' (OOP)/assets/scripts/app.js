/*const products = [
    {title: 'A Pillow', 
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/711UQcfhLlL._AC_SL1500_.jpg', 
    price: 19.99, 
    description: 'A short pillow'
     },
     {title: 'A Carpet', 
     imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81W6An71HSL._SX466_.jpg', 
     price: 39.99, 
     description: 'A small carpet'
      }
];*/


class Product  { ////// IMPORTANTE: EM CLASSES, VOCÊ NÃO DEVE USAR ':', e sim '='.
    //title = 'DEFAULT';  ////esses 4 fields são desnecessários, basta que tenhamos aquela constructor function mais abaixo.
    //imageUrl;
    //description;
    //price;






    constructor(title, image, desc, price) {  /////como usar constructor functions junto de classes.
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;


}
}



class ElementAttribute { //relacionado com a classe de baixo...
    constructor(attrName, attrValue) {
        this.name = attrName;
        this.value = attrValue;
    }
}




class Component {



    constructor(renderHookId, shouldRender = true) {
        this.hookId = renderHookId;
        console.log('Called');
        if (shouldRender) {
            this.render();
        }
       
    }


    createRootElement(tag, cssClasses, attributes) {

   



        const rootElement = document.createElement(tag);
        if(cssClasses) {
            rootElement.className = cssClasses;
        }
        if (attributes && attributes.length > 0) {
            for(const attr of attributes) {
                rootElement.setAttribute(attr.name, attr.value);
            }
            
        }
        document.getElementById(this.hookId).append(rootElement);
        return rootElement;
    }



    render() {  /////método render VAZIO, feito para ser overwriteado pelo código de render() de cada subclasse...



    }


}










class ProductItem extends Component {
    constructor(product, renderHookId) {
        super(renderHookId, false);
        this.product = product;
        this.render();
    }


    addToCart() {
        //console.log('Adding product to cart');
        //console.log(this.product);
        App.addProductToCart(this.product);
    }



//detalhe: esse render() {} aqui definido NÃO É O MESMO QUE SERÁ DEFINIDO EM OUTRAS PARTES DO CÓDIGO (os outros métodos render, apesar de terem o mesmo nome, renderizam elementos distintos.)
    render() {
        const prodEl = this.createRootElement('li','product-item');
        //const prodEl = document.createElement('li');
        //prodEl.className = 'product-item';
        prodEl.innerHTML = `<div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}">
        <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}<p>
            <button>Add to Cart</button>
        </div>
    </div>
        `;
        const addCartButton = prodEl.querySelector('button');
        //addCartButton.addEventListener('click', this.addToCart);   /// O 'this' aqui utilizado nos retornará um valor errôneo, nos retornará UNDEFINED, pois está se referindo ao EVENTO DO addEventListener/botão, e NÃO AO OBJETO 'ProductItem' que está segurando os métodos render() e addToCart(). Por isso que é necessário aquela call de 'bind()' que vemos logo abaixo, que faz com que a referência feita por 'this' seja ao objeto 'ProductItem', e não ao evento do eventListener. O BIND, aqui, FAZ COM QUE NÓS FAÇAMOS O 'bind' do valor de 'this', atrelando o valor de sua referência AO MESMO VALOR QUE 'this' TEM NO MÉTODO EM QUE 'bind()' FOI CHAMADO (nesse caso, 'addCartButton', que tem um valor/referencia de 'this' como sendo o ProductItem, que é o que desejamos).
        addCartButton.addEventListener('click', this.addToCart.bind(this));

        //return prodEl;
    }
}




class ShoppingCart extends Component {
    
    items = [];




 








  






    get totalAmount() {
        /*const sum = this.items.reduce((prevValue, curItem) => {  ///////LÓGICA DE 'redução' do array de products (faz com que todos os 'prices' do array de products SEJAM CONVERTIDOS EM UM ÚNICO VALOR...) 
            return prevValue + curItem.price;  //////// OBS: ESSA É A FORMA 'TRADICIONAL' DESSA SINTAXE. A FORMA ABAIXO É A FORMA 'REDUZIDA, mais 'clean', que tem os mesmos efeitos/lógica, mas que remove os curly braces, return statement e ';'.
        }, 0)  */

        const sum = this.items.reduce(
            (prevValue, curItem) => prevValue + curItem.price,
            0
            );
            return sum;





    }






    set cartItems(value) {
        this.items = value;
        this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
    }


    constructor(renderHookId) {

        super(renderHookId);
    }








    addProduct(product) {
        //this.items.push(product);       /////Obs: você só pode alterar o innerHTML de uma propriedade DEPOIS QUE ELA FOI CRIADA... (você não pode loucurar e achar que pode meter um 'this.totalOutput.innerHTML' dentro de uma classe e esperar que a classe CRIE A PROPRIEDADE E AINDA ADICIONE/ALTERE O HTML INTERNO DESSE ELEMENTO TUDO DE UMA SÓ VEZ... você deve ter paciência, criar a propriedade antes e SÓ ENTÃO ir lá e alterar as suas propriedades internas, como innerHTML.)
        /*this.totalOutput.innerHTML = `
        <h2>Total: \$${1}</h2>
        `; */
        //this.totalOutput.innerHTML = `
        //<h2>Total: \$${this.totalAmount}</h2>
        //`;

        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;   //////DEFINIÇÃO DO SETTER.... definimos o value do setter como sendo 'updatedItems'...






    }





    orderProducts() {
        console.log('Ordering...');
        console.log(this.items);
    }



    render() {
        //const cartEl = document.createElement('section');
        const cartEl = this.createRootElement('section', 'cart');
        //console.log('1', this);
        cartEl.innerHTML = `
                        <h2>Total: \$${0}</h2>
                        <button>Order Now!</button>
                            `;

        //cartEl.className = 'cart';
        this.totalOutput = cartEl.querySelector('h2');
        //return cartEl;

        const orderButton = cartEl.querySelector('button');
        orderButton.addEventListener('click', this.orderProducts.bind(this)); //1a versão do código que soluciona o problema do 'this' se referir ao addEventListener em vez do objeto que queremos objetivar. (Ambas versões funcionam.)
        //orderButton.addEventListener('click', () => this.orderProducts());      //2a versão do código que soluciona o problema do 'this' se referir ao addEventListener em vez do objeto que queremos objetivar.

    }

}



class Shop extends Component {



    constructor() {
        super();
    }


    render() {
        //const renderHook = document.getElementById('app');
        
        this.cart = new ShoppingCart('app');  ////Ver 'App' logo abaixo...
        //console.log(this);
        //const cart = new ShoppingCart();
        //const cartEl = cart.render();
        //this.cart.render();
        //const cartEl = this.cart.render();
        //const productList = new ProductList('app');  //código substituído pelo de baixo.
        new ProductList('app');
        //const prodListEl = productList.render();
        //productList.render(); //código substituído por 'new ProductList('app')'  (agora o método render() estará incluído dentro dessa classe....)


        //renderHook.append(cartEl);
        //renderHook.append(prodListEl);
    }

   



}





class App {
    static cart;
    static init() {


        const shop = new Shop();
        //shop.render();
        this.cart = shop.cart;   ////Ver 'Shop' logo acima.... ///esse código faz a definição da propriedade 'Shop' dentro de 'app/shop' como tendo o valor daquela classe 'ShoppingCart'...
        


    }

    static addProductToCart(product) {
        this.cart.addProduct(product);
    }

}














//console.log(new Product);





class ProductList extends Component {
   /* products = [new Product ('A Pillow', 
    'https://images-na.ssl-images-amazon.com/images/I/711UQcfhLlL._AC_SL1500_.jpg',
    'A short pillow', 
    19.99
    ),

    new Product('A Carpet', 
        'https://images-na.ssl-images-amazon.com/images/I/81W6An71HSL._SX466_.jpg',
        'A small carpet',
        89.99           
      )];*/
    #products = [];   //////EXEMPLO DE PRIVATE PROPERTY. Só pode ser utilizada/acessada dentro desse objeto/classe.


constructor(renderHookId) {
    /*this.products = [
    new Product ('A Pillow', 
    'https://images-na.ssl-images-amazon.com/images/I/711UQcfhLlL._AC_SL1500_.jpg',
    'A short pillow', 
    19.99
    ),

    new Product('A Carpet', 
    'https://images-na.ssl-images-amazon.com/images/I/81W6An71HSL._SX466_.jpg',
    'A small carpet',
    89.99           
      )]; */
    super(renderHookId, false /* 2o parâmetro utilizado para QUE PRIVATE PROPERTY #products funcione...  */);
    this.render();  ////método 'render()' de ProductList é chamado nesse constructor PARA QUE A PROPRIEDADE PRIVADA 'products' funcione...
    this.fetchProducts();
    //this.render();
}


fetchProducts() {
  /*Exemplo de acesso à private property. 'this.#xxxxx'.               */this.#products = [ new Product ('A Pillow',  
    'https://images-na.ssl-images-amazon.com/images/I/711UQcfhLlL._AC_SL1500_.jpg',
    'A short pillow', 
    19.99
    ),

    new Product('A Carpet', 
    'https://images-na.ssl-images-amazon.com/images/I/81W6An71HSL._SX466_.jpg',
    'A small carpet',
    89.99           
      )];
      this.renderProducts();
}


renderProducts() {
    for (const prod of this.#products) {
        new ProductItem(prod, 'prod-list');
    }
}










      render() {
          //const renderHook = document.getElementById('app');
    //const prodList = document.createElement('ul');
    //const prodList = this.createRootElement('ul', 'product-list', [new ElementAttribute('id', 'prod-list')]);
    this.createRootElement('ul', 'product-list', [
        new ElementAttribute('id', 'prod-list')]);
    //prodList.id = 'prod-list';
    //prodList.className = 'product-list'; 
        if (this.#products && this.#products.length > 0 ) {
            this.renderProducts();
        }
    //for (const prod of this.products) { 
       // const productItem = new ProductItem(prod, 'prod-list');
        //const prodEl = productItem.render();
      //  productItem.render();
        //prodList.append(prodEl);
        //console.log(productItem);
    }
    //renderHook.append(prodList);
    //return prodList;
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        //'this' aqui se referirá à productList....
            /*const prodEl = document.createElement('li');  ////todo esse código foi transferido para o render da classe 'ProductItem'. 
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
                    <div>
                        <img src="${prod.imageUrl}" alt="${prod.title}">
                        <div class="product-item__content">
                            <h2>${prod.title}</h2>
                            <h3>\$${prod.price}</h3>
                            <p>${prod.description}<p>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                                `;

            prodList.append(prodEl);
        }
        renderHook.append(prodList); 
      }*/
}



 












/*const productList = { ////////////CÓDIGO DEPRECADO EM RAZÃO DO USO DA CLASSE 'ProductList', que contém todo esse código já no seu interior.
    /*products: [    //////OBJETOS deixados de lado devido ao uso de classes nesse projeto. Classes são uma maneira de criar objetos de forma mais efetiva, principalmente quando se criará um mesmo objeto múltiplas vezes em nosso código.
    {title: 'A Pillow', 
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/711UQcfhLlL._AC_SL1500_.jpg', 
    price: 19.99, 
    description: 'A short pillow!'
     },
    {title: 'A Carpet', 
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81W6An71HSL._SX466_.jpg', 
    price: 89.99, 
    description: 'A small carpet!'
     }
    
], 

products: [       /////////// EXEMPLO DE USO DE CLASSES/blueprints. Também deprecado.
    new Product ('A Pillow', 
    'https://images-na.ssl-images-amazon.com/images/I/711UQcfhLlL._AC_SL1500_.jpg',
    'A short pillow', 
    19.99
    ),

    new Product('A Carpet', 
        'https://images-na.ssl-images-amazon.com/images/I/81W6An71HSL._SX466_.jpg',
        'A small carpet',
        89.99           
      )
],






render() {       /////////// MÉTODO DEPRECADO EM RAZÃO DE NÓS TERMOS O INSERIDO DENTRO DA CLASSE 'Product', junto dos objetos da propriedade 'products', também presentes no interior desse objeto productList.
   const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list'; 

    for (const prod of this.products) { //'this' aqui se referirá à productList....
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
                    <div>
                        <img src="${prod.imageUrl}" alt="${prod.title}">
                        <div class="product-item__content">
                            <h2>${prod.title}</h2>
                            <h3>\$${prod.price}</h3>
                            <p>${prod.description}<p>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                                `;

            prodList.append(prodEl);
        }
        renderHook.append(prodList); 
}
} ;
*/


//productList.render();  ----> código deprecado em razão de termos a classe 'ProductList'.


//const productList = new ProductList();  //cria um novo objeto com base naquela classe 'ProductList' definida lá em cima.
//productList.render(); ////renderiza os elementos dos produtos por meio da utilização desse método que será inserido dentro do objeto criado pela classe 'ProductList'.






App.init();  /////inicia todo o nosso aplicativo. APP É uma 'helper class' (supostamente...).