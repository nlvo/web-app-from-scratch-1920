const htmlElement = (jsonData, selector) => {

    for (const comic of jsonData) {
        const className = `.${selector}`;
        const section = document.querySelector(className);
        const article = document.createElement('article');
        const heading = document.createElement('h2');
        const articleImage = document.createElement('img');
        const articleUrl = document.createElement('a');

        articleUrl.textContent = `${comic.hasOwnProperty('name') ? comic.name : ''}`;

        articleImage.src = `${comic.thumbnail.path}.${comic.thumbnail.extension}`; //template literals
        articleUrl.href = `#${selector}/${comic.id}`;

        heading.appendChild(articleUrl);
        article.appendChild(articleImage);
        article.appendChild(heading);
        section.appendChild(article);
    }
}

export {
    htmlElement
}