import { Injectable } from '@nestjs/common';



@Injectable()
export class AppService {
 
 
 
  getHello(文字参数: string): string {
    return 文字参数;
  }

  
}


