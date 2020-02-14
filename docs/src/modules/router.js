import * as api from '../modules/api';

const routes = () => {
    routie({
        '': function () {
            api.getAllComics();
        },
        'characters': function () {

        },
        'characters/:id': function (id) {
            getDetail(id);
            // console.log(id);
        }
    })
}

export {
    routes
};