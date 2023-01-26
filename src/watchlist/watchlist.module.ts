import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared';
import { WatchlistController } from './controller/watchlist/watchlist.controller';
import { WatchlistService } from './services/watchlist/watchlist.service';

@Module({
  imports: [SharedModule,HttpModule],
  controllers: [WatchlistController],
  providers: [WatchlistService]
})
export class WatchlistModule {}
