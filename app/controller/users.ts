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
}