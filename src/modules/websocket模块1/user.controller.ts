import { Body, Controller, Post,  } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { 用户类 } from 'src/db/schemas/interface/接口';

import { 用户Service } from './user.service';

@Controller('user')                          // 定义控制器的路径 不可以是汉字 controller/user
@ApiTags('用户')
export class 用户Controller {
    constructor(private userService: 用户Service) { }  // 创建一个Service对象，用于操作数据库
    
    @Post()                          // 定义控制器的路径 不可以是汉字http://.com:3000/user/regist
    @ApiOperation({ summary: '注册', description: '注册' })
    async regist(@Body() user: 用户类) {
        return await this.userService.regist(user);
    }
}

