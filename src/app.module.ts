import { SharedModule } from './shared';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BalancesModule } from './balances/balances.module';
import { WatchlistModule } from './watchlist/watchlist.module';

@Module({
  imports: [SharedModule, BalancesModule, WatchlistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

