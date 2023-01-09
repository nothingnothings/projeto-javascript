//const { printTitle, loadTitle } = require('./util');
const {  loadTitle } = require('./util');

//jest.mock('./http');

test('should print an uppercase text', () => {
    //expect(printTitle()).toBe('DELECTUS AUT AUTEM');  esse código NÃO VAI FUNCIONAR. DEVEMOS, em vez disso, USAR A VERSÃO DE 'loadTitle', que é uma função QUE RETORNA UMA PROMISE, UMA PROMISE À QUAL PODEMOS FAZER 'LISTEN TO'... como podemos fazer listen to a essa promise, essa função é MAIS ADEQUADA PARA SER USADA EM 'expect()s'... ---> também PORQUE A FUNÇÃO 'MAIN' de loadTitle, a 'OUTER FUNCTION', faz o return de uma promise, e essa é a razão de essa função 'loadTitle' ser superior à 'printTitle' em questão de testing, POIS O 'printTitle' retorna nada por si mesmo... (só sua função interna retorna alguma coisa, retorna)

    loadTitle().then(title => {
        expect(title).toBe('DELECTUS AUT AUTEM');
    })


} );

