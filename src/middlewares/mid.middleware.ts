import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextNotification } from 'rxjs';
import { Request, Response, NextFunction} from 'express';
import { 日志 } from 'src/main';


@Injectable()
export class 用户Middleware implements NestMiddleware {
  use(req: Request, res: Response, next:NextFunction) {
    日志.log('这是中间件');
    日志.log(req.body);
    next();
  }
}
