import { Map } from './UI/Map';




class LoadedPlace {


    constructor(coordinates, address) {
        new Map(coordinates);
        const headerTitleEl = document.querySelector('header h1');
        headerTitleEl.textContent = address;
    }

}



const url = new URL(location.href);
const queryParams = url.searchParams;
new LoadedPlace();
console.log(queryParams);