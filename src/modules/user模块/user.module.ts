import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { 用户Service } from './user.service';
import { 用户Controller } from './user.controller';
import { 用户Middleware } from 'src/middlewares/mid.middleware';

@Module({
  providers: [用户Service],
  controllers: [用户Controller]
})

export class 用户Module implements NestModule {        //使用NestModule接口定义模块
  configure(consumer: MiddlewareConsumer) {    //使用MiddlewareConsumer接口定义中间件
    consumer
      .apply(用户Middleware)                   //使用 用户Middleware 中间件
      .forRoutes('user');                      //对于路径为user的请求使用 用户Middleware 中间件
  }
}