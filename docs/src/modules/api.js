import * as data from '../modules/data';
import * as render from '../modules/render';

const baseUrl = new URL('https://gateway.marvel.com/v1/public/');
const comicsEndpoint = new URL('comics', baseUrl);
const charactersEndpoint = new URL('characters', baseUrl);

// https://blog.bitsrc.io/using-the-url-object-in-javascript-5f43cd743804
// Thijs

const queries = {
    dateDescriptor: 'thisMonth',
    orderBy: 'onsaleDate',
    limit: 10,
    ts: '1581025873',
    apikey: '22b5f2403c91db4fba23cad90a8b2ab7',
    hash: 'e6bb9dbff35775d2d8aed171d44888d4'
}

const searchParams = new URLSearchParams(queries);
comicsEndpoint.search = searchParams;

// fetched data
const fetchData = async (url) => {
    const response = await fetch(url);
    const jsonData = await response.json();
    const cleanData = data.clean(jsonData);
    return cleanData;
}

const findComic = async (id) => {
    const comics = await fetchData(comicsEndpoint);
    const findData = comics.find((data) => data.id == id);
    return findData;
    // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
}

// api.getAllComics
// api.getComic
// api.init

const getAllComics = async () => {
    const comics = await fetchData(comicsEndpoint);
    render.allComics(comics);
}

const getComic = async (id) => {
    const comic = await findComic(id);
    render.comic(comic);
}

const searchName = async (value) => {
    const comicsEndpoint = new URL('comics', baseUrl);
    const searchParams = new URLSearchParams(queries);
    searchParams.append('titleStartsWith', value)
    comicsEndpoint.search = searchParams;

    const searchResults = await fetchData(comicsEndpoint);
    render.allComics(searchResults);
    // return searchResults;
}

var button = document.querySelector('button');
const search = async () => {
    var value = document.querySelector('input').value;
    searchName(value);

}
button.addEventListener('click', search);

export {
    getAllComics,
    searchName,
    getComic
};

// fetch data for overview page
// but also for detailpage
// check if the data already exist if not fetch data