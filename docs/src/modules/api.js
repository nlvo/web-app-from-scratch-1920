import * as data from '../modules/data';
import * as render from '../modules/render';

// init with comics,characters/events

// Get data for the overview page and render
async function showAllComics () {
    const comics = await getAllComics();
    render.allComics(comics);
}

// Fetch data
async function getAllComics () {
    const comicsEndpoint = createComicsEndpoint();
    const comics = await fetchData(comicsEndpoint);
    return comics;
}

function createComicsEndpoint () {
    const comicsEndpoint = createEndpoint('dateDescriptor=thisMonth&orderBy=onsaleDate&limit=10');
    return comicsEndpoint;
}

function createEndpoint(queries) {
    // create endpoint url
    const endpointMarvel = 'https://gateway.marvel.com/v1/public/';
    const apiKey = '22b5f2403c91db4fba23cad90a8b2ab7';
    const hash = 'e6bb9dbff35775d2d8aed171d44888d4';
    const timestamp = '1581025873';
    const category = 'comics';
    const query = queries;
    const endpoint = `${endpointMarvel}${category}?${query}&ts=${timestamp}&apikey=${apiKey}&hash=${hash}`;
    return endpoint;
}

// fetched data and clean it
async function fetchData (url) {
    const response = await fetch(url);
    const jsonData = await response.json();
    const cleanData = data.clean(jsonData);
    return cleanData;
}

// Get data for the detail page and render
async function showComic (id) {
    const comic = await getComic(id);
    render.comic(comic);
}

// fetch data and find the correct comic with id
async function getComic (id) {
    const comicsEndpoint = createComicsEndpoint();
    const comics = await fetchData(comicsEndpoint);
    const findData = comics.find((data) => data.id == id);
    return findData;
    // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
}

// Search for comic with name
async function showSearchResults () {
    const searchResults = getSearchResults();
    render.searchResults(searchResults);
}

async function getSearchResults (){
    const searchEndpoint = createSearchEndpoint();
    const searchResults = await fetchData(searchEndpoint);
    return searchResults
}

function createSearchEndpoint () {
    const searchInput = getSearchInput();
    const searchEndpoint = createEndpoint(`titleStartsWith=${searchInput}`);
    return searchEndpoint;
}

const button = document.querySelector('button');

function getSearchInput () {
    var value = document.querySelector('input').value;
    return value;
}

button.addEventListener('click', showSearchResults);

export {
    showAllComics,
    showComic
};