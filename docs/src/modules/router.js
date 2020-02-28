import * as api from '../modules/api';


const routes = () => {

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
    routes
};