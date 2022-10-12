import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common/services/logger.service';
import { Server } from 'socket.io';


let 监听端口 = 3000;

export let 日志 = new Logger('日志');

const bootstrap = async () => {                          // 定义启动函数
  const app = await NestFactory.create(AppModule);             // 创建应用


  const Swagger的config = new DocumentBuilder()                // 定义Swagger配置  用文档生成器
    .setTitle('李默工作室后台API')                                       // 设置标题
    .setDescription('眼镜工作室 API 描述')                        // 设置描述
    .setVersion('0.1')                                           // 设置版本
    .addTag('眼镜')                                              // 添加标签
    .build();                                                    // 创建配置
  const Swagger文档 = SwaggerModule.createDocument(app, Swagger的config);  // 用上面的配置 创建Swagger文档
  SwaggerModule.setup('api', app, Swagger文档);                            // 启动Swagger模块                                       
  
  await app.listen(监听端口);
}

bootstrap().then(() => { 
  日志.log(`监听端口是http://work.lmgwr.com:${监听端口}`) 
  日志.log(`api端口是http://work.lmgwr.com:${监听端口}/api`) 
});                                         
