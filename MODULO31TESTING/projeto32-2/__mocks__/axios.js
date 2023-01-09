// const get = () => {
//     return { data: { title: 'delectus aut autem'}};     -----------> ESSE CÓDIGO NÃO VAI FUNCIONAR PQ O ___AXIOS DE VERDADE__ RETORNA UMA PROMISE... SE QUEREMOS QUE O MOCK FINJA DE VERDADE QUE É O AXIOS, DEVEMOS FAZER COM QUE ELE RETORNE UMA PROMISE QUE WRAPPA ESSE OBJECT AÍ... EXATAMENTE COMO VEMOS LOGO ABAIXO, no código logo abaixo, que tem uma promise revestindo o objeto...
// }




const get = () => {
    return Promise.resolve({ data: { title: 'delectus aut autem'}});
}









exports.get = get;