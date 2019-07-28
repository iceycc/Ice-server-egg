import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('211');
  }
  public async news() {
    const { ctx } = this;
    const lists = await ctx.service.news.getNewsList()
    await ctx.render('news', { lists });
  }
  public async counter(){
    const { ctx } = this;
    // @ts-ignore
    let count:number = ctx.cookies.get('count');
    count = count ? Number(count) : 0;
    // @ts-ignore
    ctx.cookies.set('count', ++count);
    ctx.body = count

  }
}
