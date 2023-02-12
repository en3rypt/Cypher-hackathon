import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}
  async getHello(): Promise<any> {
    // const result = await this.db.create('vitalikWatchlist', ['matic-network']);
    return {
      message: 'Hello World!'
    };
  }
}
