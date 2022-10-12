import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { 数据库Module } from './db/数据库.module';
import { 客户端接口模块 } from './modules/socket的API/socket-test.module';


@Module({                             // 定义模块
  imports: [数据库Module, 客户端接口模块],     // 导入其他模块
  controllers: [AppController],       // 注册控制器
  providers: [AppService],            // 可以在这里添加其他的服务
})

export class AppModule {}             //导出AppModule模块 AppModule 是它的名字
