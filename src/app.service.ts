import { Injectable } from '@nestjs/common';



@Injectable()
export class AppService { 
  F返回测试文字(文字参数: string): string {
    return 文字参数;
  }
}


