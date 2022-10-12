import { Module } from '@nestjs/common';
import { C客户端接口的方法类 } from './socket-test.service';
import { C客户端接口的控制类 } from './socket-test.gateway';

@Module({
  providers: [C客户端接口的控制类, C客户端接口的方法类]
})
export class 客户端接口模块 {}
