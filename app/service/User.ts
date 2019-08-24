import { Service } from 'egg';

export default class Users extends Service {
    public async getUserInfoById(id) {
        const {mysql}:any = this.app
        const user = await mysql.get('users', { id });
        return { user };
    }
    public async register(userInfo){
        const {mysql}:any = this.app
        const {phone,email,nickname,password,prefix,website} = userInfo
        console.log(phone,email,nickname,password,prefix,website);
        let res = await mysql.insert('users,',{phone,email,nickname,password,prefix,website})
        // await mysql.get('users', { id:'2' });
        console.log(res);
        return {msg:'成功'}
    }

}
