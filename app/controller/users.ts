import {Controller} from 'egg'
let users:string[] = []
export default class UsersController extends Controller{
    async list(){
        const {ctx} = this
        ctx.body = ['user1','user2']
    }
    async add(){
        const { ctx } = this
        const { user } = ctx.request.body
        users.push(user)
        ctx.body = users
    }
    async getUser(){
        const { ctx } = this;
        const {id} = ctx.query
        ctx.body = await ctx.service.user.getUserInfoById(id);
    }
    async register(){
        const {ctx} = this
        const {phone,email,nickname,password,prefix,website} = ctx.request.body
        console.log(ctx.request.body);
        ctx.body = await ctx.service.user.register({phone,email,nickname,password,prefix,website})
    }
}
