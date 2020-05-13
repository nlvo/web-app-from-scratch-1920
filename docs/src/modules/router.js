import * as api from '../modules/api';


function init () {

    routie({
        '': function () {
            api.showAllComics();
        },
        'characters': function () {
            api.showAllCharacters();
        },
        'comics': function () {
            api.showAllComics();
        },
        'comics/:id': function (id) {
            api.showComic(id);
        },
        'comic/:id': function (id) {
            api.showSearch(id);
        }
    })
}

export {
    init
};