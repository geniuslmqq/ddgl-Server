import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { 数据库Module } from './db/db.module';
import { 用户Module } from './modules/user模块/user.module';   // 引入用户模块 (注意：不是引入user.module.ts) 这样引入的目的是为了让用户模块可以被其他模块引入
import { 客户端接口模块 } from './socket的APi/socket-test.module';


@Module({                             // 定义模块
  imports: [数据库Module, 用户Module, 客户端接口模块],     // 导入其他模块
  controllers: [AppController],       // 注册控制器
  providers: [AppService],            // 可以在这里添加其他的服务
})

export class AppModule {}             //导出AppModule模块 AppModule 是它的名字
