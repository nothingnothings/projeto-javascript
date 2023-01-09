
/* MÉTODO ALTERNATIVO DE FAZER O MODAL E O BACKDROP FUNCIONAREM EM CONJUNTO: MEIO BUGADO E CLUNKY, MAS FUNCIONOU (e eu criei).



const addMovieModal = document.getElementById('add-modal'); //getElementById tem performance melhor do que querySelector.
//const addMovieModal = document.querySelector('#add-modal'); ---> meio alternativo de selecionar esse elemento.
//const addMovieModal = documennt.body.children[1];


const backdrop = document.getElementById('backdrop');



const startAddMovieButton = document.querySelector('header button');
//const startAddMovieButton = document.querySelector('header').lastElementChild;





const addMovieModal = () => {
    //document.modal.className = '.modal.visible';  ------> super errado.
    addMovieModal.classList.toggle('visible');
}

 


const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
   if (addMovieModal.className === 'modal.visible') {
       addMovieModal.className = 'modal';
   }
}



 startAddMovieButton.addEventListener('click', addMovieModal
// () => {backdrop.classList.toggle('visible'); ----> isso não funciona, não faz com que o backdrop apareça junto do modal.}
);




startAddMovieButton.addEventListener('click', toggleBackdrop);



backdrop.addEventListener('click', toggleBackdrop);



backdrop.addEventListener('click', addMovieModal);



*/

















movies = [];



const deleteMovieModal = document.getElementById('delete-modal');



const modalActionsConfirmation = deleteMovieModal.children[2];


let btnDanger = modalActionsConfirmation.querySelector('.btn--danger');




const modal = document.body.children[1];

const modalContent = modal.children[0];

const modalActions = modal.children[1];

const cancelBtn = modalActions.children[0];

const addMovieButtonModal = cancelBtn.nextElementSibling; // Isso faz a seleção do botão "add".
 
//const movieTitleInput = modalContent.children[1];
//const imageUrlInput = modalContent.children[3];
//const userRatingInput = modalContent.children[5];







const addMovieModal = document.getElementById('add-modal'); //getElementById tem performance melhor do que querySelector.
//const addMovieModal = document.querySelector('#add-modal'); ---> meio alternativo de selecionar esse elemento.
//const addMovieModal = documennt.body.children[1];



const userInputs = addMovieModal.querySelectorAll('input');

const backdrop = document.getElementById('backdrop');



const startAddMovieButton = document.querySelector('header button');
//const startAddMovieButton = document.querySelector('header').lastElementChild;



/*const section = document.querySelector('section'); */

const section = document.getElementById('entry-text');

const movieList = document.getElementById('movie-list');

const movieElement = document.getElementById('movie-element');


/*const clearMovieInput = () => {
    userInputs[0].value = '';
    userInputs[1].value = '';
    userInputs[2].value = '';
}     
*/


const clearMovieInput = () => {
    for(const usrInput of userInputs) {
        usrInput.value = '';
    }
}

/*const removeSection = () => {
    section.remove();
} */

const updateUI = () => {
    if(movies.length === 0) {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
};


const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
    toggleBackdrop();
}






const showMovieModal = () => {
    //document.modal.className = '.modal.visible';  ------> super errado.
    addMovieModal.classList.add('visible');
    toggleBackdrop(); //FUNÇÃO UTILIZADA PARA FAZER COM QUE O BACKDROP ACOMPANHE A ABERTURA/FECHAMENTO DESSE MODAL.
}

 


const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
   //if (addMovieModal.className === 'modal.visible') {
     //  addMovieModal.className = 'modal';
  // }
}



 startAddMovieButton.addEventListener('click', addMovieModal
// () => {backdrop.classList.toggle('visible'); ----> isso não funciona, não faz com que o backdrop apareça junto do modal.}
);



const backdropClickHandler = () => {
    //addMovieModal();
    closeMovieModal();
    toggleBackdrop();
    clearMovieInput();
    cancelMovieDeletion();
}



const cancelAddMovieHandler = () => {
    //addMovieModal();
    closeMovieModal();
    clearMovieInput();
}


const removeMovieElement = () => {
    movieElement.remove();
}










const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if(titleValue.trim() === '' ||
        imageUrlValue.trim() === '' ||
        ratingValue.trim() === '' ||
        +ratingValue < 1 ||
        +ratingValue > 5
    ) {
        alert('Please enter valid values (rating between 1 and 5).');
        return;
    }
    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    }; 
    
    movies.push(newMovie);
    console.log(movies);
    //addMovieModal();
    closeMovieModal();
    //toggleBackdrop();
    clearMovieInput();
    //removeSection();
    addNewMovieElement(newMovie.id,
                        newMovie.title,
                        newMovie.image,
                        newMovie.rating);
    updateUI();
    };
 

    const addNewMovieElement = (id, title, imageUrl, rating) => {
        const newMovieElement = document.createElement('li');
        newMovieElement.className = 'movie-element';
        newMovieElement.id = 'movie-element'
        newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl}" alt="${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
        
        `
        newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));  //bind tem a vantagem de poder ser declarado no interior de eventListeners.
        const listRoot = document.getElementById('movie-list');
        listRoot.append(newMovieElement);
        //movies.push(newMovieElement);
    }


const deleteMovie = movieId => {
    let movieIndex = 0;
        for (const movie of movies) {
            if (movie.id === movieId) {
                break;
            }
            movieIndex++;
        }

        movies.splice(movieIndex, 1);
        const listRoot = document.getElementById('movie-list');
        listRoot.children[movieIndex].remove();
        cancelMovieDeletion();
        updateUI();
}

    


    const deleteMovieHandler = movieId => {


        const btnPassive = modalActionsConfirmation.querySelector('.btn--passive');
        let btnDanger = modalActionsConfirmation.querySelector('.btn--danger');
       //const deleteMovieModal = document.getElementById('delete-modal');
       deleteMovieModal.classList.add('visible');
       toggleBackdrop();
       btnPassive.removeEventListener('click', backdropClickHandler);
       btnDanger.replaceWith(btnDanger.cloneNode(true));
       btnDanger = modalActionsConfirmation.querySelector('.btn--danger');
       btnDanger.addEventListener('click', deleteMovie.bind(null,  movieId)); //
       btnPassive.addEventListener('click', backdropClickHandler);
       
        //deleteMovie(movieId);
    };



    const cancelMovieDeletion = () => {
        toggleBackdrop();
        deleteMovieModal.classList.remove('visible');
    }







backdrop.addEventListener('click', backdropClickHandler);



//startAddMovieButton.addEventListener('click', toggleBackdrop);



//backdrop.addEventListener('click', toggleBackdrop);



//backdrop.addEventListener('click', addMovieModal);



//backdrop.addEventListener('click', addMovieModal); //CÓDIGO RECUSADO PELO PROFESSOR. ALEGA QUE "addMovieModal" não pode ser sempre usado para fechar o backdrop junto do modal. Para que seja resolvida a situação, professor cria uma nova função que ele chama de "backdropClickHandler".



cancelBtn.addEventListener('click', cancelAddMovieHandler);




addMovieButtonModal.addEventListener('click', addMovieHandler);




startAddMovieButton.addEventListener('click', showMovieModal);







/*movieElement.addEventListener('click', removeMovieElement);*/