import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SchemaFactory } from "@nestjs/mongoose";

// 用户的数据模型
@Schema()
export class 用户类 extends Document {       // 定义数据模型 之后通过这个class建立对象
    // @Prop()                              
    // @ApiProperty({ description: '用户名', example: 'admin' })   //一个例子
    // 用户名: string;
    @Prop()       用户名: string;
    @Prop()       密码 : string;
    @Prop()       手机号: string;

}
export const 用户Schema = SchemaFactory.createForClass(用户类);  // 用一个用户类 创建一个Schema对象


//旧订单的数据模型
@Schema()
export class 订单类 extends Document {       // 定义数据模型 之后通过这个class建立对象
    @Prop()    订单号  : string;
    @Prop()    删除信息 : string;
    @Prop()    年    : string;
    @Prop()    月    : string;
    @Prop()    日    : string;
    @Prop()    镜片下单日: string;
    @Prop()    收件人  : string;
    @Prop()    旺旺名  : string;
    @Prop()    镜片   : string;
    @Prop()    右近视  : string;
    @Prop()    右散光  : string;
    @Prop()    右轴向  : string;
    @Prop()    左近视: string;
    @Prop()    左散光: string;
    @Prop()    左轴向: string;
    @Prop()    瞳距: string;
    @Prop()    备注: string;

}
export const 订单Schema = SchemaFactory.createForClass(订单类);  // 用一个订单类 创建一个Schema对象

// 新订单的数据模型
@Schema()
export class 镜片类 extends Document {       // 定义数据模型 之后通过这个class建立对象
    @Prop()    镜片: string;
    @Prop()    品牌: string;
    @Prop()    系列: string;


}


