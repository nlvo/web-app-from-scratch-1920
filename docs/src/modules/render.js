const createElement = (jsonData, selector) => {
console.log(jsonData)
    for (const comic of jsonData) {
        const className = `.${selector}`;
        const section = document.querySelector(className);
        section.insertAdjacentHTML('beforeend',
            `<article>
                <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}">
                <h2>${comic.name}</h2>
                <a href="#${selector}/${comic.id}">more</a>
            </article>`);
    }
}

const createDetail = (jsonData, selector) => {
    // console.log(jsonData);
    // for (const comic of jsonData) {
        const className = `.${selector}`;
        const section = document.querySelector(className);
        let list = '';

        for (const creator of jsonData.creatorsName) {
            list += `<li>${creator}<li/>`
        }

        const element = 
        `<article>
            <h2>${jsonData.name}</h2>
            <img src="${jsonData.thumbnail.path}.${jsonData.thumbnail.extension}">
            <h3>Creators</h3>
            <ul>${list}</ul>
        </article>`

        section.insertAdjacentHTML('beforeend', element);
    // }
}

// render html element
const allComics = async (data) => {
    createElement(data, 'comics');
}

const comic = async (data) => {
    createDetail(data, 'comic-detail');
}

export {
    allComics,
    comic
}