import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): json {
    return 'Hello World!';
  }
}
