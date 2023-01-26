import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { BalancesController } from './controller/balances/balances.controller';
import { BalancesService } from './services/balances/balances.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ ConfigModule.forRoot(),HttpModule],
  providers: [BalancesService],
  controllers: [BalancesController]
})
export class BalancesModule {}

