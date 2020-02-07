const endpointMarvel = 'https://gateway.marvel.com/v1/public/';
const apiKey = '&apikey=22b5f2403c91db4fba23cad90a8b2ab7';
const hash = '&hash=e6bb9dbff35775d2d8aed171d44888d4';
const timestamp = 'ts=1581025873';
const comicsUrl = `${endpointMarvel}comics?${timestamp}${apiKey}${hash}`
const charactersUrl = `${endpointMarvel}characters?${timestamp}${apiKey}${hash}`

fetch(comicsUrl)
    .then(response => {
        return response.json();
    }).then(jsonData => {
        console.log(jsonData.data.results[1]);
        for (const comic of jsonData.data.results) {
            console.log(comic);
            const section = document.querySelector('.series');
            const article = document.createElement('article');
            const heading = document.createElement('h2');
            const articleImage = document.createElement('img');

            heading.textContent = `${comic.title}`; //template literals
            articleImage.src = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;

            article.appendChild(articleImage);
            article.appendChild(heading);
            section.appendChild(article);
        }
    });

fetch(charactersUrl)
    .then(response => {
        return response.json();
    }).then(jsonData => {
        console.log(jsonData.data.results[1]);
        for (const comic of jsonData.data.results) {
            console.log(comic);
            const section = document.querySelector('.airing');
            const article = document.createElement('article');
            const heading = document.createElement('h2');
            const articleImage = document.createElement('img');

            heading.textContent = `${comic.name}`; //template literals
            articleImage.src = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;

            article.appendChild(articleImage);
            article.appendChild(heading);
            section.appendChild(article);
        }
    });

    // https://superheroapi.com/api/1776314525838688/search/

