const createElement = (jsonData, selector) => {

    for (const comic of jsonData) {
        const className = `.${selector}`;
        const section = document.querySelector(className);
        section.insertAdjacentHTML('beforeend',
            `<article>
                <h2>${comic.name}</h2>
                <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}">
                <a href="#${selector}/${comic.id}">more</a>
            </article>`);

        // const section = document.querySelector(className);
        // const article = document.createElement('article');
        // const heading = document.createElement('h2');
        // const articleImage = document.createElement('img');
        // const articleUrl = document.createElement('a');
        // console.log('comic '+ comic.creatorsName);

        // articleUrl.textContent = `${comic.hasOwnProperty('name') ? comic.name : ''}`;

        // articleImage.src = `${comic.thumbnail.path}.${comic.thumbnail.extension}`; //template literals
        // articleUrl.href = `#${selector}/${comic.id}`;

        // heading.appendChild(articleUrl);
        // article.appendChild(articleImage);
        // article.appendChild(heading);
        // section.appendChild(article);
    }
}

const createDetail = (jsonData, selector) => {
    console.log(jsonData);
    for (const comic of jsonData) {
        const className = `.${selector}`;
        const section = document.querySelector(className);
        let list = '';

        for (const creator of comic.creatorsName) {
            list += `<li>${creator}<li/>`
        }

        const element = 
        `<article>
            <h2>${comic.name}</h2>
            <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}">
            <h3>Creators</h3>
            <ul>${list}</ul>
        </article>`

        section.insertAdjacentHTML('beforeend', element);
    }
}

// render html element
const allComics = async (data) => {
    await createElement(data, 'comics');
}

const comic = async (data) => {
    await createDetail(data, 'comic-detail');
}

export {
    allComics,
    comic
}