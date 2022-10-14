import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { 用户Schema,订单Schema } from './接口';


const M数据库用户集合 = MongooseModule.forFeature([      // 定义数据库模块
    {
        name      : 'M用户控制模块',   // 这个模块的名称
        schema    : 用户Schema,
        collection: '用户集合',      // 数据库中的集合名称
    }
])
const M数据库订单集合 = MongooseModule.forFeature([      // 定义数据库模块
    {
        name      : 'M订单控制模块',   // 这个模块的名称
        schema    : 订单Schema,
        collection: '旧订单',      // 数据库中的集合名称
    }
])



@Global()
@Module({
    imports: 
        [
            // 定义数据库连接 'mongodb://用户名:密码@地址:端口/数据库名?options...') 这是个模块
            MongooseModule.forRoot('mongodb://geniuslmt:geniuslmt@120.53.103.135:27017', { dbName: 'data' }), 
            // 这里是要导出的模块
            M数据库用户集合,M数据库订单集合,                        
        ],
    exports: [M数据库用户集合,M数据库订单集合],   // 导出数据库模块
})


export class 数据库Module { }
