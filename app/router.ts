import {Application} from 'egg';

export default (app: Application) => {
    const {controller, router} = app;
    router
        .get('/', controller.home.index)
        .get('/counter', controller.home.counter)
        .get('/news', controller.home.news)
        .get('/playList', controller.music.catlist)
        .get('/users/list', controller.users.list)
        .get('/users/getUser', controller.users.getUser)
        .post('/users/add', controller.users.add)
        .post('/users/register', controller.users.register)
};
