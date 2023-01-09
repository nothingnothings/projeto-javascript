import sanitizeHtml from 'sanitize-html';

const productListEl = document.getElementById('product-list');





export function createElement(product, prodId, deleteProductFn) {
  
  const newListEl = document.createElement('li');
  newListEl.innerHTML = `
    <h2>${sanitizeHtml(product.title)}</h2>
    <p>${sanitizeHtml(product.price)}</p>
  `;
  const prodDeleteButtonEl = document.createElement('button');
  prodDeleteButtonEl.textContent = 'DELETE';

  newListEl.id = prodId;

  prodDeleteButtonEl.addEventListener(
    'click',
    deleteProductFn.bind(null, prodId)
  );

  newListEl.appendChild(prodDeleteButtonEl);

  return newListEl;
}

export function renderProducts(products, deleteProductFn) {
  productListEl.innerHTML = '';
  const startTime = performance.now();
  products.forEach(product => {
    const newListEl = createElement(product, product.id, deleteProductFn);
    productListEl.appendChild(newListEl);
  });
  const endTime = performance.now();
  // const startTime = performance.now();
  // for (let i = 0; i < products.length; i++) {
  //   const newListEl = createElement(
  //     products[i],
  //     products[i].id,
  //     deleteProductFn
  //   );
  //   productListEl.appendChild(newListEl);
  // }
  // const endTime = performance.now();
/*
  for (let i = 0; i < products.length; i++) {
    const newListEl = createElement(
      products[i],
      products[i].id,
      deleteProductFn
    );
    productListEl.appendChild(newListEl);
  }*/
 
  console.log(endTime - startTime);
}

export function updateProducts(product, prodId, deleteProductFn, isAdding) {
  if (isAdding) {
    const newProductEl = createElement(product, prodId, deleteProductFn);
    productListEl.insertAdjacentElement('afterbegin', newProductEl);
  } else {
    const productEl = document.getElementById(prodId);
    productEl.remove();
    // productEl.parentElement.removeChild(productEl);
  }
}
