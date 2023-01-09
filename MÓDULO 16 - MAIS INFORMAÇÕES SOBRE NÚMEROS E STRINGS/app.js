function productDescription(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice);
  //return 'This is a product!';

  let priceCategory = 'pretty cheap regarding its price';
  if (productPrice > 20) {
    priceCategory = 'fair';
  }

  return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
}

const prodName = 'Javascript Course';

const prodPrice = 19.99;

const productOutput = productDescription`This product (${prodName} is ${prodPrice})`;
console.log(productOutput);
