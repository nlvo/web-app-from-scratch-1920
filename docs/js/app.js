const endpointMarvel = 'https://gateway.marvel.com/v1/public/';
const apiKey = '&apikey=22b5f2403c91db4fba23cad90a8b2ab7';
const hash = '&hash=e6bb9dbff35775d2d8aed171d44888d4';
const timestamp = 'ts=1581025873';
const category = 'comics';
const query = 'dateDescriptor=thisMonth&orderBy=onsaleDate&limit=10'
const marvelUrl = `${endpointMarvel}${category}?${query}&${timestamp}&${apiKey}&${hash}`;
// var data;

const getJsonData = (url) => {
    fetch(url)
        .then(response => {
            return response.json();
        }).then(jsonData => {
            const cleanedData = cleanData(jsonData);
            addHtmlElement(cleanedData, 'characters');
            addHtmlElement(cleanedData, 'comics');
            // data = jsonData.data.results;
        });
}
// https://superheroapi.com/api/1776314525838688/search/

const getDetail = (id) => {
    const detail = data.filter(data => data.id == id);
    detail = detail[0];
    // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
    console.log(detail);
}

const cleanData = (oldData) => {
    var newData = oldData.data.results;
    newData = newData.map((data) => {
        return {
            id : data.id,
            name: data.name || data.title,
            thumbnail: data.thumbnail
        }
    });
    return newData;
    // https://stackoverflow.com/questions/54733622/i-need-remove-unnecessary-json-objects-form-my-result-json-file-using-javascript

}

const addHtmlElement = (jsonData, selector) => {

    for (const comic of jsonData) {
        className = `.${selector}`;
        const section = document.querySelector(className);
        const article = document.createElement('article');
        const heading = document.createElement('h2');
        const articleImage = document.createElement('img');
        const articleUrl = document.createElement('a');

        heading.textContent = `${comic.hasOwnProperty('name') ? comic.name : ''}`;
        articleUrl.textContent = `${comic.hasOwnProperty('name') ? comic.name : ''}`;

        articleImage.src = `${comic.thumbnail.path}.${comic.thumbnail.extension}`; //template literals
        articleUrl.href = `#characters/${comic.id}`;

        article.appendChild(articleUrl);
        article.appendChild(articleImage);
        article.appendChild(heading);
        section.appendChild(article);
    }
}

routie({
    '' : function(){
        getJsonData(marvelUrl);
    },
    'characters/:id' : function (id){
        getDetail(id);
        // console.log(id);
    }
})