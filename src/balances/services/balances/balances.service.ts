import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom, map } from 'rxjs';
import { HttpException } from '@nestjs/common/exceptions';
@Injectable()
export class BalancesService {
    constructor(private readonly httpService: HttpService) {

    }

    formatData(data: any){
      let Totalbalance = 0.0;
      let result:any = [];
      data.forEach((item: any) => {
        const { logo_url,contract_ticker_symbol, contract_name, contract_decimals,  balance, contract_address } = item;
        // const balanceInUSD = parseFloat(quote_rate) * parseFloat(balance) / Math.pow(10, contract_decimals);
        // console.log(balanceInUSD);
        // if( typeof balanceInUSD === 'number' && !isNaN(balanceInUSD)){
          
        //   Totalbalance += balanceInUSD;
        // }
        const balanceInUSD = parseFloat(balance) / Math.pow(10, contract_decimals); // formula unknown
        result.push({
            name: contract_name,
            symbol: contract_ticker_symbol,
            decimals: contract_decimals,
            contractAddress:contract_address,
            contractDecimals:contract_decimals,
            logo:logo_url,
            balance:balance,
            balanceInUSD:"$"+balanceInUSD
        })
      });
    return {Totalbalance,result};
    }


    outputData(data: any, chains:number[]): any {
        const result: any = {
            address: data.address,
            balances: {
              eth:[],
              polygon:[],
              phantom:[]
            },
            totalBalanceInUSD: 0.0
          }
        
        chains.forEach((chain) => {
  
          switch (chain) {
            case 1:
              
              var res = this.formatData(data.items[0])
              result.totalBalanceInUSD+=res.Totalbalance;
              result.balances.eth = res.result;
              break;
            case 137:
              var res = this.formatData(data.items[1])
              result.totalBalanceInUSD+=res.Totalbalance;
              result.balances.polygon = res.result;
              break;
            case 250:
              var res = this.formatData(data.items[2])
              result.totalBalanceInUSD+=res.Totalbalance;
              result.balances.phantom = res.result;
              break;
            default:
              break;
          }
        });
        result.totalBalanceInUSD = "$"+result.totalBalanceInUSD;
        return result;
    }

    async getAggrgate(address: string,chain:number): Promise<JSON>{
        const url = `https://api.covalenthq.com/v1/${chain}/address/${address as string}/balances_v2/?key=${process.env.COVALENT_API_KEY as string}`;
        const { data }: any = await firstValueFrom(
            this.httpService.get<any>(url, {
              headers: { "Accept-Encoding": "gzip,deflate,compress" }
            }).pipe(
              map((v:any) => { return v.data }),
              catchError((error) => {
                throw new HttpException(error.response.data, error.response.status);
              }),
            ),
          );
        return data.items;
    }

    async getData(address:string, chains:number[]){
      const result:any = {
        address: address,
        items: []
      }
      for (let i = 0; i < chains.length; i++) {
        const data = await this.getAggrgate(address, chains[i]);
        result.items.push(data);
      }
      return result;


    }
}

