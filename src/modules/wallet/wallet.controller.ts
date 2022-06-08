import { Body, Controller, Post } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet-dto';
import { WalletDetailsDto } from './dto/wallet-details-dto';
import { WalletService } from './wallet.service';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post('/create')
  public create(@Body() wallet: CreateWalletDto): Promise<WalletDetailsDto> {
    return this.walletService.create(wallet);
  }
}
