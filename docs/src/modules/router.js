import * as api from '../modules/api';


function init () {

    routie({
        '': function () {
            api.showAllComics();
        },
        'characters': function () {
            // api.getAllCharacters();
        },
        'comics': function () {
            api.showAllComics();
        },
        'comics/:id': function (id) {
            api.showComic(id);
        }
    })
}

export {
    init
};