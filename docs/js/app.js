const endpointMarvel = 'https://gateway.marvel.com/v1/public/';
const apiKey = '&apikey=22b5f2403c91db4fba23cad90a8b2ab7';
const hash = '&hash=e6bb9dbff35775d2d8aed171d44888d4';
const timestamp = 'ts=1581025873';
const comicsUrl = `${endpointMarvel}comics?${timestamp}${apiKey}${hash}`;
const charactersUrl = `${endpointMarvel}characters?${timestamp}${apiKey}${hash}`;

fetch(comicsUrl)
    .then(response => {
        return response.json();
    }).then(jsonData => {
        addHtmlElement(jsonData, 'characters');
    });

fetch(charactersUrl)
    .then(response => {
        return response.json();
    }).then(jsonData => {
        console.log(jsonData)
        addHtmlElement(jsonData, 'comics');
    });

    // https://superheroapi.com/api/1776314525838688/search/

const addHtmlElement = (jsonData, selector) => {
    jsonData = jsonData.data.results;
    for (const comic of jsonData) {
        // console.log(comic);
        className = `.${selector}`;
        const section = document.querySelector(className);
        const article = document.createElement('article');
        const heading = document.createElement('h2');
        const articleImage = document.createElement('img');

        heading.textContent = `${comic.hasOwnProperty('title') ? comic.title : ''}`;
        heading.textContent = `${comic.hasOwnProperty('name') ? comic.name : ''}`;

        articleImage.src = `${comic.thumbnail.path}.${comic.thumbnail.extension}`; //template literals

        article.appendChild(articleImage);
        article.appendChild(heading);
        section.appendChild(article);
    }
}