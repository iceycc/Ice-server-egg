import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('test/app/controller/home.test.ts', () => {
  it('async await should GET /', async () => {
    const result = await app.httpRequest().get('/').expect(200);
    assert(result.text === 'hi, egg');
  });
  // 异步的测试分三种：promise、callback、async await
  it('callback should GET /',  function(done) {
    app.httpRequest().get('/').expect(200,done);
  });
  it('promise should GET /',function () {
    return app.httpRequest().get('/').expect(200)
  })
});
