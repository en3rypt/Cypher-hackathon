import { Body, Controller,  Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { Delete, Get, Post, Put } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { DbService } from 'src/shared';
import { CreateTokenDto } from 'src/watchlist/dtos/CreateToken.dto';
import { createWatchlistDto } from 'src/watchlist/dtos/CreateWatchlist.dto';
import { DeleteTokenDto } from 'src/watchlist/dtos/DeleteToken.dto';
import { WatchlistService } from 'src/watchlist/services/watchlist/watchlist.service';
// import { AddTokenDto } from 'src/watchlist/dtos/AddToken.dto';
@Controller('watchlist')
export class WatchlistController {
    constructor(private readonly watchlistService: WatchlistService,private readonly dbservice:DbService) {}

    //2.1 Get all coins
    @Get('/coinlist')
    async getCoinList() {
        const data = await this.watchlistService.getCoinList();
        return data;
    }

    //Get all watchlists
    @Get('/getAll')
    async getAllWatchlists() {
        const data = await this.dbservice.find('All');
        return data;
    }

    //2.2 Create watchlist
    @Post('/create')
    @UsePipes(new ValidationPipe({
        transform: true,
        whitelist: true,
    }))
    async createWatchlist(@Body() payload: createWatchlistDto) {
        const data = await this.dbservice.create(payload.name, []);
        return data;
    }

    //2.3 Add token to watchlist by ID
    @Put('/addTokens/:id')
    @UsePipes(new ValidationPipe({
        transform: true,
        whitelist: true,
    }))
    async addTokens(@Body() payload: CreateTokenDto, @Param('id') id: string) {
        const tokens = await this.watchlistService.validateTokens(payload.tokensToBeAdded);
        const res = await this.dbservice.update(id, tokens);
        return res;
    }

    //2.4 Delete tokens from watchlist by ID
    @Put('/deleteTokens/:id')
    @UsePipes(new ValidationPipe({
        transform: true,
        whitelist: true,
    }))
    async deleteTokens(@Body() payload: DeleteTokenDto, @Param('id') id: string) {
        const tokens = await this.watchlistService.validateTokens(payload.tokensToBeDeleted);
        const res = await this.dbservice.delete(id, tokens);
        return res;
    }


    //2.5 Get watchlist by ID
    @Get('/get/:id')
    async getWatchlist(@Param('id') id: string) {
        const data = await this.dbservice.find(id);
        return data;
    }

    //2.6 Delete watchlist by ID
    @Delete('/delete/:name')
    async deleteWatchlist(@Param('name') name: string) {
        const data = await this.dbservice.deleteWatchlist(name);
        return data;
    }
}
