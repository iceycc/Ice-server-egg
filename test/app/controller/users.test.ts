import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('test/app/controller/users.test.ts', () => {
    it('should GET /users/list', async () => {
       let result =  await app.httpRequest().get('/users/list').expect(200);
        console.log(result.body);
        assert(result.body.length > 0);
    })

    it('should POST /users/add', async () => {
        let result =  await app.httpRequest().post('/users/add')
            .send({user:'user10'})
            .expect(200);
        console.log(result.body);
        assert(result.body.length > 0);
    });
});
