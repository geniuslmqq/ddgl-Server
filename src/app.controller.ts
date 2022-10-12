import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { Server } from "socket.io";

@Controller()                                                 // 定义控制器
@ApiTags('眼镜')                                              // 定义标签
export class AppController {                                  // 定义服务
  constructor(private readonly appService: AppService) { }    // 注入服务

  @Get()                                                      // 定义路由
  @ApiOperation(
    { summary: '测试接口', description: '输出一段文字' }    // 定义描述
  )
  输入一段文字(): string {                                     // 定义服务
    return this.appService.getHello("<h1>哈哈哈哈哈</h1>");                // 调用服务
  }

}
