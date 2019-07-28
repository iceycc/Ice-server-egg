import { Service } from 'egg';

/**
 * News Service
 */
export default class News extends Service {

    public async getNewsList() {
        return [{ title: '1' }, { title: '2' },{ title: '3' }];
    }
}
