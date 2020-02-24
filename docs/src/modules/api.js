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
    return fetch(marvelUrl)
        .then(response => {
            return response.json();
        }).then(jsonData => {
            const cleanedData = data.clean(jsonData);
            console.log(cleanedData);
            // const test = cleanedData.sort( (a,b)=> a.name.localeCompare(b.name));
            // console.log(test);
            // https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript/16481400#16481400
            return cleanedData;
        })

}

const allComics = () => {
    getAllComics().then(data => {
        render.htmlElement(data, 'comics');
    })
}

const getComic = (id) => {
    getAllComics().then(data => {
        data = data.filter(data => data.id == id)
        return data;
    }).then(data => {
        render.htmlElement(data, 'comic-detail');
    })
    // var detail = data.filter(data => data.id == id);
    // detail = detail[0];
    // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
}

export {
    allComics,
    getComic
};

// fetch data for overview page
// but also for detailpage
// check if the data already exist if not fetch data