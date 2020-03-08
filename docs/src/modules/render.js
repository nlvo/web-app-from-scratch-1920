// create html element
function createElement (jsonData, selector) {

    const section = document.querySelector('section');
    section.className = '';
    section.classList.add(selector);
    for (const comic of jsonData) {
        section.insertAdjacentHTML('beforeend',
            `<article>
                <img src="${comic.thumbnail}">
                <a href="#${selector}/${comic.id}"><h2>${comic.name}</h2></a>
                <p>Comics (${comic.comicsAvailabe})</p>
            </article>`);
    }
}

// create detail html element with classname
function createDetail (jsonData, selector) {
    const section = document.querySelector('section');
    section.className = '';
    section.classList.add(selector);
    let list = '';

    for (const creator of jsonData.creators) {
        list += `<li>${creator}<li/>`
    }

    const element = 
    `<article>
        <h2>${jsonData.name}</h2>
        <img src="${jsonData.thumbnail}">
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

function allCharacters (data) {
    removeElements();
    createElement(data, 'characters');
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

let links = document.querySelectorAll('.link');

function currentPage () {
    const page = location.hash.replace('#', '');
    return page;
}

function setPageActive () {
    const activePage = currentPage();
    for(let i = 0; i < links.length; i++) {
        const link = links[i].getAttribute('href').replace('#', '')
        if(link == activePage){
            links[i].classList.add('active')
        }
    }
}

function setLinkActive () {
    for(let i = 0; i < links.length; i++) {
        if(links[i].classList.contains('active')){
            links[i].classList.remove('active');
        }
    }
    this.classList.add('active');
}

for(let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', setLinkActive);  
}

setPageActive();

export {
    allComics,
    allCharacters,
    comic,
    searchResults
}