import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}
  async getHello(): Promise<string> {
    // const result = await this.db.create('vitalikWatchlist', ['matic-network']);
    return `Hello Wold!`;
  }
}
