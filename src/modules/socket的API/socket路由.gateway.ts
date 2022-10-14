import { WebSocketGateway, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { C客户端接口的方法类 } from './socket方法.service';
import { Logger } from '@nestjs/common';
import { Socket } from 'socket.io';
import { 用户类,订单类 } from 'src/db/接口';

// 创建一个网关，用于接收客户端的请求 端口号为8081 允许跨域请求
@WebSocketGateway(8081, {
  cors: {
    origin: '*'           // 允许跨域
  },
})

// 定义一个类，用于处理客户端的请求  
// 用SubscribeMessage配对
// 用 emit() 发送消息给客户端 
export class C客户端接口的控制类 {
  constructor(private readonly 服务功能: C客户端接口的方法类) { }

  @SubscribeMessage('测试socket')                                  // 接收客户端发送的消息
  socketTest(@MessageBody() data: any, @ConnectedSocket() 客户端: Socket) {
    客户端.broadcast.emit('广播', `-广播出去-${data.test}`);         // 广播到其他的客户端
    return "服务器收到";                                            // 发回给自己的客户端
  }


  //用户相关
  @SubscribeMessage('添加用户')
  创建用户(@MessageBody() 用户: 用户类) {
    return this.服务功能.CF创建用户(用户);
  }

  @SubscribeMessage('查找用户')
  查找用户(@MessageBody() 用户: string) {
    return this.服务功能.CF查找用户(用户);
  }

  @SubscribeMessage('所有用户数据')
  获取所有用户数据() {
    return this.服务功能.CF所有用户数据();
  }

  @SubscribeMessage('修改用户')
  修改用户(@MessageBody() 数据: 用户类) {
    return this.服务功能.CF修改用户(数据);
  }

  @SubscribeMessage('删除用户')
  删除用户(@MessageBody() 数据: 用户类) {
    return this.服务功能.CF删除用户(数据);
  }


  @SubscribeMessage('登录验证')
  登录验证(@MessageBody() 数据: 用户类) {
    return this.服务功能.CF登录验证(数据);
  }


  //订单
  @SubscribeMessage('旧订单数据')
  获取旧订单数据() {
    return this.服务功能.CF旧订单数据();
  }
  @SubscribeMessage('修改与添加订单')
  修修改与添加订单(@MessageBody() 数据: 订单类) {
    return this.服务功能.CF修改与添加订单(数据);
  }




}
