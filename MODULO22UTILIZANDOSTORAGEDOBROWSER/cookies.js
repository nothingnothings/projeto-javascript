

const storeBtn = document.getElementById('store-btn');
const rtrBtn = document.getElementById('retrieve-btn')








storeBtn.addEventListener('click', () => {
    const userId = 'u123';
    const user = {name: 'Max', age: 30};
    document.cookie = `uid=${userId}; max-age=2`; ///definição em segundos DO MÁXIMO DE TEMPO QUE ESSE COOKIE DEVE SOBREVIVER/PERSISTIR. Passada essa quantidade de segundos, ele se torna INVÁLIDO.
    document.cookie = `user=${JSON.stringify(user)}`;
})



rtrBtn.addEventListener('click', () => {
    console.log(document.cookie);
    //console.log(document.cookie.split(';'));
    const cookieData = document.cookie.split(';');
    const data = cookieData.map(i => {
        return i.trim();
    });
    //console.log(data[1].split('=')[1]);
    console.log(data.includes('user'));

}
);



//console.log(document.cookie);