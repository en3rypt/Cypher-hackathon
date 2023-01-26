/* eslint-disable @typescript-eslint/no-var-requires */
/*
https://docs.nestjs.com/providers#services
*/

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { uuid } from 'uuidv4';  //dprecated
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class DbService {
  private WatchLists;
  // private coinList;

  constructor() {
    const dbLocal = require('db-local');
    const { Schema } = new dbLocal({ path: './databases' });

    // this.coinList = Schema('coinList', {
    //   _id: { type: String, required: true },
    //   symbol: { type: String, required: true },
    //   name: { type: String, required: true }
    // });

    
    this.WatchLists = Schema('WatchLists', {
      _id: { type: String, required: true },
      name: { type: String, default: 'Customer' },
      tokens: { type: Array, default: [] },
    });
  }

  async find(key: string) {
    if (key === 'All') {
      const res = this.WatchLists.find();
      return {
        message:"All Watchlists found successfully",
        data:res
      };
    }
    const reqWList:any = this.WatchLists.find({ _id: key });
    if (typeof reqWList !== 'undefined' && reqWList.length === 0) {
      throw new HttpException("Watchlist Not Found", HttpStatus.NOT_FOUND);
    }
    return {
      message:"Watchlist found successfully",
      data: reqWList
    };
  }

  async create(name: string, data: Array<string>) {
    const res = this.WatchLists.create({
      _id: uuidv4(),
      name: name,
      tokens: data,
    }).save();
    return {
      message:"Watchlist created successfully",
      data:res
    };
  }


  async update(key: string, data: Array<string>) {
    const reqWList:any = this.WatchLists.find({ _id: key });
    if (typeof reqWList !== 'undefined' && reqWList.length === 0) {
      throw new HttpException("Watchlist Not Found", HttpStatus.NOT_FOUND);
    }
    reqWList.forEach((element: any) => {
    const updatedTokens = [...new Set(element.tokens.concat(data))];
    element.update({ tokens: updatedTokens }).save();
    
    });
    return {
      message:"Tokens added to watchlist successfully",
      data:data
    }
  }


  async delete(key: string,data:Array<string>) {
    const reqWList:any = this.WatchLists.find({ _id: key });
    console.log(reqWList);
    if (typeof reqWList !== 'undefined' && reqWList.length === 0) {
      throw new HttpException("Watchlist Not Found", HttpStatus.NOT_FOUND);
    }

    reqWList.forEach((element: any) => {
    const updatedTokens = element.tokens.filter((item: any) => !data.includes(item));
    element.update({ tokens: updatedTokens }).save();
    });
    return {
      message:"Tokens deleted from watchlist successfully",
      data:data
    }
  }

  async deleteWatchlist(key: string) {
    const reqWList = this.WatchLists.find({_id:key });
    console.log(reqWList);
    if (typeof reqWList !== 'undefined' && reqWList.length === 0) {
      throw new HttpException("Watchlist Not Found", HttpStatus.NOT_FOUND);
    }
    reqWList.forEach((element: any) => {
      element.remove();
    });
    // const res = reqWList.delete();
    return {
      message:"Watchlist deleted successfully",
      data:reqWList
    }
  }

}
