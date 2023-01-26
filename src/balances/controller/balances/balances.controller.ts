import { Controller, Get, Param } from '@nestjs/common';
import { BalancesService } from 'src/balances/services/balances/balances.service';

@Controller('balance')
export class BalancesController {
    constructor(private readonly balancesService: BalancesService) {}
    
    //1 Get aggregated balances for a given address
    @Get('/:address')
    async getAggregatedBalances(@Param('address') address: string) {
        const chains = [1,137,250];
        const result = await this.balancesService.getData(address, chains);
        const output = this.balancesService.outputData(result, chains);
        return output;
    }
}

