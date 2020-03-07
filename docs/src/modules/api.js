import * as data from '../modules/data';
import * as render from '../modules/render';

function createEndpoint(queries) {
    // create endpoint url
    const endpointMarvel = 'https://gateway.marvel.com/v1/public/';
    const apiKey = '&apikey=22b5f2403c91db4fba23cad90a8b2ab7';
    const hash = '&hash=e6bb9dbff35775d2d8aed171d44888d4';
    const timestamp = 'ts=1581025873';
    const category = 'comics';
    const query = queries;
    const endpoint = `${endpointMarvel}${category}?${query}&${timestamp}&${apiKey}&${hash}`;
    return endpoint;
}

// fetched data and clean it
async function fetchData (url) {
    const response = await fetch(url);
    const jsonData = await response.json();
    const cleanData = data.clean(jsonData);
    return cleanData;
}

// fetch data and find the correct comic with id
async function findComic (id) {
    const comicsEndpoint = getComicsEndpoint();
    const comics = await fetchData(comicsEndpoint);
    const findData = comics.find((data) => data.id == id);
    return findData;
    // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
}

// Get data for the overview page and render
async function getAllComics () {
    const comicsEndpoint = getComicsEndpoint();
    const comics = await fetchData(comicsEndpoint);
    render.allComics(comics);
}

// Get data for the detail page and render
async function getComic (id) {
    const comic = await findComic(id);
    render.comic(comic);
}

function getComicsEndpoint () {
    const comicsEndpoint = createEndpoint('dateDescriptor=thisMonth&orderBy=onsaleDate&limit=10');
    return comicsEndpoint;
}

function getSearchEndpoint (searchinput) {
    const searchEndpoint = createEndpoint(`titleStartsWith=${searchinput}`);
    return searchEndpoint;
}

// Search for comic with name
async function getSearchResults (inputValue) {
    const searchEndpoint = getSearchEndpoint(inputValue);
    const searchResults = await fetchData(searchEndpoint);
    render.clearElements();
    render.allComics(searchResults);
}

const button = document.querySelector('button');

async function search () {
    var value = document.querySelector('input').value;
    getSearchResults(value);
}

button.addEventListener('click', search);

export {
    getAllComics,
    getSearchResults,
    getComic
};