import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { 用户类 } from 'src/db/schemas/interface/接口';


@Injectable()                  // 可以在这里添加其他的服务
export class 用户Service {
    constructor(@InjectModel('M用户控制模块') private userModel: Model<用户类>) { } // 创建一个Model对象，用于操作数据库

    // 查询所有用户
    public async regist(user: 用户类) {
        return this.userModel.find({ 用户名: user.用户名 })
            .then(res => {
                if (res.length >=1) {
                    console.log('用户已存在');
                    console.log(res);
                    console.log(res.length);

                }
                else {
                    const createUser = new this.userModel(user);
                    return createUser.save();
                }
            })
    }

}




