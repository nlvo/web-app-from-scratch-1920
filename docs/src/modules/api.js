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
    limit : 10,
    ts : '1581025873',
    apikey : '22b5f2403c91db4fba23cad90a8b2ab7',
    hash : 'e6bb9dbff35775d2d8aed171d44888d4'
}

const searchParams = new URLSearchParams(queries);
comicsEndpoint.search = searchParams;

// fetched data
const fetchData = (url) => {
    return new Promise ((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(jsonData => {
                console.log(data.clean(jsonData))
                resolve(data.clean(jsonData))}
            )  
    })
}

// api.getAllComics
// api.getComic
// api.init

// created an async function, because it otherwise gets called first before there's even data aka undefined
const getAllComics = async () => {
    fetchData(comicsEndpoint)
    .then(data => render.allComics(data));
}

const getComic = async (id) => {
    fetchData(comicsEndpoint)
    .then(data => data.filter(data => data.id == id))
    .then(data => render.comic(data));
    // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
}

export {
    getAllComics,
    getComic
};

// fetch data for overview page
// but also for detailpage
// check if the data already exist if not fetch data