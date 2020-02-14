import * as data from '../modules/data';
import * as render from '../modules/render';

const endpointMarvel = 'https://gateway.marvel.com/v1/public/';
const apiKey = '&apikey=22b5f2403c91db4fba23cad90a8b2ab7';
const hash = '&hash=e6bb9dbff35775d2d8aed171d44888d4';
const timestamp = 'ts=1581025873';
const category = 'comics';
const query = 'dateDescriptor=thisMonth&orderBy=onsaleDate&limit=10'
const marvelUrl = `${endpointMarvel}${category}?${query}&${timestamp}&${apiKey}&${hash}`;

// const getJsonData
const getAllComics = () => {
    fetch(marvelUrl)
        .then(response => {
            return response.json();
        }).then(jsonData => {
            const cleanedData = data.clean(jsonData);
            render.addHtmlElement(cleanedData, 'comics');
        });
}

export { getAllComics };