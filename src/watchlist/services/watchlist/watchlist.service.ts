import { HttpService } from '@nestjs/axios';
import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { catchError, firstValueFrom, map } from 'rxjs';
import { DbService } from 'src/shared';

@Injectable()
export class WatchlistService {
    constructor(private readonly httpService: HttpService,private readonly dbService:DbService) {}

    async getCoinList() {
        const url = `https://api.coingecko.com/api/v3/coins/list`;
        
        const  data : any = await firstValueFrom(
            this.httpService.get<any>(url, {
              headers: { "Accept-Encoding": "gzip,deflate,compress" }
            }).pipe(
              map((v:any) => { return v.data }),
              catchError((error) => {
                throw new HttpException(error.response.data, error.response.status);
              }),
            ),
          );
        return data;
    }

    async createWatchlist(name: string) {
        let regex = /^[a-zA-Z0-9]*$/;
        if (name.length >= 5 && name.length <= 20 && name.match(regex)) {
        const data = await this.dbService.create(name, []);
        return data;
        } else {
        throw new BadRequestException('Watchlist name must be between 5 and 20 characters long')
        }
    }

    async validateTokens(tokens: any){
        const chainList = await this.getCoinList();
        const values = tokens.filter((v:any) => chainList.some((c:any) => c.id == v));
        return values;
    }

    
}
