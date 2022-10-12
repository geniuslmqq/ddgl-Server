import { SchemaFactory } from "@nestjs/mongoose";
import { 用户类,订单类 } from "src/db/schemas/interface/接口";

export const 用户Schema = SchemaFactory.createForClass(用户类);  // 用一个用户类 创建一个Schema对象
export const 订单Schema = SchemaFactory.createForClass(订单类);  // 用一个订单类 创建一个Schema对象