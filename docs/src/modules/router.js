import * as api from '../modules/api';


function init () {

    routie({
        '': function () {
            api.getAllComics();
            api.searchName();
        },
        'characters': function () {
            // api.getAllCharacters();
        },
        'comics': function () {
            api.getAllComics();
            api.searchName();
        },
        'comics/:id': function (id) {
            api.getComic(id);

        }
    })
}

export {
    init
};