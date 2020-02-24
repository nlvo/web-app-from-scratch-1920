import * as api from '../modules/api';

const routes = () => {
    routie({
        '': function () {
            api.allComics();
        },
        'characters': function () {
            api.allComics();
        },
        'comics': function () {
            api.allComics();
        },
        'comics/:id': function (id) {
            api.getComic(id);
        }
    })
}

export {
    routes
};