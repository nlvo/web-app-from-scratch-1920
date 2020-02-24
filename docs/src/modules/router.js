import * as api from '../modules/api';

const routes = () => {
    routie({
        '': function () {
            api.allComics();
        },
        'comics': function () {
            // api.getAllCharacters();
        },
        'comics/:id': function (id) {
            api.getComic(id);
        }
    })
}

export {
    routes
};