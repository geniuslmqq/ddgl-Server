import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { log } from 'console';
import { Model } from 'mongoose';
import { 用户类, 订单类 } from 'src/db/接口';
import { 日志 } from 'src/main';

@Injectable()
export class C客户端接口的方法类 {
  //constructor 通过注入的方式，将用户集合控制器注入到类中
  //用 用户集合控制 来控制数据库的操作
  constructor(
    @InjectModel('M用户控制模块') private 用户集合控制: Model<用户类>,
    @InjectModel('M订单控制模块') private 订单集合控制: Model<订单类>,
  ) { } // 创建一个Model对象，用于操作数据库


  //用户相关
  public async CF创建用户(用户: 用户类) {
    日志.log(用户)
    await new this.用户集合控制(用户).save();
    return `${用户.用户名}已经添加到数据库`;
  }

  public async CF删除用户(用户: 用户类) {
    await this.用户集合控制.deleteOne({ 用户名: 用户.用户名 });
    日志.log(`删除用户${用户.用户名}`);
    return `用户${用户.用户名}已删除`;
  }

  public async CF所有用户数据() {
    let 查找结果 = await this.用户集合控制.find();
    日志.log('查询到的用户数:' + 查找结果.length);
    return 查找结果
  }

  public async CF修改用户(用户: 用户类) {
    //upsert: true, 没有用户名就添加，有就修改
    await this.用户集合控制.updateOne({ 用户名: 用户.用户名 }, { $set: { 用户名: 用户.用户名, 密码: 用户.密码, 手机号: 用户.手机号 } }, { upsert: true });
    let 修改结果 = await this.用户集合控制.find({ 用户名: 用户.用户名 });
    日志.log(`修改结果为${修改结果[0]}`);
    return `修改结果为${修改结果[0]}`;
  }

  public async CF查找用户(用户: string) {
    let 查找结果 = await this.用户集合控制.find({ 用户名: 用户 });
    日志.log('查询到的用户数:' + 查找结果.length);
    return 查找结果[0]
  }

  public async CF登录验证(用户: 用户类) {
    let 查找结果 = await this.用户集合控制.find({ 用户名: 用户.用户名 });
    if (查找结果.length == 0) {
      return "此用户名未注册";
    }
    else if (查找结果[0].密码 != 用户.密码) {
      日志.log(用户.用户名 + " 的密码错误");
      日志.log(查找结果[0].密码);

      return "密码错误";
    }
    else if (查找结果[0].密码 == 用户.密码) {
      return "登录成功";
    }
    else {
      return "未知错误" + 查找结果[0];
    }

  }

  //订单相关
  public async CF旧订单数据() {
    let 查找结果 = await this.订单集合控制.find();
    日志.log("查询到的旧订单数:" + 查找结果.length);
    return 查找结果
  }

  public async CF修改与添加订单(订单: 订单类) {
    日志.log(订单);
    //upsert: true, 没有用户名就添加，有就修改
    //添加以订单号为主
    await this.订单集合控制.updateOne({ 订单号: 订单.订单号 }, {
      $set: {
        订单号: 订单.订单号,
        年:订单.年,
        月:订单.月,
        日:订单.日,
        镜片下单日: 订单.镜片下单日,
        旺旺名: 订单.旺旺名,
        收件人: 订单.收件人,
        镜片: 订单.镜片,

        右近视: 订单.右近视,
        右散光: 订单.右散光,
        右轴向: 订单.右轴向,
        左近视: 订单.左近视,
        左散光: 订单.左散光,
        左轴向: 订单.左轴向,        
        瞳距: 订单.瞳距,

        备注: 订单.备注,
      }
    }, { upsert: true });




    let 修改结果 = await this.订单集合控制.find({ 收件人: 订单.收件人 });
    日志.log(`修改结果为${修改结果[0]}`);
    return `修改结果为${修改结果[0]}`;
  }


}




























@Injectable()                  // 可以在这里添加其他的服务
export class 用户Service {
  constructor(@InjectModel('M用户控制模块') private userModel: Model<用户类>) { } // 创建一个Model对象，用于操作数据库

  // 查询所有用户
  public async regist(user: 用户类) {
    return this.userModel.find({ name: user.用户名 })
      .then(res => {
        if (res.length > 0) {
          console.log('用户已存在');
          //console.log(res);
          console.log(res.length);

        }
        else {
          const createUser = new this.userModel(user);
          return createUser.save();
        }
      })
  }

}