//const { fetchData } = require('./http');

const { printTitle } = require('./util');



const button = document.querySelector('button');


/* ///////CÓDIGO TAMBÉM TRANSPLANTADO PARA O 'util.js'...
const loadTitle = () => {
  return fetchData().then((extractedData) => {
    const title = extractedData.title;
    const transformedTitle = title.toUpperCase();
    return transformedTitle;
  });
};
*/

/* ////CÓDIGO TRANSPLANTADO PARA 'util.js'...
const printTitle = () => {
  loadTitle().then((title) => {
    console.log(title);
  });
};
*/

button.addEventListener('click', printTitle);

exports.printTitle = printTitle;
