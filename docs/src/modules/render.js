const getDetail = (id) => {
    var detail = data.filter(data => data.id == id);
    // detail = detail[0];
    // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
    console.log(detail);
}

const addHtmlElement = (jsonData, selector) => {

    for (const comic of jsonData) {
        const className = `.${selector}`;
        const section = document.querySelector(className);
        const article = document.createElement('article');
        const heading = document.createElement('h2');
        const articleImage = document.createElement('img');
        const articleUrl = document.createElement('a');

        // heading.textContent = `${comic.hasOwnProperty('name') ? comic.name : ''}`;
        articleUrl.textContent = `${comic.hasOwnProperty('name') ? comic.name : ''}`;

        articleImage.src = `${comic.thumbnail.path}.${comic.thumbnail.extension}`; //template literals
        articleUrl.href = `#characters/${comic.id}`;

        heading.appendChild(articleUrl);
        article.appendChild(articleImage);
        article.appendChild(heading);
        section.appendChild(article);
    }
}

export {
    addHtmlElement,
    getDetail
}