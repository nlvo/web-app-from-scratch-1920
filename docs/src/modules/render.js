// create html element
function createElement (jsonData, selector) {
    console.log(jsonData);
    for (const comic of jsonData) {
        const className = `.${selector}`;
        const section = document.querySelector(className);
        section.insertAdjacentHTML('beforeend',
            `<article>
                <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}">
                <a href="#${selector}/${comic.id}"><h2>${comic.name}</h2></a>
            </article>`);
    }
}

// create detail html element with classname
function createDetail (jsonData, selector) {
    const className = `.${selector}`;
    const section = document.querySelector(className);
    let list = '';

    for (const creator of jsonData.creators) {
        list += `<li>${creator}<li/>`
    }

    const element = 
    `<article>
        <h2>${jsonData.name}</h2>
        <img src="${jsonData.thumbnail.path}.${jsonData.thumbnail.extension}">
        <h3>Creators</h3>
        <ul>${list}</ul>
    </article>`

    section.insertAdjacentHTML('afterbegin', element);
}

//clean up existing child elements
function removeElements() {
    const section = document.querySelector('section');
    while (section.firstChild) {
        section.removeChild(section.firstChild)
    }
    // https://medium.com/front-end-weekly/remove-all-children-of-the-node-in-javascript-968ad8f120eb
}

// render overview page
function allComics (data) {
    removeElements();
    createElement(data, 'comics');
}

// render detailpage
function comic (data) {
    removeElements();
    createDetail(data, 'comic-detail');
}

function searchResults (data) {
    removeElements();
    createElement(data, 'comics');
}

export {
    allComics,
    comic,
    searchResults
}